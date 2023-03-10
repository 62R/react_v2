import { memo, useState } from 'react';

export const Child = memo(
  () => {
    const [count, setCount] = useState(0);
    console.log('render child');

    // useEffect(() => {
    //   console.log('botton did mount')
    //   const interval = setInterval(() => console.log(1), 1000)
    //   return () => {
    //     clearInterval(interval)
    //   }
    // }, [])

    return (
      <>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>+1</button>
      </>
    );
  },
  (prevProps, nextProps) => {
    if (prevProps.value === nextProps.value) {
      return true;
    }
    return false;
  }
);
