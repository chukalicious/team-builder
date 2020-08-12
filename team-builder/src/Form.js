import React from 'react'
import styled from "styled-components"


const StyledForm = styled.form`
    display: flex;
    flex-direction: column; 
`


const Form = () => {

    return(
        <StyledForm>
            <label>
                Name:
                <input type='text' id='mName' name='name' />
            </label>
            <label>
                Age:
                <input type='text' id='mAge' name='age' />
            </label>

        </StyledForm>
    )
}

export default Form