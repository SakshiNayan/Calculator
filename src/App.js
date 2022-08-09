import React, { useState } from 'react'
import "./calculator.css";

function App() {
  const [result , setResult] = useState("")
    const handleClick =(e)=>{
        setResult(result.concat(e.target.name))
    }
    const Clear=()=>{
      setResult("");
    }
    const Calculate =()=>{
      setResult(eval(result).toString());
    }
  return (
    <>
  
    <div id='calculator'>
        <h1>CALCULATOR</h1>
        
        <div id='cal-body'>
          <div className='formbody'>
            <form id>
              <input id='input' type="text" value={result}></input>
              <span><button className='eachNum' id="clear" onClick={Clear}>C</button></span> 
            </form>
          </div>
       
            <div>
                <button className='eachNum' name='1'  onClick={handleClick}>1</button>
                <button className='eachNum' name='2' onClick={handleClick}>2</button>
                <button className='eachNum' name='3' onClick={handleClick}>3</button>
                <button className='eachNum' name='/' onClick={handleClick}>&divide;</button>
            </div>
            <div>
                <button className='eachNum' name='4' onClick={handleClick}>4</button>
                <button className='eachNum' name='5' onClick={handleClick}>5</button>
                <button className='eachNum' name='6' onClick={handleClick}>6</button>
                <button className='eachNum' name='-' onClick={handleClick}>&ndash;</button>
            </div>
            <div>
                <button className='eachNum' name='7' onClick={handleClick}>7</button>
                <button className='eachNum' name='8' onClick={handleClick}>8</button>
                <button  className='eachNum' name='9' onClick={handleClick}>9</button>
                <button className='eachNum' name='+' onClick={handleClick}>+</button>
            </div>
            <div>
                <button  className='eachNum' name='.' onClick={handleClick}>.</button>
                <button className='eachNum' name='0' onClick={handleClick} >0</button>
                <button className='eachNum' name='=' onClick={Calculate} >=</button>
                <button className='eachNum' name='*' onClick={handleClick}>&times;</button>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default App;
