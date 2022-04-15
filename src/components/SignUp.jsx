import React, { useState } from "react";
import Login from "./Login";

function SignUp() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [confirmUserPassword, setconfirmUserPassword] = useState("");


  const [login, setLogin] = useState(true);
  const [logError, setLogError] = useState(false)

  const signup = (e) => {
    e.preventDefault();
    if (userPassword !== confirmUserPassword){
      setLogError(true)
    }

    else{
      setLogError(false);
      addUsers();

    setLogin(!login);
    }
    
  };

  const addUsers = () =>{
   let newUser = JSON.parse(localStorage.getItem('users') || '[]');
   const user = {name: userName, email:userEmail, password: userPassword};
   newUser = [...newUser, user];
   localStorage.setItem("users", JSON.stringify(newUser));
  }

  const MyAccount = () => {
    setLogin(!login);
  };

  return (
    <>
      {login ? (
        <section className="showCase login">
          <div className="overlay">
            <form className="form" onSubmit={signup}>
              <input
                type="text"
                name="username"
                id="username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="User Name"
                required
              />

              <input
                type="email"
                name="email"
                id="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="Your email address"
                required
              />

              <input
                type="password"
                name="password"
                id="password"
                placeholder="Your password"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                required
              />

              <input
                type="password"
                name="password"
                id="password2"
                value={confirmUserPassword}
                onChange={(e) => setconfirmUserPassword(e.target.value)}
                placeholder="confirm your password"
                required
              />
              {logError && (<h3 style={{
            color:'red',
            padding:'5px',

            }}>
              <i>Your password does not match...</i></h3>)}

              <button type="submit"> Register</button>

              <h3
                onClick={MyAccount}
                style={{
                  marginTop: "25px",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}>
                <i>Already have an account? Login</i>
              </h3>

              


            </form>
          </div>
        </section>
      ) : (
        <Login />
      )}
    </>
  );
}

export default SignUp;
