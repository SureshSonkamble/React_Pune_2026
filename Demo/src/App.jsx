import Home from "./Home" //component
import './App.css' //apply css
import logo from './assets/hmm.jpg'; //set image from asset
export default function App(){
  return(
<>
<div class="d">
<h1 id="h">This Is React App</h1>
<img src={logo} height={100} width={250}></img>
</div>
</>

  )
}