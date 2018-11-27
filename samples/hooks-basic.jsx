import { useState } from 'react';

function Maravilhoso() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Hooks are {count} times cooler than classes.</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}