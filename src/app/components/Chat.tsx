'use client';

import { useChat } from 'ai/react';
import { useState } from 'react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        className="chat-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle chat"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {isOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </>
          ) : (
            <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/>
          )}
        </svg>
      </button>
      
      <div className={`chat-window glass-panel ${isOpen ? 'open' : ''}`}>
        <div className="chat-header">
          <h3>Infinity AI Assistant</h3>
        </div>
        
        <div className="chat-messages">
          {messages.length === 0 ? (
            <div className="message ai animate-fade-up">
              Hi there! I'm the Infinity Electric virtual assistant. How can I help you with your electrical needs in Maui today?
            </div>
          ) : (
            messages.map((m) => (
              <div key={m.id} className={`message ${m.role === 'user' ? 'user' : 'ai'} animate-fade-up`}>
                {m.content}
              </div>
            ))
          )}
        </div>
        
        <form onSubmit={handleSubmit} className="chat-input-form">
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Ask me anything..."
          />
          <button type="submit" className="btn btn-primary" style={{ padding: '0.75rem', borderRadius: '50%' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          </button>
        </form>
      </div>
    </>
  );
}