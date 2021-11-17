from api import app, db
from flask import Blueprint, jsonify, abort, request
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
    if props:
        data = []
        for i in props:
            out = {}
            out['id'] = i.id
            out['name'] = i.name
            out['units'] = i.units
            out['img'] = i.img
            data.append(out)
        return jsonify(data)
    else:
        return rise_error(500, 'Not able to get data')


@app.route('/add', methods=['POST'])
def add():
    data = request.get_json()
    if(data):
        new_propertie = Properties(
            name = data['name'],
            units = data['units'],
            img = data['img']
        )

        db.session.add(new_propertie)
        db.session.commit()
        return jsonify({"message":f"Propertie {data['name']} added!"})
    else:
        return rise_error(404, 'Need body data')


@app.route('/remove/<id>', methods=['GET'])
def remove(id):
    if id:
        id_exists = Properties.query.filter_by(id=id).first()
        if id_exists:
            db.session.delete(id_exists)
            db.session.commit()
            return jsonify({"message":f"Removed item with id: {id}"})
        else:
            return jsonify({"message":f"No propertie with id: {id}"})
    return jsonify({"message":"ID required"})


@app.route('/update', methods=['POST'])
def update():
    data = request.get_json()
    if data:
        propertie = Properties.query.filter_by(id=data['id']).first()
        if propertie:
            propertie.name = data['name'] if 'name' in data else propertie.name
            propertie.units = data['units'] if 'units' in data else propertie.units
            propertie.img = data['img'] if 'img' in data else propertie.img
            db.session.commit()
            return jsonify({"message":f"Propertie updated!"})
        else:
            return jsonify({"message":f"No propertie with id: {data['id']}"})

    return rise_error(404, 'Need body data')


@app.route('/filterby/<qnt>', methods=['GET'])
def update(qnt):
    print(qnt)
    ####


