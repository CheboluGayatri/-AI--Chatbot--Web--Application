# AI Chatbot Web Application

## Internship Mini Project – THINK CHAMP PV LTD

### Project Overview

The AI Chatbot Web Application is a web-based chatbot developed using Python, Flask, HTML, CSS, and JavaScript. The application allows users to interact with a chatbot through a simple and user-friendly interface. Users can log in, send messages, use voice input, view chatbot responses in real time, and switch between light and dark modes.

The chatbot processes user messages and generates responses based on predefined knowledge stored in a JSON file.

---

## Features

- User Login Authentication
- Interactive Chat Interface
- Real-Time Chat Responses
- Voice Input Using Speech Recognition
- Dark Mode Toggle
- Chat History Storage
- Responsive Design for Mobile and Desktop
- Flask Backend Integration
- Dynamic Message Display
- Logout Functionality

---

## Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Python
- Flask

### Data Storage
- JSON Files

### Browser API
- Web Speech API (Voice Recognition)

---

## Project Structure

```text
AI_Chatbot/
│
├── app.py
├── chatbot.py
├── users.json
├── responses.json
├── chat_history.json
├── requirements.txt
│
├── templates/
│   ├── login.html
│   └── index.html
│
├── static/
│   ├── style.css
│   └── script.js
│
└── README.md
```

---

## Installation and Execution

### Step 1: Open Project Folder

Open the project folder in Visual Studio Code.

### Step 2: Create Virtual Environment

```bash
python -m venv .venv
```

### Step 3: Activate Virtual Environment

Windows:

```bash
.venv\Scripts\activate
```

### Step 4: Install Dependencies

```bash
pip install -r requirements.txt
```

### Step 5: Run the Application

```bash
python app.py
```

### Step 6: Open the Application in Browser

Open the following URL in your browser:

```text
http://127.0.0.1:5000
```

---

## Login Credentials

### Admin User

Username:

```text
admin
```

Password:

```text
9154
```

### Student User

Username:

```text
student
```

Password:

```text
9154
```

---

## How to Use

1. Open the application in your browser.
2. Login using the provided credentials.
3. Type a message and click **Send**.
4. The chatbot will generate a response instantly.
5. Click the microphone button to use voice input.
6. Click the moon icon to switch Dark Mode ON/OFF.
7. Click Logout to end the session.

---

## Sample Conversation

**User:** Hello

**Bot:** Hello! How can I help you today?

**User:** What is Machine Learning?

**Bot:** Machine Learning is a branch of AI that enables computers to learn from data.

**User:** Bye

**Bot:** Goodbye! Have a great day.

---

## Future Enhancements

- OpenAI API Integration
- Database Integration (MySQL)
- User Registration System
- Multi-Language Support
- Chat Export Feature
- Advanced AI-Based Responses

---

## Conclusion

This project demonstrates the development of an AI Chatbot using Flask with features such as authentication, voice input, dark mode, responsive UI, and dynamic chatbot interaction. It provides a practical implementation of web development concepts and basic AI chatbot functionality.

---

## Developed For

**THINK CHAMP PV LTD**

**Internship Mini Project – AI Chatbot Web Application**