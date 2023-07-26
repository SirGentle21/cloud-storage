import React, { useState } from 'react';
import './ToggleButton.css';


const ToggleButton = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <h1 id="pricing">Our Pricing</h1>
      <div className="spin">
      <span>Monthly</span> 
      <label class="switch">
   <input type="checkbox" />
   <span class="slider round" onClick={() => setToggle(!toggle)}></span>
  </label> <span>Annually</span>
  </div>
      {/* <button onClick={() => setToggle(!toggle)} id="btn-main">{toggle ? "Annually" : "Monthly"}</button> */}

       
       <div className="main">
       <section className="first" id="sec">
         <h1>Basic</h1>
         {toggle ? <p className="dollars">$199.99</p> : <p className="dollars">$19.99</p>}
         {toggle ? <p id="users">5TB GB Storage</p> :   <p id="users">1TB GB Storage</p>}
         {toggle ? <p id="users">5 Users Allowed</p> : <p id="users">3 Users Allowed</p>}
         {toggle ? <p id="users">Send up to 10 GB</p> : <p id="users">Send up to 5 GB</p>}
         {toggle ? <a href="#" id="btn">LEARN MORE</a> : <a href="#" id="learn">LEARN MORE</a>}
       </section>
       <section className="second" id="sec">
         <h1>Professional</h1>
         {toggle ? <p className="dollars">$299.99</p> : <p className="dollars">$29.99</p>}
         {toggle ? <p id="users">10 TB Storage</p> :    <p id="users">7 TB Storage</p>}
         {toggle ? <p id="users">10 Users Allowed</p> : <p id="users">8 Users Allowed</p>}
         {toggle ? <p id="users">Send up to 15 GB</p> : <p id="users">Send up to 10 GB</p>}
         {toggle ? <a href="#" id="mre">LEARN MORE</a> : <a href="#" id="learn">LEARN MORE</a>}
       </section>
       <section className="third" id="sec">
         <h1>Master</h1>
         {toggle ? <p className="dollars">$399.99</p> : <p className="dollars">$39.99</p>}
         {toggle ? <p id="users">15 TB Storage</p> :    <p id="users">10 TB Storage</p>}
         {toggle ? <p id="users">20 Users Allowed</p> : <p id="users">15 Users Allowed</p>}
         {toggle ? <p id="users">Send up to 20 GB</p> : <p id="users">Send up to 15 GB</p>}
         {toggle ? <a href="#" id="btn">LEARN MORE</a> : <a href="#" className="learn">LEARN MORE</a>}
       </section>

      </div>
    </div>
  )}

  export default ToggleButton;