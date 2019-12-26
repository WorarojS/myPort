import styled from "styled-components"
import { Field } from "formik"

export const Input = styled(Field)`
  height: ${props => props.height};
  width: ${props => props.width};
  padding: ${props => props.padding};
  background: #f8f9f8;
  border: 0;
  border-bottom: 1px solid rgb(0, 0, 0, 0.2);
  margin-right: 10px;
  ::placeholder {
    color: rgb(0, 0, 0, 0.2);
  }
`

export const FieldStyled = styled(Field)`
  width: 100%;
  border: 0;
  border-bottom: 1px solid rgb(0, 0, 0, 0.2);
  background: #f8f9f8;
  resize: none;
  ::placeholder {
    color: rgb(0, 0, 0, 0.2);
  }
  height: ${props => props.height};
`
