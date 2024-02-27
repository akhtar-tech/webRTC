import React, { useEffect } from 'react';
import socketIO from 'socket.io-client';

const ws = 'http://localhost:8080';

function App() {
  useEffect(() => {
    socketIO(ws);
  }, []);
  return (
    <div className="App">
      <button className="bg-sky-500 hover:bg-sky-700">
        start new meeting
      </button>
    </div>
  );
}

export default App;