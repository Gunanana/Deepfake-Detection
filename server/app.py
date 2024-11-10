import os
from werkzeug.utils import secure_filename
from flask import Flask, request, jsonify
from flask_cors import CORS
import time  # Simulate processing time
import tensorflow as tf

app = Flask(__name__)
CORS(app)  # Enable CORS for cross-origin requests

# Model loading with error handling
try:
    model = tf.keras.models.load_model('./dfd_ENB0_88_83.h5')  # Load the actual model here
    print("Model loaded successfully")
except Exception as e:
    print(f"Failed to load model: {e}")
    model = None

# File upload settings
UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['ALLOWED_EXTENSIONS'] = {'jpg', 'jpeg', 'png', 'mp4'}

# Create uploads folder if it doesn't exist
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']

# File Upload Endpoint
@app.route('/upload', methods=['POST'])
def upload_file():
    print("Upload request received")
    if 'file' not in request.files:
        print("No file part in request")
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']
    if file.filename == '':
        print("No file selected")
        return jsonify({'error': 'No selected file'}), 400

    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)
        print(f"File saved at {filepath}")

        # Simulate deepfake detection (replace with your model inference)
        time.sleep(3)  # Simulate processing time
        model_result = {'prediction': 0.85}  # Placeholder for prediction (use actual model output here)

        return jsonify({'message': f'File {filename} uploaded successfully',
                        'prediction': model_result['prediction'],
                        'image_url': filepath})

    return jsonify({'error': 'File type not allowed'}), 400


@app.route('/prediction', methods=['GET'])
def prediction():
    return jsonify({"message": "Redirected to prediction results."})

if __name__ == '__main__':
    app.run(debug=True)
