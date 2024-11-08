import os
from werkzeug.utils import secure_filename
from flask import Flask, request, jsonify

app = Flask(__name__)

# Placeholder route for the prediction
@app.route('/predict', methods=['POST'])
def predict():
    # Placeholder response
    return jsonify({'message': 'Model not ready yet, but this is a placeholder response.'})



# File endpoint
UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['ALLOWED_EXTENSIONS'] = {'jpg', 'jpeg', 'png', 'mp4'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'})
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        return jsonify({'message': f'File {filename} uploaded successfully'})
    return jsonify({'error': 'File type not allowed'})


if __name__ == '__main__':
    app.run(debug=True)
