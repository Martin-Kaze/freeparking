import "./Nav.css";

import {useState} from "react"


function Nav () {

    const [closed, setclosed] = useState(false);

    return (
    <nav> 
  <a className={ (closed) ? "nav-btn closed" : "nav-btn " } href="/city">City</a>
  <a className={ (closed) ? "nav-btn closed" : "nav-btn " } href="/info/">Info</a>
  <a className={ (closed) ? "nav-btn closed" : "nav-btn " } href="/help/">Help</a>
  <button onClick={ () => {
    setclosed(prev => !prev)
  }}>
   
    Close
  </button>
</nav>
    )
}
export default Nav;