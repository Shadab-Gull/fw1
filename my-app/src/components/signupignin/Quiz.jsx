import React from 'react'
import Questions from './Questions'
import { useSelector, useDispatch } from 'react-redux'
import { MoveNextQuestion, MovePrevQuestion } from '../../hooks/FetchQuestions';
import'./Quiz.css'
import { useEffect, useState } from 'react'
import { PushAnswer } from '../../hooks/setResult';
import { Navigate } from 'react-router-dom';

export default function Quiz() {
    const [check, setChecked] = useState(undefined)
const result=useSelector(state=>state.result.result);
const { queue, trace } = useSelector(state => state.questions);
    const dispatch = useDispatch()

useEffect(()=>{
    console.log(result)
})
    function onNext(){
        console.log('on next click')
        if(trace < queue.length){
            /** increase the trace value by one using MoveNextAction */
            dispatch(MoveNextQuestion());

            if(result.length<=trace){
                dispatch(PushAnswer(check))
            }    
        }
        setChecked(undefined)
    }
    function onPrev(){
        console.log('on prev click')
        if(trace > 0){
            /** decrease the trace value by one using MovePrevQuestion */
            dispatch(MovePrevQuestion());
        }
    }
    function onChecked(check){
        console.log(check)
        setChecked(check)
    }
    if(result.length && result.length >= queue.length){
        return <Navigate to={'/Result'} replace={true}></Navigate>
    }
  return (
    <div className='container'>
    <h1 className='title text-dark'>Solve the quiz</h1>


<Questions onChecked={onChecked}/>
    <div className='grid'>
    { trace > 0 ? <button className='btn prev' onClick={onPrev}>Prev</button> : <div></div>}
        <button className='btn next' onClick={onNext}>Next</button>
    </div>
    </div>
  )
}

