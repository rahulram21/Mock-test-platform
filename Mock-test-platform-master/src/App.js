import "./app.css"
import {useState,useEffect} from "react";
export default function App() {
  return <div>
    
  <Navbar/>
  <Time/>
  <Form />
</div> 
}

const testData = [
  {
    id: 3457,
    question: "Language of the Web?",
    options:[ "JavaScript", "C","Java","Python"],
    answer:1
  },
  {
    id: 3459,
    question: "Language of the world?",
    options:[ "hindi", "Cinese","Javanese","Pythonese"],
    answer:4
  },
  {
    id: 8832,
    question: "Language of the Web?",
    options:[ "JavaScript", "C","Java","Python"],
    answer:4
  },
  {
    id: 1297,
    question: "Language of the Web?",
    options:[ "JavaScript", "C","Java","Python"],
    answer:4
  },
  {
    id: 9103,
    question: "Language of the Web?",
    options:[ "JavaScript", "C","Java","Python"],
    answer:4
  },
  {
    id: 2002,
    
    question: "Language of the Web",
    options:[ "JavaScript", "C","Java","Python"],
    answer:4
  }
];

const date = new Date();




function Navbar(){

  return<nav>
  <div class="nav-wrapper container">
    <a href="#" class="brand-logo">Mocker</a>
    <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li><a href="sass.html">Dashboard</a></li>
      <li><a href="badges.html">Logout</a></li>
     
    </ul>
  </div>
</nav>
}
function Time(){
  
  const [time,setTime] = useState(60000);
  useEffect(()=>{
    setTimeout(()=>{
      setTime(time-1000);
    },1000);
  },[time]);
  
  const getFormattedTime = () => {
    let total_seconds = parseInt(Math.floor(time/1000));
    let total_minutes = parseInt(Math.floor(total_seconds/60));

    let seconds = parseInt(total_seconds%60);
    let minutes = parseInt(total_minutes%60);
    if(time <=0){
    return "00:00";
    }
    else{
      return (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    }
  }
  return <div className="row "><div class="col s12 m6 "><h2 class="waves-effect waves-light btn col s3 offset-s8">Date : {date.getDate()}-{date.getMonth()+1}-{date.getFullYear()}</h2></div><div class="colour"><h2 class="waves-effect waves-light btn">Time  : {getFormattedTime()}</h2></div></div>
}

function Form(){
  return<div class="row ">
    <div class="col s12 m6 ">
      <div class="card #eceff1 blue-grey lighten-5 col s6 offset-s6">
        <div class="card-content ">
  <form>

    {testData.map((data)=><><p>{data.question}</p> {data.options.map((option,i)=>{return(<p><label><input type="radio" class="with-gap"  id="html" name={data.id} /><span >{option}</span></label></p>)})}</>)}
    

    
   
    
      
   
    <div class="sub">
    
    <input type="submit" class="waves-effect waves-light btn" name="Submit" />
    </div>

   
    



  </form>
  </div>
  </div>
  </div>
  </div>
  




}


