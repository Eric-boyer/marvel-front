import { useState } from "react";


const Signup = () => {
    const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
 // const [errorMessage, setErrorMessage] = useState("");

    return <div className="box-container">
    
    <form className="Signup-container" >
    <h2 > Signup</h2>

    <input
      value={username}
      type="text"
      placeholder="username"
      onChange={(event) => setUsername(event.target.value)}

      
    />
    <br />
    <input
      value={email}
      type="email"
      placeholder="email"
      onChange={(event) => setEmail(event.target.value)}
     
    />
    <br />
    <input
      value={password}
      type="password"
      placeholder="password"
      onChange={(event) => setPassword(event.target.value)}

    />
    <br />
    <input
      value={newsletter}
      type="checkbox"
      placeholder="newsletter"
      onChange={(event) => setNewsletter(event.target.checked)}
      />
    <br />
    <input type="submit" value="S'incrire" />
    {/* <h2 style={{ color: "white" }}></h2> */}
  </form>
  </div>
}
export default Signup;