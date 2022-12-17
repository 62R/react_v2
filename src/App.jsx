import { useState } from 'react';
import './App.css';
import { Count as CountClass } from './class-components/Count';
import { Form as FormClass } from './class-components/Form';
import { Child } from './func-components/Child';
import { Count } from './func-components/Count';
import { Form } from './func-components/Form';

export const App = () => {
  const [name, setName] = useState('geek')
  const [count, setCount] = useState(0)


  const handleChangeName = (ev) => {
    setName(ev.target.value)
  }

  return (
    <div className="App">
      {/* <Form />
      <hr />
      <Count name={'geekbrains'} />
      <hr /> */}

      {/* <hr /><hr />
      <CountClass count={10} />
      <hr />
      <FormClass /> */}

      <input type="text" onChange={handleChangeName} />
      <p>{count}</p>
      <Child name={name} handleChangeCount={setCount} />
    </div>
  );
}

