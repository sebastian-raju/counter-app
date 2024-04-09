import { useState, React } from "react";
import './Counter.css';


function Counter() {

  let [value, changeValue] = useState(0);

  function incrementValue(){
    changeValue(++value);
  }

  function decrementValue(){
    if(value>0){
      changeValue(--value);
    }
  }

  function resetValue(){
    changeValue( 0);
  }


  return (
    <div>
     <div className="counter-container">
          <div className="main-counting">{value}</div>
          <div className="main-btn-container">
            <div className="btn-container btn"><button onClick={incrementValue} className='inc-btn'>+</button></div>
            <div className="btn-container btn"><button onClick={decrementValue} className='dec-btn'>-</button></div>
            <div className="btn-container btn"><button onClick={resetValue} className='reset-btn'>Reset</button></div>
          </div>
        </div> 
    </div>
  )
}

export default Counter
