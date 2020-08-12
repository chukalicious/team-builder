import React, { useState } from 'react';
import './App.css';
import Form from './Form'
import styled from 'styled-components'

const FormContainer = styled.div`
  width: 80%;
  margin: 0 auto; 
  display: flex; 
  flex-direction: column; 
`

function App() {

  const [memberData, setMemberData] = useState({
    'member-name': ''
  })

  return (
    <FormContainer>
      <h1>Members</h1>

      <Form /> 

    </FormContainer>
  );
}

export default App;
