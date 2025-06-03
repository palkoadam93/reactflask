from flask import Flask, jsonify
from flask_cors import CORS

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

if __name__ == '__main__':
    app.run(debug=True)
