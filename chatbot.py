import json

# Load responses
with open("responses.json", "r") as file:
    responses = json.load(file)


def get_response(message):

    message = message.lower().strip()

    # Greetings
    greetings = [
        "hello",
        "hi",
        "hey",
        "hlo",
        "helo",
        "good morning",
        "good afternoon",
        "good evening"
    ]

    if message in greetings:
        return "Hello! How can I help you today?"

    # Search keywords in message
    for key, value in responses.items():

        if key.lower() in message:
            return value

    return "Sorry, I don't understand. Please ask another question."