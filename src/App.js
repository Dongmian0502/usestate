import logo from './logo.svg';
import './App.css';
import React from 'react';
import Todolist from './Todolist';
import {TodosContext} from './Context/Todos';

function App() { 
  
  const [todos,setTodos]=React.useState([
        {title:'吃飯',completed:false},
        {title:'跑步',completed:true}
    ])
  return (
    <TodosContext.Provider value={todos}>
     <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Todolist/>
       </header>
      </div>
    </TodosContext.Provider>
  );
}

export default App;
  // const [value,setValue]=React.useState('test2')
  // //陣列左為方法,右為使用,隨意命名
  // const [btnText,setBtnText]=React.useState('點擊我')   