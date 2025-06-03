from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
CORS(app)

# Egyszerű memória-alapú felhasználó-tároló (username: hashed_password)
users = {}

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({'error': 'Felhasználónév és jelszó szükséges!'}), 400

    if username in users:
        return jsonify({'error': 'A felhasználónév már foglalt.'}), 409

    hashed_password = generate_password_hash(password)
    users[username] = hashed_password
    return jsonify({'message': 'Sikeres regisztráció!'}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({'error': 'Felhasználónév és jelszó szükséges!'}), 400

    hashed_password = users.get(username)
    if not hashed_password or not check_password_hash(hashed_password, password):
        return jsonify({'error': 'Hibás felhasználónév vagy jelszó.'}), 401

    return jsonify({'message': f'Sikeres bejelentkezés, {username}!'}), 200

if __name__ == '__main__':
    app.run(debug=True)
