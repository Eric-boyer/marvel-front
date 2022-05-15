import { Link, useNavigate } from "react-router-dom";

import Marvel from "../img/Marvel.png";
const Header = () => {
    const navigate = useNavigate();
  return (
    <div className="header">
      <form className="inside-header">
        <div className="second-block-inside1"> </div>
        
        <div className="second-block-inside3">
            <h3 className="submit-button">
         <strong >MARVEL</strong>  <strong>UNLIMITED</strong></h3>
       <Link to="/signup"><p className="submit-button2" >SUBSCRIRE</p></Link> 
        </div>
        <div className="second-block-inside4">
          <img className="Marvel" src={Marvel} alt=""></img>
        </div>
        <div className="second-block-inside5">
        
          <Link to="/login"><h3 className="Button-sign">
            <strong >SIGN IN</strong> | <strong>JOIN</strong>
          </h3> </Link>
          </div>
        
        <div className="second-block-inside6"></div>
      </form>
      <div className="button-container">
          <span className="b" onClick={()=>{
              navigate("favoris")
          }}><strong>FAVORIS</strong></span>
          <span className="b" onClick={()=>{
              navigate("/characters")
          }}><strong>CHARACTERS</strong></span>
          <span className="b" onClick={()=>{
              navigate("/comics")
          }}><strong>COMICS</strong></span>
          <span className="b"><strong>MOVIES</strong></span>
          <span className="b"><strong>TV SHOWS</strong></span>
          <span className="b"><strong>GAMES</strong></span>
          <span className="b"><strong>NEWS</strong></span>
          <span className="b"><strong>MORE</strong></span>
      </div>
    </div>
  );
};

export default Header;
