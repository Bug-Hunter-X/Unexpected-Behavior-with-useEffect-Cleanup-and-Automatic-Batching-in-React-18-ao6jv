```javascript
import { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const isMounted = useRef(true);

  useEffect(() => {
    // This effect runs only once on mount
    console.log('Mounted!');
    return () => {
      isMounted.current = false; // Prevent re-render after unmount
      // Cleanup logic that doesn't depend on re-rendering
    };
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```