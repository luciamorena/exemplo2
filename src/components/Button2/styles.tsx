import styled from "styled-components"

const Button = styled.button`
    background: ${({color}) => color};
    color:black;

    &:hover {
        opacity:.7;
    }

`

export {
    Button
}