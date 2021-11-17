from api import app
from flask import Blueprint, jsonify, abort
from api.models import Properties
from .errors import rise_error

main_bp = Blueprint('main_bp', __name__)

@app.route('/', methods=['GET'])
def root():
    return jsonify({
        'message':'Server is up!'
    })


@app.route('/all', methods=['GET'])
def all():
    props = Properties.query.all()
    props = False
    if props:
        data = []
        for i in props:
            out = {}
            out['name'] = i.name
            out['units'] = i.units
            out['img'] = i.img
            data.append(out)
        return jsonify(data)
    else:
        return rise_error(500, 'Not able to get data')


