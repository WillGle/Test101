import './home.css'
import { useNavigate } from "react-router-dom"

function Home() {
  let navigate = useNavigate()

  const logger = () =>{
        navigate("/about")
    }
  
    const doSomething = () =>{

    }

    function doSThing(){
      
    }

    return (
      <div className="home">
        <h1>This is my Home</h1>
        <h2>Content of HOME</h2>
        <p>Paragraph of HOME</p>
        <button onClick={()=>logger()}>Click me</button>
      </div>
    );
  }
  
  export default Home;