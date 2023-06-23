import React from 'react';

function App() {
  return (
    <Container>
            <h1>Hello, World!</h1>
            <p>This is a simple React app.</p>
    </Container>

  );
}

export default App;

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 300vh;
  background-color: whitesmoke;
`;
