import React from 'react';
import { useNavigate } from "react-router-dom";  //router navigation

function Homepage() {
  const navigate = useNavigate();  //router initializaiion
  return (
    <div>
    
      <h1>Hello, World!</h1>
      <p>This is a simple React app.</p>
      <button
          onClick={() => navigate("/enterpath")} //router navigation implementation
        />
    </div>
  );
}

export default Homepage;
