from flask import Flask
from flask import render_template
from flask import request
from flask import jsonify
from flask import redirect
from flask import session

import json

from chatbot import get_response

app = Flask(__name__)

app.secret_key = "chatbot_secret_key"


@app.route("/")
def login_page():
    return render_template("login.html")


@app.route("/login", methods=["POST"])
def login():

    username = request.form["username"]
    password = request.form["password"]

    with open("users.json", "r") as file:
        users = json.load(file)

    if username in users and users[username] == password:

        session["user"] = username

        return redirect("/chatbot")

    return "Invalid Username or Password"


@app.route("/chatbot")
def chatbot_page():

    if "user" not in session:
        return redirect("/")

    return render_template(
        "index.html",
        username=session["user"]
    )


@app.route("/chat", methods=["POST"])
def chat():

    data = request.get_json()

    user_message = data["message"]

    bot_response = get_response(user_message)

    try:

        with open("chat_history.json", "r") as file:
            history = json.load(file)

    except:
        history = []

    history.append({
        "user": user_message,
        "bot": bot_response
    })

    with open("chat_history.json", "w") as file:
        json.dump(history, file, indent=4)

    return jsonify({
        "response": bot_response
    })


@app.route("/logout")
def logout():

    session.clear()

    return redirect("/")


if __name__ == "__main__":

    app.run(debug=True)