import styled from "styled-components"

export const StyledButton = styled.button`
background-color: white;
border: 0cap;
padding: 16px;
cursor: pointer;
&:hover{
    background-color: darkgrey;
}
&:focus {
    outline: 1px solid blue;
}
&:disabled {
    background-color: gray;  
}


${(props) =>
props.danger &&
`
background-color: red;
color: white;
&:hover{
    background-color: darkred;
}
`}
${(props) =>
props.sucess &&
`
background-color: green;
color: white;
&:hover{
    background-color: darkgreen;
}
`
}
`