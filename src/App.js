import React from 'react';
import Counter from './Counter';
import Container from './Container';
import './App.css';

import MyHeader from './MyHeader';

function App() {
  const counterProps = {
    a: 1,
    b: 2,
    c: 3,
    initialValue: 5,
  };

  return (
    <Container>
      <div className='App'>
        <MyHeader />
        <Counter {...counterProps} />
      </div>
    </Container>
  );
}

export default App;
