from flask import jsonify, make_response
from os import uname, listdir, getenv
from csv import writer
is_rpi = uname()[4] != 'x86_64'


def response(dict):
    result = make_response(jsonify(dict), 200)
    result.headers["Content-Type"] = "application/json"
    return result


def usb():
    user = getenv("USER")
    dir = '/media/' + user
    return listdir(dir)


def save_file(filename, recordings):
    header = ["Sample", "Timestamp", "Target", "Temperature"]
    user = getenv("USER")
    dir = '/media/' + user
    devices = listdir(dir)
    if len(devices) > 0:
        target = devices[0]
        dir = dir + '/' + target + '/' + filename
        with open(dir, 'w', encoding='UTF8') as f:
            csv_writer = writer(f)
            csv_writer.writerow(header)
            csv_writer.writerows(recordings)
            return True
    return False
