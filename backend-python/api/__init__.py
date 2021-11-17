from flask import Flask
from flask_sqlalchemy import SQLAlchemy


# creat flask app
app = Flask(__name__)
app.config["SECRET_KEY"] = "secretkey"
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///data.sqlite"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

#create db obj
db = SQLAlchemy(app)


# blueprints config
from api.routes.views import main_bp
app.register_blueprint(main_bp)