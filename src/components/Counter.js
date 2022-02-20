import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Actions from '../redux/actions';
import '../components/styles.css'

const Counter = () => {
    const count = useSelector((state) => state.count );
    const dispatch = useDispatch();
    console.log("counter");
  return (
    <div>
        <button className='counter-button-one' onClick={()=> dispatch(Actions.counterActions.increaseCount(50))}>Increase</button>
        <button className='counter-button-two'  onClick={()=> dispatch(Actions.counterActions.decreaseCount(50))}>Decrease</button>
        <span className='counter-span'>{ count}</span>
    </div>
  )
}

export default Counter;

