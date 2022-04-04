import './home.css'

function Home() {

    const logger = () =>{
        console.log("Clicked")
        console.log("Extra")
    }

    return (
      <div className="home">
        <h1>This is my Home</h1>
        <h2>Content of HOME</h2>
        <p>Paragraph of HOME</p>
        <button onClick={()=>logger}>Click me</button>
      </div>
    );
  }
  
  export default Home;