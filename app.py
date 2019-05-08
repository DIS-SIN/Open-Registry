from flask import Flask, redirect, url_for, request, jsonify, render_template
app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        data = request.get_json()
        response = jsonify(data)
        print(data)
        print(response)
        return response
    else: # if request.method == 'GET'
        return render_template('openRegistry.html')

if __name__ == '__main__':
   app.run(debug = True)