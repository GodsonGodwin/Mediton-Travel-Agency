import React from "react";
import "./profile.css";

const Profile = () => {
  
  let mail = localStorage.getItem('email');
  let user = localStorage.getItem('name');



  return (
    <section className="showCase">
      <div className="overlay">
        <div className="profile">
          <div>
            <h2>Welcome on Board</h2>
            <h3 style={{
              color: '#1e427c',
              padding:'5px',
              marginTop:'10px'
            }}><i>{mail}</i></h3>
          </div>

          <div className="userName">
            <div className="letter">
              <button>{user.charAt(0)}</button>
            </div>

            <div className="name">
              <button>{user}</button>
            </div>

            <div className="signout">
              <button>Sign Out</button>
            </div>
          </div>

          <div className="details">
            <h3> Our Services</h3>

            <ul>
              <li>Visa Change</li>
              <li>Tour Package</li>
              <li>Travel Insurance</li> <br />
            </ul>

            <h4 style={{ textAlign: "left", paddingLeft: "25px" }}> Book a Ticket</h4>
            <ul>
              <li>Flight Booking</li>
              <li>Railway Booking</li>
              <li>Car Booking</li>
              <li>Cab Booking</li>
            </ul>

            <h5 style={{ margin: "10px" }}>
              <i>Always available at your service</i>
            </h5>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
