import React from 'react';
import { ThemeProvider } from 'styled-components/macro';
import './App.css';
import Modal from './Modal';
import styled from 'styled-components/macro';
import Landscape from './Images/Landscape.png';
import Theme from './Theme';

const Button = styled.button`
  border: 0;
  border-radius: 6px;
  padding: 1rem 2rem;
  color: #fff;
  background: ${props => props.theme.ButtonColor};
  font-weight: bold;
  text-transform: uppercase;
`;

const Image = styled.img`
  display: block;
  width: 80%;
  height: auto;
  border-radius: 6px;
  margin: 1rem auto;
`;

function App() {

  const modalActions = (
    <>
      <Button>Good Music</Button>
    </>
  );
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <Modal
          title="La Kollective"
          actions={modalActions}  
        >
          <Image src={Landscape} alt="landscape" />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie justo et nunc dictum, non fermentum mi ultricies. Nunc malesuada hendrerit fermentum. Donec congue, lacus id tincidunt pharetra, risus arcu molestie sem, rhoncus suscipit nisl tellus a nulla. Sed quis ante porttitor, tempus libero sed, elementum risus.
        </Modal>
      </ThemeProvider>
    </div>
  );
}

export default App;