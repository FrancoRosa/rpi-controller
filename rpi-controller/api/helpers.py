from flask import jsonify, make_response
from os import uname
is_rpi = uname()[4] != 'x86_64'


def response(dict):
    result = make_response(jsonify(dict), 200)
    result.headers["Content-Type"] = "application/json"
    return result
