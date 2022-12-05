import React, {useEffect} from 'react'
import '../signupignin/Result.css';
import { Link } from 'react-router-dom';

import ResultTable from './ResultTable';
import { useDispatch, useSelector} from 'react-redux';
import { attempts_Number, earnPoints_Number, flagResult } from '../../helper/helper';

/** import actions  */
import { resetAllAction } from '../../Redux/question_reducer';
import { resetResultAction } from '../../Redux/result_reducer';

export default function Result() {
    const dispatch=useDispatch()
    const { questions : { queue ,answers}, result : { result, userId}}  = useSelector(state => state)

    useEffect(() => {
        console.log(flag)
    })

    const totalPoints = queue.length * 10; 
    const attempts = attempts_Number(result);
    const earnPoints = earnPoints_Number(result, answers, 10)
    const flag = flagResult(totalPoints, earnPoints)

    function onRestart(){
        dispatch(resetAllAction())
        dispatch(resetResultAction())
    }

  return (
    <div className='container'>
        <h1 className='title text-dark'>Results</h1>

        <div className='result flex-center'>
        <div className='flex'>
                <span>Username</span>
                <span className='bold'>Shadab</span>
            </div>
            <div className='flex'>
                <span>Total Quiz Points : </span>
                <span className='bold'>{totalPoints || 0}</span>
            </div>
            <div className='flex'>
                <span>Total Questions : </span>
                <span className='bold'>{ queue.length || 0}</span>
            </div>
            <div className='flex'>
                <span>Total Attempts : </span>
                <span className='bold'>{attempts || 0}</span>
            </div>
            <div className='flex'>
                <span>Total Earn Points : </span>
                <span className='bold'>{earnPoints || 0}</span>
            </div>
            <div className='flex'>
                <span>Quiz Result</span>
                <span style={{ color : `${flag ? "#B20600" : "#F15412" }` }} className='bold'>{flag ? "Your suggested fields are administrative work, management, accountacy etc" : "Your suggested fields are technical jobs, business, scientific work etc"}</span>
            </div>
        </div>

        <div className="start">
            <Link className='btn' to={'/Candidate'} onClick={onRestart}><button>Restart</button></Link>
        </div>

        <div className="container">
            {/* result table */}
            <ResultTable></ResultTable>
        </div>
    </div>
  )
}


