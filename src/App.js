import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>My First Amplify App</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Click Me!
      </button>
    </div>
  );
}

export default App;
