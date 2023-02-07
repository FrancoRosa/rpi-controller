

from flask import Flask, request
from flask_socketio import SocketIO, send
from flask_cors import CORS
from time import sleep, ctime
from threading import Thread
from enum import Enum
from helpers import response
from hardware import read_temp
import logging


app = Flask(__name__)
log = logging.getLogger('werkzeug')
log.setLevel(logging.ERROR)
CORS(app)
app.config['SECRET_KEY'] = 'secret'
socketio = SocketIO(app, cors_allowed_origins="*")

port = 9999


st = Enum('st', ["run", "pause", "stop"])
state = st.stop
recordings = []
time = 0
setpoint = 100


def process():
    global state, recordings, time, setpoint

    time_count = 0
    count = 0

    while True:
        if state == st.stop:
            print("process stop")
            recordings = []
            count = 0

        elif state == st.pause:
            print("process pause")

        elif state == st.run:
            count += 1
            record = [count, ctime(), setpoint, read_temp()]
            recordings.append(record)
            print(record)
            if time > time_count:
                time_count += 1
            else:
                state = st.stop

        sleep(1)


Thread(target=process, args=[]).start()


@app.route('/')
def index():
    return "... control server running on port %s" % port


@app.route('/start', methods=["POST"])
def start():
    global state, time, setpoint
    payload = request.get_json()
    time = float(payload["time"])
    setpoint = float(payload["setpoint"])
    state = st.run
    return response({"message": "ok"})


@app.route('/stop', methods=["POST"])
def stop():
    global state
    state = st.stop
    return response({"message": "ok"})


@app.route('/pause', methods=["POST"])
def pause():
    global state
    state = st.pause
    return response({"message": "ok"})


@socketio.on('message')
def handle_message(msg):
    print("Message: " + msg)


app.run(host='0.0.0.0', debug=False, port=port)
