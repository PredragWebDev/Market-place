import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hook/UseAuth';
import AddQuizQuestion from './AddQuizQuestion';
import "./quiz.css"

const StartQuiz = () => {
    const {user,admin } = useAuth();
    const navigate = useNavigate();
    const [parID,setParID] = useState(null);
    const [addQuizeModalOpen,setAddQuizeModalOpen] = useState(false);

    useEffect(()=>{
        if (user?.email) {

            // fetch(` http://localhost:7000/contest/id/${"dd@gmail.com"}`)
            fetch(`https://blooming-thicket-66783.herokuapp.com/contest/id/${user?.email}`)

            .then(res=>res.json())
            .then(data=>{
                if (data.par_id) {
                    setParID(data.par_id)
                }else{
                    alert("You have not registered for contest")
                }
            })
        }
    },[user?.email])
    const handleStartContest = () =>{

        if (user?.email) {

            // fetch(` http://localhost:7000/contest/id/${"dd@gmail.com"}`)
            fetch(`https://blooming-thicket-66783.herokuapp.com/contest/id/${user?.email}`)

            .then(res=>res.json())
            .then(data=>{
                if (data.par_id) {
                    navigate(`${data.par_id}`)
                }else{
                    alert("You have not registered for contest")
                }
            })
        }
    }


    return (
        <div style={{marginTop:"50px", width:"100%", height:"100%"}}>
            {
                addQuizeModalOpen ? <div  style={{display:"flex",justifyContent:"center"}}>
                        <AddQuizQuestion setAddQuizeModalOpen={setAddQuizeModalOpen}></AddQuizQuestion>
                    </div> 
                : <div>
                    {
                        parID ? <div>
                                <div style={{display:"flex",alignItems:"center",justifyContent:"center", position:"relative",}}>
                                    <button className='start-quiz startQuize-link'  style={{position:"absolute", top:"26%", border:"none", backgroundColor:"transparent",fontSize:"2rem",fontWeight:"900",padding:"0.6rem 4rem",color:"#0F5FE2 "}} onClick={handleStartContest}>START CONTEST</button>
                                    <img className='start-img'  src="https://i.ibb.co/V3Fv54c/quize-1-removebg-preview-1.png" alt="" />
                                </div>
                            </div>
                        :   <div>
                            <div style={{display:"flex",alignItems:"center",justifyContent:"center", position:"relative",}}>
                                <NavLink to={"/contestsregister"}  className='startQuize-link' style={{position:"absolute", top:"26%", border:"none", backgroundColor:"transparent",fontSize:"2rem",fontWeight:"900",padding:"0.6rem 2.3rem",color:"#0F5FE2 ",textDecoration:"none",}} >REGISTER CONTEST</NavLink>
                                <img className='start-img' src="https://i.ibb.co/V3Fv54c/quize-1-removebg-preview-1.png" alt="" />
                            </div>
                        </div>
                    }
                    <div>
                        {
                            admin && <div style={{textAlign:"center", marginTop:"15px", color:'#FFB700'}}>
                                <h1>Hey {user.displayName ? user.displayName : ""}, you are Admin!</h1>
                                <h3>You can add new quizes</h3>
                                {
                                    !addQuizeModalOpen && <button style={{display:"block",margin:"auto",fontWeight:"bold",border:"none",backgroundColor:"skyblue", borderRadius:"8px", padding:"3px 25px"}} onClick={()=>setAddQuizeModalOpen(true)}>+ Quize</button>
                                }
                            </div>
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default StartQuiz;