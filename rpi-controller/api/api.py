
"""
    Hardware layout 
                3V3  (1) (2)  5V    
              GPIO2  (3) (4)  5V    
              GPIO3  (5) (6)  GND   
              GPIO4  (7) (8)  GPIO14
                GND  (9) (10) GPIO15
             GPIO17 (11) (12) GPIO18  
             GPIO27 (13) (14) GND  
             GPIO22 (15) (16) GPIO23  
                3V3 (17) (18) GPIO24  
             GPIO10 (19) (20) GND   
              GPIO9 (21) (22) GPIO25
             GPIO11 (23) (24) GPIO8 
                GND (25) (26) GPIO7 
              GPIO0 (27) (28) GPIO1 
              GPIO5 (29) (30) GND   
              GPIO6 (31) (32) GPIO12  
             GPIO13 (33) (34) GND   
             GPIO19 (35) (36) GPIO16
             GPIO26 (37) (38) GPIO20
                GND (39) (40) GPIO21
"""

from flask import Flask, request, jsonify, make_response
from flask_socketio import SocketIO, send
from flask_cors import CORS
from time import sleep, time
from threading import Thread
from signal import pause
import json
import logging
from helpers import is_rpi

if is_rpi:
    from gpiozero import LED, Button

app = Flask(__name__)
log = logging.getLogger('werkzeug')
log.setLevel(logging.ERROR)
CORS(app)
app.config['SECRET_KEY'] = 'secret'
socketio = SocketIO(app, cors_allowed_origins="*")

port = 9999


def send_test():
    while True:
        socketio.send("test")
        sleep(3)


Thread(target=send_test, args=[]).start()


@app.route('/')
def index():
    return "... control server running on port %s" % port


@socketio.on('message')
def handle_message(msg):
    print("Message: " + msg)


app.run(host='0.0.0.0', debug=False, port=port)
