import logo from './logo.svg';
import './App.css';
import './style.css';
import myWonderfulImage from "./ImageInSrc.jpg"

function App() {
  return (
  <div>  
    <div style={{border:"solid 1px black",maxWidth:"100vw"}} >
      <h1 class="title red">CheckPoint JSX</h1>
      <br/>
      <div class="cont">
        <img src={myWonderfulImage} width="500" height="350" alt="srcimage"/>
        <br/>
        <img src="/imageInPublic.jpg" width="500" height="350" alt="pubimage"/>
      </div>
    </div>
    <br/><br/>
    <video style={{border:"solid 1px black",maxWidth:"100vw",marginLeft:"90px"}} width="320" height="240" controls>   
    <source src="myVideo.mp4" type="video/mp4" />
    </video>
  </div> 
  );
}

export default App;
