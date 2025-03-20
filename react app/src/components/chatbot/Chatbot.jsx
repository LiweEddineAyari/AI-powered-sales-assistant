import React, { useState } from 'react';
import blur22 from '../../assets/images/blur/blur-22.svg';
import blur23 from '../../assets/images/blur/blur-23.svg';
import blur24 from '../../assets/images/blur/blur-24.svg';
import grid from '../../assets/images/cta/grid.svg';

const Chatbot = () => {
  const [chatbotVisible, setChatbotVisible] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'AI', text: 'Hi, how can I help you today?' },
  ]);
  const [input, setInput] = useState('');

  const toggleChatbot = () => {
    setChatbotVisible((prev) => !prev);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    setMessages([...messages, { sender: 'You', text: input }]);
    setInput('');
  };

  return (
    <div>
      {/* Chatbot Button */}
      <button
        className={`flex items-center justify-center w-10 h-10 rounded-[4px] shadow-solid-5 bg-purple hover:opacity-70 fixed bottom-24 right-8 z-999 ${
          chatbotVisible ? 'hidden' : ''
        }`}
        onClick={toggleChatbot}
      >
        <svg
          className="fill-white w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-105.9 0-192-86.1-192-192S150.1 64 256 64s192 86.1 192 192-86.1 192-192 192zm101.7-261.3l-81.6-81.6c-12.5-12.5-32.8-12.5-45.3 0L150 128.7c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L200 150.3V448c0 13.3 10.7 24 24 24h56c13.3 0 24-10.7 24-24V150.3l81.6-81.6c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"
            fill="white"
          />
        </svg>
      </button>

      {/* Chatbot Card */}
      {chatbotVisible && (
        <div
          className="fixed inset-0 flex items-center justify-center z-999 "
          data-wow-delay="0.4s"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent overlay
          }}
        >
          <div
            className="border border-purple/[0.4] relative max-w-[800px] w-full bg-dark rounded-[30px] overflow-hidden px-4 py-20 lg:py-25 z-999 border-purple"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            data-wow-delay="0.4s"
          >
            {/* Background Shapes */}
            <span className="absolute bottom-0 left-0 -z-1">
              <img src={grid} alt="grid" />
            </span>
            <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden">

              <span className="absolute left-1/2 bottom-0 -translate-x-1/2 -z-1">
                <img src={blur23} alt="blur" className="max-w-none" />
              </span>
              <span className="absolute left-1/2 bottom-0 -translate-x-1/2 -z-1">
                <img src={blur24} alt="blur" className="max-w-none" />
              </span>
            </div>

            {/* Stars */}
            <div className="max-w-[800px] w-full h-full overflow-hidden absolute -z-1 -bottom-25 left-1/2 -translate-x-1/2">
              <div className="stars"></div>
              <div className="stars2"></div>
            </div>

            {/* Close Button */}
            <button
              className="absolute top-4 right-4 bg-transparent border-none"
              onClick={toggleChatbot}
            >
              X
            </button>

            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="flex justify-between items-center ">
                <div>
                  <h3 className="font-semibold text-4xl text-white">Chat with Us</h3>
                </div>
              </div>

              {/* Messages List */}
              <div className="flex-1 overflow-y-auto px-4 py-4 max-h-[500px] min-h-[500px] ">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex my-4  ${
                      message.sender === 'You' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`${
                        message.sender === 'You'
                          ? 'bg-purple/[0.7] text-white'
                          : 'border-white/[0.12] bg-white/[0.05] text-white'
                      } rounded-lg p-3 max-w-[75%]`}
                    >
                      <div className="flex items-start gap-2">
                        <span className="flex-shrink-0 w-8 h-8 bg-gray-600 rounded-full border flex items-center justify-center">
                          {message.sender === 'AI' ? '🤖' : '👤'}
                        </span>
                        <div>
                          <p className="font-semibold">{message.sender}</p>
                          <p className="text-sm break-words max-w-[300px]">{message.text}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input Area */}
              <div className="flex items-center pt-2  border-gray-700 mt-5">
                <input
                  type="text"
                  class="text-white rounded-lg border border-white/[0.12] bg-white/[0.05] focus:border-purple w-full py-3 px-6 outline-none"                  
                  placeholder="Type your message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button
                  className="ml-2 inline-flex items-center justify-center rounded-md text-sm font-medium text-white bg-purple hover:bg-purple-700 h-10 px-4 py-2"
                  onClick={sendMessage}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;