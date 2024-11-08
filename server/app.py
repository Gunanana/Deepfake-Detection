import os
from werkzeug.utils import secure_filename
from flask import Flask, request, jsonify
import time  # Simulate processing time
# from model import predict_deepfake  # Import your actual model here

app = Flask(__name__)

# File upload settings
UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['ALLOWED_EXTENSIONS'] = {'jpg', 'jpeg', 'png', 'mp4'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']

# File Upload Endpoint
@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)

        # Simulate deepfake detection (replace with your model inference)
        time.sleep(3)  # Simulate processing time
        # model_result = predict_deepfake(filepath)  # Call your model here
        model_result = {'prediction': 0.85}  # Placeholder value for prediction (replace with real model output)

        return jsonify({'message': f'File {filename} uploaded successfully', 
                        'prediction': model_result['prediction'], 
                        'image_url': filepath})

    return jsonify({'error': 'File type not allowed'}), 400

@app.route('/prediction', methods=['GET'])
def prediction():
    # This can be a page for displaying the result
    return jsonify({"message": "Redirected to prediction results."})


if __name__ == '__main__':
    app.run(debug=True)
