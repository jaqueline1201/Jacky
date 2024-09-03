import React from "react";

const page = () => {
  return (
    <div>
      <h1>Contact Us!</h1>
      <div className="container">
        <label htmlFor="">Name</label>
        <input type="text" required />
        <label htmlFor="">Email</label>
        <input type="text" required />
        <label htmlFor="">Phone number</label>
        <input type="text" />
        <label htmlFor="">Message</label>
        <input type="text" required />
        <button>Submit</button>
      </div>
    </div>
  );
};

export default page;
