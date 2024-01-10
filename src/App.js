import "./app.css"


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

  return <div className="row "><div class="col s12 m6 "><a class="waves-effect waves-light btn col s3 offset-s8">Date: August, 04th 2014</a></div><div><a class="waves-effect waves-light btn">Time: 30:15:30</a></div></div>
}

function Form(){
  return<div class="row ">
    <div class="col s12 m6 ">
      <div class="card #eceff1 blue-grey lighten-5 col s6 offset-s6">
        <div class="card-content ">
  <form>

    {testData.map((data)=><><p>{data.question}</p> {data.options.map((option,i)=>{return(<p><label><input type="radio" class="with-gap"  id="html" name={data.id} /><span >{option}</span></label></p>)})}</>)}
    

    
   
    
      
   
   <div>
   <a class="waves-effect waves-light btn">button</a>
   </div>

   
    


  </form>
  </div>
  </div>
  </div>
  </div>
  




}


