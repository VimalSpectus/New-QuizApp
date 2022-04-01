import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useNavigate } from "react-router-dom";
import classes from "./Style.module.css";
import FormGroup from '@mui/material/FormGroup';
import { color, keys } from '@mui/system';



const Ques = () => {
  const [next, setNext] = useState<number>(1);
  const [questionair, setQuestionair] = useState([

    {
      Questions: "2 + 2 =  4",
      CorrectAnswer: "1",
      UserAnswer: "",
      Options:
      {
        1: "True",
        2: "False"
      }

    },

    {
      Questions: " What is a 10 + 10",
      CorrectAnswer: "20",
      UserAnswer: ""
    },

    {
      Questions: "Whaat is a 2+2+2+4",
      CorrectAnswer: [1, 3],
      UserAnswer: {
        "one": false,
        "two": false,
        "three": false
      },
      Options:
      {
        1: "10",
        2: "20",
        3: "10"
      }

    },

    {
      Questions: "what is a 5 + 5",
      CorrectAnswer: "1",
      UserAnswer: "",
      Options:
      {
        1: "10",
        2: "5",
        3: "15"
      }

    },

    {
      Questions: " what is react.js",
      CorrectAnswer: "1",
      UserAnswer: "",
      Options:
      {
        1: "React.js is library of javascript",
        2: "React.js is framework of javascripts"
      }

    }
  ]);


  let location: any = useLocation();
  let NewState = location.state;

  const hdlClick = () => {
    setNext(prev => prev + 1)
  }

  const hdlClickBack = () => {
    setNext(prev => prev - 1)
  }

  const handlePage = (value: number) => {
    setNext(value);
  }


  const setAnswer = (e: any, questionNo: number, key: any = 0) => {
    const tmpQuestion = questionair;
    if (questionNo==2) {
      // @ts-ignore
      tmpQuestion[questionNo].UserAnswer[key] = e.target.checked;
    }else{
      tmpQuestion[questionNo].UserAnswer = e.target.value
    }
    setQuestionair(tmpQuestion);
   
  }

  let navigate = useNavigate();
  const btnSub = () => {
    navigate("/result", { state: { NewState, questionair } });
  }

    // @ts-ignore
  console.log(questionair[2].UserAnswer.one);

  

  return (
    <div>
      <p><h2>Welcome TO Start Quiz {NewState}</h2></p>

      {/* pagination section */}
      <div>
      <p>
        <span style={{ background: questionair[0].UserAnswer !== "" ? "red" : 'gray' }} className={classes.pagination} onClick={() => {
          handlePage(1)
        }}><b>1</b></span>
        <span style={{ background: questionair[1].UserAnswer !== "" ? "red" : 'gray' }} className={classes.pagination} onClick={() => {
          handlePage(2)
        }}><b>2</b></span>  
        <span style={{ background: Object.values(questionair[2].UserAnswer).filter((item)=> item === true).length > 0  ? "red" : "gray" }} className={classes.pagination} onClick={() => {
          handlePage(3)
        }}><b>3</b></span>
        <span style={{ background: questionair[3].UserAnswer !== "" ? "red" : 'gray' }} className={classes.pagination} onClick={() => {
          handlePage(4)
        }}><b>4</b></span>
        <span style={{ background: questionair[4].UserAnswer !== "" ? "red" : 'gray' }} className={classes.pagination} onClick={() => {
          handlePage(5)
        }}><b>5</b></span>
      </p>  
    </div>
      {next === 1 ? (
        <div>
          <p>Question 1 -  <span> 2 + 2 =  4</span></p>
          <p>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                defaultValue={questionair[0].UserAnswer}
                onChange={(e) => setAnswer(e, 0)}
              >
                <FormControlLabel value="1" control={<Radio />} label="True" />
                <FormControlLabel value="2" control={<Radio />} label="False" />
              </RadioGroup>
            </FormControl>
          </p>
        </div>
      ) : null}

      {next === 2 ? (
        <div>
          <p>Question 2-  What is a 10 + 10</p>
          <p><TextField id="standard-basic" label="Answer" defaultValue={questionair[1].UserAnswer} onChange={(e) => setAnswer(e, 1)} variant="standard" /></p>
        </div>
      ) : null}

      {next === 3 ? (
        <div>
          <p>Question 3 - Whaat is a 2+2+2+4</p>
          <div className={classes.center}>
            <FormGroup  >
              <FormControlLabel 

              control={<Checkbox />}  label="10" value="1" onChange={(e) => setAnswer(e, 2, "one")} />
              <FormControlLabel  control={<Checkbox />} value="2" label="20" onChange={(e) => setAnswer(e, 2, "two")} />
              <FormControlLabel  control={<Checkbox />} value="3" label="10" onChange={(e) => setAnswer(e, 2, "three")} />
            </FormGroup>
          </div>
        </div>
      ) : null}



      {next === 4 ? (
        <div>
          <p>Question 4-  what is a 5 + 5   </p>
          <p> <Box sx={{ minWidth: 200 }}>
            <FormControl >
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={(e) => setAnswer(e, 3)}
                defaultValue={questionair[3].UserAnswer}
              >
                <MenuItem value="1">10</MenuItem>
                <MenuItem value="2">5</MenuItem>
                <MenuItem value="3">15</MenuItem>
              </Select>
            </FormControl>
          </Box></p>
        </div>
      ) : null}

      {next === 5 ? (
        <div>
          <p>Question 5 - what is react.js</p>

          <p>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                defaultValue={questionair[3].UserAnswer}
              >
                <FormControlLabel value="1" onChange={(e) => setAnswer(e, 4)} control={<Radio />} label="React.js is library of javascript" />
                <FormControlLabel value="2" onChange={(e) => setAnswer(e, 4)} control={<Radio />} label="React.js is framework of javascript" />
              </RadioGroup>
            </FormControl>
          </p>
          <p><Button variant="contained" onClick={btnSub}>Submit</Button></p>
        </div>
      ) : null}

      {next === 5 ? null : (
        <p><Button variant="contained" onClick={() => {
          hdlClick();
        }}>Next</Button></p>
      )}

      {next === 1 ? null : (
        <p><Button variant="contained" onClick={() => {
          hdlClickBack();
        }}>Back</Button></p>
      )}

    </div>
  )

}

export default Ques;