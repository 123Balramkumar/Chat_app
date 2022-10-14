import {useState} from 'react';
import './App.css';

function App() {
  const [name,setName] = useState("UserName");

  return (
    <div >
      <h3>User: {name} </h3>
      <div className  ="chat-conainer" >
       <div className='container me'  >
       <p className="chatBox" >
          <strong>name </strong>
          <span> chat message  </span>
        </p>
       </div>
       <div className='container'  >
       <p className="chatBox" >
          <strong>name </strong>
          <span> chat message  </span>
        </p>
       </div>
         </div>
         <div className='btm' >
          <input type="text" placeholder="enter your msg" >
          </input>
          <button>send</button>
         </div>
    </div>
  );
}

export default App;
