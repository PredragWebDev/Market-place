import { faArrowAltCircleRight, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Timer from './Timer';

const QuizContest = () => {
    const {participant} = useParams();
    const [select, setSelect] = useState("")
    
    const [questionCount, setQuestionCount] = useState(0)
    const [contestComplete, setContestComplete] = useState({contest_result:{},isFinishedPerticipant:{}})
    const [contestFirstComplete, setContestFirstComplete] = useState({})
    const [userAns, setUserAns] = useState({
        par_id: participant ? participant : null,
        question_count: 0,
        prev_question_id: null,
        prev_ans: ""
      })


        
    const [randomQuiz, setRandomQuiz] = useState("")
    useEffect(()=>{
        if (userAns.par_id) {


            fetch("https://blooming-thicket-66783.herokuapp.com/contest/run/quize",{

                method:"post",
                headers:{
                    "content-type":"application/json"
                },
                body: JSON.stringify(userAns)
            })
            .then(res=>res.json())
            .then(data=>{
                if (data.question) {
                    setRandomQuiz(data)
                    setQuestionCount(questionCount + 1 )
                }else if (data.quize_status === "quize_status") {
                    setContestFirstComplete(data)
                }else{
                    setContestComplete(data)
                }
            })
            
        }
    },[userAns.par_id])

    const handleClick = (option) => {
        setSelect(option);
        const _userAns = {...userAns}
        _userAns.prev_ans = option;
        _userAns.prev_question_id = randomQuiz.prev_question_id;
        setUserAns(_userAns)
    }

    const handleNextQuiz = () =>{
        if (userAns.par_id) {

            fetch("https://blooming-thicket-66783.herokuapp.com/contest/run/quize",{

                method:"post",
                headers:{
                    "content-type":"application/json"
                },
                body: JSON.stringify(userAns)
            })
            .then(res=>res.json())
            .then(data=>{
                if (data.question) {
                    setSelect(null)
                    setRandomQuiz(data)
                    setQuestionCount(questionCount + 1 )
                    const _userAns = {...userAns}
                    _userAns.prev_ans = "";
                    _userAns.prev_question_id = data.prev_question_id;
                    setUserAns(_userAns)
                }else if (data.quize_status === "quize_status") {
                    setSelect(null)
                    setContestFirstComplete(data)
                }else{
                    setSelect(null)
                    setContestComplete(data)
                }
            })
        }
    }

   

    if (contestComplete?.contest_result?.contest_status === "completed") {
        return <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center", height:"100vh"}}>
            <div style={{maxWidth:"fit-content",padding:"10px 50px", borderRadius:"15px", boxShadow:"0 0 15px 2px blue"}}>
                <h1 style={{color:'gold'}} >Congrates You have completed the Quize</h1>
                <h2 style={{color:'gold'}}>Total Question: {contestComplete.contest_result?.question_count}</h2>
                <h2 style={{color:'gold'}}>Time Saved: {contestComplete.contest_result?.remaining_time / 1000} seconds</h2>
                <h2 style={{color:'gold'}}>Valid Score: {contestComplete.contest_result?.valid_Score}</h2>
                <h2 style={{color:'gold'}}>Contest Lavel: {contestComplete.isFinishedPerticipant?.lavel}</h2>
                <h2 style={{color:'gold'}}>Contest Category: {contestComplete.isFinishedPerticipant?.playing_ctg}</h2>
            </div>
        </div>
    }
    
    if (contestFirstComplete?.quize_status === "completed") {
        <div>
            <h2 style={{color:'gold'}}>Total Question: {contestFirstComplete?.question_count}</h2>
            <h2 style={{color:'gold'}}>Time Saved: {contestFirstComplete?.remaining_time / 1000} seconds</h2>
            <h2 style={{color:'gold'}}>Valid Score: {contestFirstComplete?.valid_Score}</h2>
        </div>
        
    }
    return (
        <div>
            <h3 className='p-4' style={{color:'gold'}}>Hello and welcome to the QUIZ CONTEST!!!</h3>
            <div style={{display:"flex", justifyContent:"space-around"}}>
                <h4 style={{color:'gold'}} >Quiz No: {questionCount}</h4>
                <Timer handleNextQuiz={handleNextQuiz} questionCount={questionCount}></Timer>
            </div>
            <div className='p-3'>
                <h1 className='fs-4 text-center'>{randomQuiz?.question}</h1>
                <div className='mt-4'>
                    {
                        randomQuiz.options?.map((option, index) => {
                            return (
                                <>
                                    <div onClick={() => handleClick(option)} key={index} role="button" className={`my-2  px-4 py-2 mx-auto bg-success w-75 rounded text- ${select === option && `bg-warning text-secondary`}`}>
                                        <p> <FontAwesomeIcon icon={faCheckCircle} /> &nbsp;&nbsp;&nbsp; {option}</p>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                <div className='my-4 w-75 mx-auto'>
                    <button onClick={handleNextQuiz} className='btn btn-primary rounded-pill py-1 px-4 d-block ms-auto'>
                        Next &nbsp; <FontAwesomeIcon icon={faArrowAltCircleRight} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuizContest;