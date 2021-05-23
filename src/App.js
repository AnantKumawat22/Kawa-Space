import { useState } from 'react';
import './App.css';
import Group_2 from './Group_2';
import Group_5 from './Group_5';
import Group_6 from './Group_6';

function App() {

  const [bigcard, setBigcard] = useState(null);

  return (
    <>
      <Group_2 />
      <Group_5 bigcard={bigcard} />
      <Group_6 setBigcard={setBigcard} />
    </>
  );
}

export default App;
