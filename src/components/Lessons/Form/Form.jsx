import { useEffect, useRef, useState } from 'react';
import { Child } from './Child';

export const Form = () => {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);
  const buttonEl = useRef(null);

  const handleChangeCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log('myRef', buttonEl);
  }, []);

  return (
    <>
      <h3>Parent component</h3>
      <p>{count}</p>
      <button ref={buttonEl} onClick={() => setCount(count + 1)}>
        +1
      </button>
      <br />
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'hide' : 'show'}
      </button>
      <h3>Child component</h3>
      {visible && <Child value={0} changeCount={handleChangeCount} />}
    </>
  );
};
