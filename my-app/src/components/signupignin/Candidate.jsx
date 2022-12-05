import { useEffect } from "react"
import {  useNavigate,Link } from 'react-router-dom'
import "./Candidate.css";


function Candidate() {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('TOKEN')
        if (!token) {
            navigate('/signin')
        }
    })

    return (
        <div >
            
            <div className="box">
                <span> {localStorage.getItem('EMAIL')} </span>
                <button className="cbtn1"
                    onClick={() => {
                        localStorage.clear()
                        navigate('/signin')
                    }}
                > LOGOUT </button>
            </div>
            <div className="outcard" id="oc1">
            <Link to="/Quiz"><button className="cbtn2">Start Questionnaire</button></Link>
            
            </div>
        </div>
    )
}


export default Candidate