import React from 'react';
import './App.css';

import MyHeader from './MyHeader';

function App() {
  let name = '수진';

  const style = {
    App: {
      backgroundColor: 'black',
    },
    h2: {
      color: 'yellow',
    },
  };

  const func = () => {
    return '함수 호출도 가능하군요';
  };

  let number = 5;

  return (
    <div style={style.App} className='App'>
      <MyHeader />
      <header className='App-header'>
        <h2 style={style.h2}>안뇽 {name}</h2>
        <p style={style.h2}>{1 + 2}</p>
        <p style={style.h2}>{func()}</p>
        <p style={style.h2}>{'하하하'}</p>
      </header>
      <b style={style.h2}>
        {number}는 : {number % 2 === 0 ? '짝수' : '홀수'}
      </b>
    </div>
  );
}

export default App;
