
from flask import Flask, request, jsonify
from backend.core.command_interpreter import interpret_command
from backend.core.task_dispatcher import dispatch_task

app = Flask(__name__)

@app.route('/zifah', methods=['POST'])
def run_zifah():
    data = request.json
    command = interpret_command(data.get("message", ""))
    result = dispatch_task(command)
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
