from flask import jsonify

def rise_error(status_code:int, message='Something go wrong', action='No action'):
    response = jsonify({
        'status': status_code,
        'message': message,
        'action': action
    })
    response.status_code = status_code
    return response