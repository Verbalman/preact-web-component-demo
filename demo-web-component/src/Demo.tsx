import { useState } from 'react';

export function Demo({ name, startCount, onChangeCount }) {
  const [count, setCount] = useState(startCount ?? 0);

  return (
    <div>
      <p>Hello, {name}!</p>
      <button
        onClick={() => {
          setCount(count + 1)
          onChangeCount(count + 1)
        }}
      >
        Clicked {count} times
      </button>
    </div>
  );
}
