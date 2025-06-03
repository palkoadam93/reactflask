from flask import Flask, jsonify
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
CORS(app)

courses = [
    {"id": 1, "name": "Python alapok", "desc": "Tanuld meg a Python alapjait!", "author": "Kiss Anna"},
    {"id": 2, "name": "Flask webfejlesztés", "desc": "Webalkalmazás backend Pythonban.", "author": "Nagy Péter"},
    {"id": 3, "name": "Gépi tanulás", "desc": "Bevezetés a gépi tanulás világába.", "author": "Szabó László"},
]

users = {}  # egyszerű memória alapú "adatbázis"

@app.route('/api/courses')
def get_courses():
    return jsonify(courses)

@app.route('/api/course/<int:course_id>')
def get_course(course_id):
    course = next((c for c in courses if c["id"] == course_id), None)
    if course:
        return jsonify(course)
    return jsonify({"error": "Kurzus nem található"}), 404

@app.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    if username in users:
        return jsonify({"error": "Felhasználó már létezik"}), 400

    users[username] = generate_password_hash(password)
    return jsonify({"message": "Sikeres regisztráció!"})

@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    hashed = users.get(username)
    if not hashed or not check_password_hash(hashed, password):
        return jsonify({"error": "Hibás név vagy jelszó"}), 401

    return jsonify({"message": "Sikeres bejelentkezés!"})

if __name__ == '__main__':
    app.run(debug=True)
