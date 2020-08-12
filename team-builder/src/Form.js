import React, { useState, useEffect } from 'react'
import styled from "styled-components"


const StyledForm = styled.form`
    display: flex;
    flex-direction: column; 
`



const Form = () => {
    const [memberData, setMemberData] = useState({
        mName: '',
        email: '',
        role: '',
        location: '',
        isStudent: false
      })

    const memberInput = e => {
        setMemberData({
            ...memberData,
            [e.target.name]: e.target.value
        })
    }
    return(
        <StyledForm>
            <label>
                Name:
                <input type='text' id='mName' name='mName' onChange={memberInput}/>
            </label>
            <label>
                Email:
                <input type='email' id='email' name='email' onChange={memberInput}/>
            </label>
            <label>
                Role:
                <input type='text' id='role' name='role' onChange={memberInput}/>
            </label>
            <label>
                Location:
                <input type='text' id='location' name='location' onChange={e => {
                    setMemberData({
                        ...memberData,
                        [e.target.name]: e.target.value
                    })
                }}/>
            </label>
            <label>
                Are you a Lambda student?
                <input type='checkbox' id='student' name='isStudent' />
            </label>
            

            <input type='submit' />

        </StyledForm>
    )
}

export default Form