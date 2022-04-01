import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { PieChart } from 'react-minimal-pie-chart';
import classes from "./Style.module.css";

const Result = () => {



  let location: any = useLocation();
  let NewState = location.state;

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/ques");
  }

  let right = 0;
  let wrong = 0;

  if (NewState.questionair[0].UserAnswer === "1") {
    right++;
  }
  else {
    wrong++;
  }
  if (NewState.questionair[1].UserAnswer === "20") {
    right++;
  }
  else {
    wrong++;
  }
  if (NewState.questionair[2].UserAnswer === "1") {
    right++;
  }
  else {
    wrong++;
  }
  if (NewState.questionair[3].UserAnswer === "1") {
    right++;
  }
  else {
    wrong++;
  }
  if (NewState.questionair[4].UserAnswer === "1") {
    right++;
  }
  else {
    wrong++;
  }


  return (
    <div>
      <p><h2>This is Your Result : - {NewState.NewState}</h2></p>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center"><h2>Questions</h2></TableCell>
              <TableCell align="center"><h2>Correct Answer</h2></TableCell>
              <TableCell align="center"><h2>User Answer</h2></TableCell>
              <TableCell align="center"><h2>Result</h2></TableCell>
            </TableRow>
          </TableHead>
          {/* 1 */}
          <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{NewState.questionair[0].Questions}</TableCell>
              <TableCell align="center">{NewState.questionair[0].Options[1]}</TableCell>
              <TableCell align="center">{NewState.questionair[0].Options[NewState.questionair[0].UserAnswer]}</TableCell>
              <TableCell align="center">{NewState.questionair[0].UserAnswer === '1' ? "True" : "false"}</TableCell>
            </TableRow>

            {/* 2 */}
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{NewState.questionair[1].Questions}</TableCell>
              <TableCell align="center">{NewState.questionair[1].CorrectAnswer}</TableCell>
              <TableCell align="center">{NewState.questionair[1].UserAnswer}</TableCell>
              <TableCell align="center">{NewState.questionair[1].UserAnswer === '20' ? "True" : "false"}</TableCell>
            </TableRow>

            {/* 3 */}
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{NewState.questionair[2].Questions}</TableCell>


              <TableCell align="center">

                {NewState.questionair[2].Options[1]},{NewState.questionair[2].Options[3]}

              </TableCell>
              <TableCell align="center">
                {Object.keys(NewState.questionair[2].UserAnswer).map((item: any, index) => {
                  if (NewState.questionair[2].UserAnswer[item]) {
                    return (
                      `${NewState.questionair[2].Options[index + 1]} `
                    )
                  }

                })
                }
              </TableCell>
              <TableCell align="center">{NewState.questionair[2].UserAnswer === [1 ,3] ? "True" : "false"}</TableCell>
            </TableRow>


            {/* 4 */}
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{NewState.questionair[3].Questions}</TableCell>
              <TableCell align="center">{NewState.questionair[3].Options[1]}</TableCell>
              <TableCell align="center">{NewState.questionair[3].Options[NewState.questionair[3].UserAnswer]}</TableCell>
              <TableCell align="center">{NewState.questionair[3].UserAnswer === '1' ? "True" : "false"}</TableCell>
            </TableRow>


            {/* 5 */}
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{NewState.questionair[4].Questions}</TableCell>
              <TableCell align="center">{NewState.questionair[4].Options[1]}</TableCell>
              <TableCell align="center">{NewState.questionair[4].Options[NewState.questionair[4].UserAnswer]}</TableCell>
              <TableCell align="center">{NewState.questionair[4].UserAnswer === '1' ? "True" : "false"}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <p> <Button variant="contained" onClick={handleClick}>GoTo Ques</Button></p>
      <div>
        <p>
          <span className={classes.green}>Right </span>
        </p>
        <p>
          <span className={classes.red}>Wrong </span>
        </p>
        <PieChart
          radius={20} startAngle={120} viewBoxSize={[100, 100]} labelPosition={65}
          label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
          center={[50, 25]}
          labelStyle={{
            fontSize: '7px'
          }}

          data={[
            { title: 'Right', value: right, color: '#008000' },
            { title: 'Wrong', value: wrong, color: '#C13C37' }
          ]}

        />;

      </div>
    </div>
  )
}

export default Result