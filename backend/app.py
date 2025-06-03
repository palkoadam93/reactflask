from flask import Flask, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

# JSON fájl betöltése
with open("courses.json", "r", encoding="utf-8") as f:
    courses = json.load(f)

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
