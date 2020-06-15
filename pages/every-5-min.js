import React, { Component } from 'react';

import { isValidCron } from 'cron-validator'

import cronstrue from 'cronstrue';

import { useState, useEffect } from 'react';



let i = 1;

export default function App(props) {

  useEffect(() => 
  {
    let url = window.location.href
    console.log(url)
    
    let exp = url.match(/[^#]*$/g)[0].split('_').join(" ")

    let inputValues = url.match(/[^#]*$/g)[0].split("_")

    let min = document.getElementById('min')
    let hour = document.getElementById('hour')
    let dayMonth = document.getElementById('dayMonth')
    let month = document.getElementById('month')
    let weekDay = document.getElementById('weekDay')


   
    

  

    
    
    if(isValidCron(exp)){

      min.value = inputValues[0]; 
      hour.value = inputValues[1]; 
      dayMonth.value = inputValues[2]; 
      month.value = inputValues[3]; 
      weekDay.value = inputValues[4];
      document.getElementById('ans').innerHTML = cronstrue.toString(exp);
      document.getElementById('anscode').innerHTML = exp;
      
     
    }


  }
  );
  
const handleClick = () =>{



  console.log('hello click')
  
  
  let min = document.getElementById('min').value;
  let hour = document.getElementById('hour').value;
  let dayMonth = document.getElementById('dayMonth').value;
  let month = document.getElementById('month').value;
  let weekDay = document.getElementById('weekDay').value;

  let dumExp =  min+" "+hour+" "+dayMonth+" "+month+" "+weekDay

  
 

  //Cron validation
  if (isValidCron(dumExp)){

    let stateObj = {
      id: "100"
  };

    window.history.replaceState(stateObj,'/',"/#"+dumExp.split(" ").join("_"));


    document.getElementById('ans').innerHTML = cronstrue.toString(dumExp);
    document.getElementById('anscode').innerHTML = dumExp;
    console.log('validate')
  }
  else {

    document.getElementById('ans').innerHTML = "Please enter a valid Cron";
    document.getElementById('anscode').innerHTML = " ";

  }
}

// Focus event

const handleFocus = (e) => {

  e.target.value = ""

}


//change text on focus

const handleMin = () => {
  document
      .getElementById("info-cont")
      .innerHTML = " <ul>    <li> *   any value</li> <li>,    value list separator</li><li> -      range of values" +
          "</li> <li>/    step values</li> <li> 0-59    allowed value </li> </ul>"
}



const handleHour = () => {
  document
      .getElementById("info-cont")
      .innerHTML = " <ul>    <li> *   any value</li> <li>,    value list separator</li><li> -    range of values" +
          "</li> <li>/    step values</li> <li> 0-23    allowed value </li> </ul>"
}

const dayOfMonth = () => {
  document
      .getElementById("info-cont")
      .innerHTML = " <ul>    <li>* any value</li> <li>,    value list separator</li><li> -    range of values" +
          "</li> <li>/    step values</li> <li> 1-31    allowed value </li> </ul>"
}


const handleMon = () => {
  document
      .getElementById("info-cont")
      .innerHTML = " <ul>    <li>* any value</li> <li>,    value list separator</li><li> -    range of values" +
          "</li> <li>/    step values</li> <li> 1-12    allowed value </li> </ul>"
}

const handleDw = () => {
  document.getElementById("info-cont").innerHTML = " <ul>    <li>* any value</li> <li>,    value list separator</li><li> -    range of values" +
          "</li> <li>/    step values</li> <li> 0-6    allowed value </li> </ul>"
}


  

  
  


  

    



    

    
    return (

      <body>

<style jsx>{`@import url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Exo:ital,wght@1,500&display=swap');


body{
  background-color: black !important;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-family: "Roboto Mono" !important;
  background: #0f0f0f !important;
  color: #fff !important;
 
 
}

h2{
  text-align: center;
}
.desc{
  margin-top: 0;
}

.answer{
  margin-top: 2em;
}


.main{
  display: flex;
  flex-direction: column;

}

.inputGroups{
  text-align: center;
  
}


.heading{
  text-align: center;
  font-size: 3em;
  margin-bottom: 0;
  padding-bottom: 0;
  color: rgb(218, 218, 39);
}

.button{
  text-align: center;
}

.header{
  text-align: center;
}

.Answer {
  text-align: center;
  font-family: 'Exo', sans-serif;
  
}
.code{
  text-align: center;
}

td
{
  text-align: center;
  padding-left: 1.5vw;
  padding-right: 1.5vw;
  
}
h3{
  margin-top: 0;
}

.inputMain{
  display: flex;
  align-items: center;
  justify-content: center;
}

.inputs{
  text-align: center;
  width: 10vw;
  height: 3vw;
  font-size: 3vw;
  font-weight: bold;
  padding: 0.2em;
  border-radius: 1.5vw;
  border: #f1bc0e solid 3px ;
  transition: border ease 0.5s;
}

.inputs:focus{
  border:#53d616 solid 3px;
  
}

.answer{
  font-size: 1.5em;
}

button{
  height: 3vw;
  width: 10vw;
  border-radius: 10px;
  font-size: 2vw;
  text-align: center;
  font-weight: 200;
  background-color: white;
  transition: all 0.5s ease;
  
}

button:hover{
  background-color:#DADA27 ;
  color: black;
 
 
  box-shadow: white;
}

#info-cont{

  align-self: center;
  margin-top: 1vw;
}

#exampletable{
  border:#DADA27 0.1em solid ;
  align-self: center;
  margin-top: 1vw;
  margin-bottom: 1vw;
 
}

.exTable tr td {
  border:#DADA27 0.2em solid ;
  padding: 3vw;
  min-width: 10vw;
  
}

p{
  text-align: center;
}

a{
  
  color: white;
}

a:hover{
  color: green;
}












`}
</style>
      
      <div className = "main">
        

        <div className = "header">
            <h1 className = "heading">CronExpress</h1>
            <p className = "desc">a simple cron generator by Prajeesh Javkar</p>
        </div>
        

        <div className = "answer">
                <h2 className = "Answer" id = "ans">{cronstrue.toString(props.cronExp)}</h2>
                <code><h2 className = "code" id = "anscode">{props.cronExp}</h2></code>
        
        </div>
        

       
        <div className = "inputMain">

          {/* Table for inputs */}
        
         <table>

           <tr>
            <td ><input className = "inputs" type = 'text' onFocus = {handleFocus}   id = "min"  onFocus = {handleMin} defaultValue = {props.cronArr[0]}></input></td>
            <td ><input className = "inputs" type = 'text' onFocus = {handleFocus}  id = "hour"  onFocus = {handleHour} defaultValue = {props.cronArr[1]}></input></td>
            <td ><input className = "inputs" type = 'text' onFocus = {handleFocus}  id = "dayMonth"  onFocus = {dayOfMonth} defaultValue = {props.cronArr[2]}></input></td>
            <td> <input className = "inputs" type = 'text' onFocus = {handleFocus}  id = "month"  onFocus = {handleMon} defaultValue = {props.cronArr[3]} ></input></td>
            <td ><input className = "inputs" type = 'text' onFocus = {handleFocus}  id = "weekDay"  onFocus = {handleDw} defaultValue = {props.cronArr[4]}></input></td>
          </tr>


          <tr>
            <td><h3>Minute</h3></td>
            <td><h3>Hours</h3></td>
            <td><h3>Day</h3></td>
            <td><h3>Month</h3></td>
            <td> <h3>WeekDay</h3></td>
          </tr>
        </table>
        </div>  
          
          
         <div className = "button"><button id = 'submit' onClick = {handleClick}>Submit!</button></div> 
         

         {/* {info content here} */}
        <div id = "info-cont">
          
          <ul>    
            <li>* any value</li> 
            <li>,    value list separator</li>
            <li> -    range of values" + "</li> 
            <li>/    step values</li> 
            <li> 1-31    allowed value </li> 
          </ul>
         
        </div>

        {/* Example table here */}

        <div id = "exampletable">
          <p><h2>Examples</h2></p>
          <table className = "exTable">
            <tr>
              <td>every minute</td>
              <td><a href= "/every-min" target="_blank">* * * * *</a></td>
            </tr>


            <tr>
            <td>every 5 minute</td>
              <td><a href= "/every-5-min" target="_blank">*/5 * * * *</a></td>
            </tr>

            <tr>
              <td>every day</td>
              <td><a href= "/every-day" target="_blank">0 0 * * * </a></td>
            </tr>

            <tr>
              <td>monthly</td>
              <td><a href = "/monthly" target= "_blank">0 0 1 * *</a></td>
            </tr>

            <tr>
              <td>every year</td>
              <td><a href = "/every-year" target= "_blank">0 0 1 1 *</a></td>
            </tr>
            
          </table>
          
         
        </div>
        
      </div>
      </body>
    );



  }


    App.getInitialProps = async () => {
        let Exp = '*/5 * * * *'
        let splitExp = Exp.split(' ')
        
   
    return { cronExp: Exp,
        cronArr : splitExp

 }
  }