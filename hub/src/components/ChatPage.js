// ChatPage.js
import React from 'react';

const ChatPage = () => {
  return (
    <div>
     
      <iframe
        src="http://localhost:5000/static/index.html"  // Flask static path
        width="100%"
        height="600px"
        style={{ border: 'none' }}
        title="Chatbot"
      />
    </div>
  );
};

export default ChatPage;