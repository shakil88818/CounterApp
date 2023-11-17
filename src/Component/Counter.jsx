import {useState} from 'react'

import './counter.css'

const Counter = () => {

    const [count, setCount] = useState(0)
    const [disable, setDisable] = useState(true)


    // Count Increase handler
    const handleIncrease=()=>{
        setCount((count)=>{
            return count + 1
        })
        setDisable(false)
    }
    

    // Count Decrease handler
    const handleDecrease=()=>{
        if(count > 1){
            setCount((count)=>{
                return count - 1
            })
        }
        else{
            setCount(0);
            setDisable(true);
        }

    }
    
    // Count Reset handler
    const handleReset=()=>{
        setCount(0)
    }

  return (
    <>
        <div className="counter center">
            <h1 className="counter__title">Counter App</h1>
            <div className="card center">
                <h2 className="card__title">Count : {count}</h2>
                <div className="card__btns">
                    <button className="btn card__btn" onClick={handleIncrease}>+</button>
                    <button className="btn card__btn" onClick={handleDecrease} disabled={disable}>-</button>
                    <button className="btn card__btn" onClick={handleReset}>0</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Counter
