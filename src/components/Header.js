
import Marvel from "../img/Marvel.png";
const Header = () => {
  return (
    <div className="header">
      <form className="inside-header">
        <div className="second-block-inside1"> sfsdsq</div>
        <div className="second-block-inside2">
            <button></button>
        </div>
        <div className="second-block-inside3">
            <h3 className="submit-button">
         <strong >MARVEL</strong>  <strong>UNLIMITED</strong></h3>
         <p className="submit-button2" >SUBSCRIRE</p>
        </div>
        <div className="second-block-inside4">
          <img className="Marvel" src={Marvel} alt=""></img>
        </div>
        <div className="second-block-inside5">
        
          <h3 className="Button-sign">
            <strong >SIGN IN</strong> | <strong>JOIN</strong>
          </h3>
        </div>
        <div className="second-block-inside6">qjhdvhjqsb</div>
      </form>
      <div className="button-container">
          <span className="b"><strong>VIDEOS</strong></span>
          <span className="b"><strong>CHARACTERS</strong></span>
          <span className="b"><strong>COMICS</strong></span>
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