import React, { useState } from "react";
import axios from "axios";
import "../App.css"; 

const Chatbot = () => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  const askQuestion = async () => {
    if (!question) return;
    
    const res = await axios.post("https://customerdata-chatbot.onrender.com/ask", { question });
    setResponse(res.data.answer);
  };

  return (
    <div className="chat-container">
      <h2 className="chat-header">CDP Support Chatbot</h2>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Ask a question about Segment, mParticle, Lytics, Zeotap..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button onClick={askQuestion}>Ask</button>
      </div>

      <div className="chat-response">
        <p><strong>Answer:</strong> {response}</p>
      </div>
    </div>
  );
};

export default Chatbot;
