from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return open("index.html").read()  # Serve the HTML file

@app.route('/submit', methods=['POST'])
def submit():
    # Get the JSON data sent from the frontend
    data = request.get_json()

    # Print the data to the console
    print("Received data:", data)

    # Send a response back to the frontend
    return jsonify({"message": "Data received successfully!", "data": data})

if __name__ == '__main__':
    app.run(debug=True)
