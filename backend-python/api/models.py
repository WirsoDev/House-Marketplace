from api import db


class Properties(db.Model):
    id =  db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    units = db.Column(db.String(255))
    img = db.Column(db.String(255))

    def __init__(self, name, units, img):
        self.name = name
        self.units = units
        self.img = img

    def __repr__(self):
        return f"{self.id} -- {self.name} | {self.units} | {self.img}"



