import React, { useEffect, useState } from 'react';
import './quiz.css'


const conCategories = ["Football","Cricket","Base-Ball","Basket-Ball","Table Tennis","Hockey Puck","Volley Ball"]
const conLavels = ["Easy","Normal","Hard"]

const ContestResult = () => {
    const [contBodyInfo,setContBodyInfo] = useState({playing_ctg:"Base-Ball",lavel:"Normal"});
    const [contestPoint,setContestPoint] = useState([]);
    const [contestUsers,setContestUsers] = useState([]);
    const [contestFinalResult,setContestFinalResult] = useState([]);
    

    useEffect(()=>{
        if (contBodyInfo.playing_ctg  && contBodyInfo.lavel) {



            console.log(contBodyInfo);

            fetch("https://blooming-thicket-66783.herokuapp.com/contest/result",{
                method:"post",
                headers:{
                    "content-type":"application/json"
                },
                body: JSON.stringify(contBodyInfo)
            })
            .then(res=>res.json())
            .then(data=>{
                setContestPoint(data);
            })
        }
    },[contBodyInfo])

    useEffect(()=>{
            fetch("https://blooming-thicket-66783.herokuapp.com/contest/participant")
            .then(res=>res.json())
            .then(data=>{
                setContestUsers(data);
            })
        
    },[])
    // console.log(contestUsers);
    useEffect(()=>{
        let _contestResult = [];
        console.log(contestPoint);
        contestPoint.forEach((result) =>{
            const resultedUser =  contestUsers.find(participant => participant.par_id === result.par_id)
            if (resultedUser) {
                Object.assign(resultedUser,result)
                _contestResult.push(resultedUser);
            }
        })
        const _contestFinalResult = _contestResult.sort((a,b)=>(a.position - b.position))
        setContestFinalResult(_contestFinalResult)
    },[contestPoint.length,contestUsers.length])


    
    const onChangeResultInfo = (e) =>{
        const _contBodyInfo = JSON.parse(JSON.stringify({...contBodyInfo}))
        _contBodyInfo[e.target.name] = e.target.value;
        setContBodyInfo(_contBodyInfo)
    }


    
    // dynamic boolet point
    const maxPoint = 30;
    const minPoint = 10;
    let sumPoint = maxPoint;
    const sizeArrayPoint = []
    contestFinalResult.map((item,index)=>{
        sumPoint = (sumPoint - (maxPoint-minPoint)/contestFinalResult.length)
        sizeArrayPoint.push(sumPoint)
    })
    
    if (!contestFinalResult.length) {
        return(
            <div style={{marginTop:"100px", textAlign:"center"}}>
                <h2 data-testid="result-loader">No Result Available Right Now</h2>
            </div>
        )
    }


    return (

        <div style={{display:"flex", flexDirection:"column",justifyContent:"center", alignItems:"center", marginTop:"30px"}} data-testid="result-table">
            <h2 style={{backgroundColor:"#9A61EC", width:"70%", textAlign:"center", padding:"20px 3px",margin:"10px 0 50px 0",borderRadius:"8px", color:"white",boxShadow:"0 0 6px 6px", textShadow:"5px 5px 12px blue"}}>Contest Result</h2>

        <div style={{display:"flex", flexDirection:"column",justifyContent:"center", alignItems:"center", marginTop:"30px"}}>
            <h2 className='contest-title' style={{backgroundColor:"#9A61EC", width:"70%", textAlign:"center", padding:"20px 3px",margin:"10px 0 50px 0",borderRadius:"8px", color:"white",boxShadow:"0 0 6px 6px", textShadow:"5px 5px 12px blue"}}>Contest Result</h2>

            <div style={{display:"block",width:"90%"}}>
                <div className='context-result-main-table' style={{borderTop:"2px solid",borderLeft:"2px solid",padding:"30px 30px 50px 30px", borderRadius:"10px",boxShadow:"0 0 3px 0", marginBottom:"20px"}}>
                    <div style={{display:"flex",justifyContent:"space-between", width:"100%",marginBottom:"15px"}}>
                        <div>
                            <select style={{border:"none", backgroundColor:"#61ECE0", borderRadius:"6px", padding:"2px 5px",fontWeight:"600"}} name="lavel" id="" defaultValue={"selece option"} onChange={e=>onChangeResultInfo(e)}>
                                <option value="selece option" disabled >selecte a lavel</option>
                                {
                                    conLavels.map(lavel=><option value={lavel}>{lavel}</option>)
                                }
                            </select>
                        </div>
                        <div>
                            <select style={{border:"none", backgroundColor:"#61ECE0", borderRadius:"6px", padding:"2px 5px",fontWeight:"600"}} name="playing_ctg" id="" defaultValue={"selece ctg"} onChange={e=>onChangeResultInfo(e)}>
                                <option value="selece ctg" disabled>selecte a category</option>
                                {
                                    conCategories.map(ctg=><option value={ctg}>{ctg}</option>)
                                }
                            </select>
                        </div>
                    </div>
                    <table style={{width:"100%", borderCollapse:"separate",borderSpacing:"0 8px"}}>
                        <thead>
                            <tr style={{fontWeight:"700",backgroundColor:"rgba(79, 137, 206, 0.6)"}}>
                                <th></th>
                                <th>Position</th>
                                <th className='contest-result-id'>Contest ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Time Remaining</th>
                                <th>Valid Score</th>
                                <th>Total Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contestFinalResult.map((result,id)=><tr style={{backgroundColor:"rgba(65,159,81,0.5)"}} data-testid="result-id">
                                    <td style={{display:"flex",justifyContent:"center",alignItems:"center",width:`${maxPoint+5}px`,height:`${maxPoint}px`}}>
                                        <div style={{width:`${sizeArrayPoint[id]}px`,height:`${sizeArrayPoint[id]}px`,borderRadius:"50%", backgroundColor:"palegreen"}}></div>
                                    </td>

                                    <td style={{}} data-testid="position">{result.position}</td>
                                    <td style={{}} data-testid="par_id">{result.par_id}</td>
                                    <td style={{}} data-testid="name">{result.name}</td>
                                    <td style={{}} data-testid="email">{result.email}</td>
                                    <td style={{}} data-testid="remaining_time">{result.remaining_time / 1000}</td>
                                    <td style={{}} data-testid="valid_Score">{result.valid_Score}</td>
                                    <td style={{}} data-testid="total_score">{result.total_score}</td>

                                    <td style={{}}>{result.position}</td>
                                    <td  className='contest-result-id' style={{}}>{result.par_id}</td>
                                    <td style={{}}>{result.name}</td>
                                    <td style={{}}>{result.email}</td>
                                    <td style={{}}>{result.remaining_time / 1000}</td>
                                    <td style={{}}>{result.valid_Score}</td>
                                    <td style={{}}>{result.total_score}</td>

                                </tr>)
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ContestResult;