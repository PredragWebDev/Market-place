import { useState } from "react";
import "./quiz.css"

const conCategories = ["Football","Cricket","Base-Ball","Basket-Ball","Table Tennis","Hockey Puck","Volley Ball"]
const conLavels = ["Easy","Normal","Hard"]

const AddQuizQuestion = ({setAddQuizeModalOpen}) => {
    const [newQuizInfo,setNewQuizInfo] = useState({});
    const [newQuizOptions,setNewQuizOptions] = useState({});

    const handleNewQuizChange = (e) =>{
        const _newQuizInfo = {...newQuizInfo}
        _newQuizInfo[e.target.name] = e.target.value;
        setNewQuizInfo(_newQuizInfo)
    }
    const handleNewQuizAnswerBlur = (e) =>{
        const _newQuizOptions = {...newQuizOptions}
        _newQuizOptions[e.target.name] = e.target.value;
        setNewQuizOptions(_newQuizOptions)
    }
    const handleQuizeAdd = (e) =>{
        // console.log(newQuizOptions.length);
        e.preventDefault();
        // console.log("click");
        const quizOptions = []
        Object.keys(newQuizOptions).map(property=>{
            quizOptions.push(newQuizOptions[property])
            return null
        })
        console.log(newQuizInfo);
        if ((quizOptions.length === 4) && (newQuizInfo.lavel) && (newQuizInfo.ans) && (newQuizInfo.question) && (newQuizInfo.playing_ctg)) {
            newQuizInfo.options = quizOptions
            
            fetch("https://blooming-thicket-66783.herokuapp.com/contest/quizes",{
                method:"post",
                headers:{
                    "content-type":"application/json"
                },
                body: JSON.stringify(newQuizInfo)
            })
            .then(res=>res.json())
            .then(data=>{
                if (data.insertedId) {
                    setNewQuizInfo({})
                    setNewQuizOptions({})
                    alert("Quiz Added successfully")
                    setAddQuizeModalOpen(false);
                }else{
                    alert("Something went wrong")
                }
            })
            
        }else{

            alert("All fields are required")
        }
        // console.log(quizOptions);
    }
    return (
        <div className="add-quiz" style={{marginBottom:"15px"}}>
            <button onClick={e=>setAddQuizeModalOpen(false)} style={{display:"block",marginLeft:"auto",border:"none",backgroundColor:"red", borderRadius:"8px", padding:"3px 25px", fontWeight:"bold"}}>X</button>
            <form className='px-3 mt-4' onSubmit={e=>handleQuizeAdd(e)}>
                <div className="mb-3 row">
                    <label htmlFor="question" className="col-sm-2 col-form-label">Question</label>
                    <div className="col-sm-10">
                        <input onChange={e=>handleNewQuizChange(e)} data-testid="question" type="text" name="question" className="form-control" id='question' placeholder='Add a question' required/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="question" className="col-sm-2 col-form-label">Options</label>
                    <div className="col-sm-10">
                        <input onBlur={e=>handleNewQuizAnswerBlur(e)} type="text" name='question1' className="form-control" id='question1' placeholder='Option 1' data-testid="option1" required/>
                        <input onBlur={e=>handleNewQuizAnswerBlur(e)} type="text" name='question2' className="form-control" id='question2' placeholder='Option 2' data-testid="option2" required />
                        <input onBlur={e=>handleNewQuizAnswerBlur(e)} type="text" name='question3' className="form-control" id='question3' placeholder='Option 3' data-testid="option3" required/>
                        <input onBlur={e=>handleNewQuizAnswerBlur(e)} type="text" name='question4' className="form-control" id='question4' placeholder='Option 4' data-testid="option4" required />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="question" className="col-sm-2 col-form-label">Answer</label>
                    <div className="col-sm-10">
                        <input  onChange={e=>handleNewQuizChange(e)} data-testid="answer" type="text" name="ans" className="form-control" id='question' placeholder='correct answer' required />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="playing_ctg" className="col-sm-2 col-form-label"> Category</label>
                    <div className="col-sm-10">
                        <select className="form-select" data-testid="q-ctg-select" name="playing_ctg" aria-label="Default select example"  onChange={e=>handleNewQuizChange(e)} id='playing_ctg' defaultValue={"Choose a category"} required>
                            <option value={"Choose a category"} data-testid="ctg-option" disabled>Choose a category</option>
                            {
                                conCategories.map(ctg=><option value={ctg} data-testid={"ctg-option"} >{ctg}</option>)
                            }
                        </select>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="level" className="col-sm-2 col-form-label">Level</label>
                    <div className="col-sm-10">
                        <select className="form-select"  onChange={e=>handleNewQuizChange(e)} name="lavel" aria-label="Default select example" id='level' defaultValue={"Choose a level"} required>
                            <option value={"Choose a level"} disabled>Choose a level</option>
                            {
                                conLavels.map(lavel=><option value={lavel}>{lavel}</option>)
                            }
                        </select>
                    </div>
                </div>
                <button style={{display:"block",margin:"auto",border:"none",backgroundColor:"skyblue", borderRadius:"8px", padding:"3px 25px", fontWeight:"bold"}} type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddQuizQuestion;