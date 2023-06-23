import React from 'react';
import { useNavigate } from "react-router-dom";  //router navigation

function Homepage() {
  const navigate = useNavigate();  //router initializaiion
  return (
    <Container>
        <h1>Hello, World!</h1>
        <p>This is a simple React app.</p>
        <button
          onClick={() => navigate("/enterpath")} //router navigation implementation
        />
    </Container>

  );
}

export default Homepage;

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 300vh;
  background-color: whitesmoke;
`;
