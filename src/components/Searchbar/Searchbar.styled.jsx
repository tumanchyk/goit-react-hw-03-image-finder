import styled from "@emotion/styled";
import { BiSearch} from 'react-icons/bi';
import { Field, Form as FormikForm} from "formik";

const SearchSection = styled.header`
top: 0;
left: 0;
position: sticky;
z-index: 1100;
display: flex;
justify-content: center;
align-items: center;
min-height: 64px;
padding-right: 24px;
padding-left: 24px;
padding-top: 12px;
padding-bottom: 12px;
color: #fff;
background-color: #0bc2d6;
box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
  0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`
  
const SearchForm = styled(FormikForm)`
display: flex;
align-items: center;
width: 100%;
max-width: 600px;
background-color: #fff;
border-radius: 3px;
border-radius: 50px;
overflow: hidden;
`
  
  const SearchFormButton = styled.button` 
  display: flex;
  align-items: center;
justify-content: center;
  width: 48px;
  height: 48px;
  border: 0;
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
  `
  
const SearchFormInput = styled(Field)`
display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 20px;
    border: none;
    outline: none;
    padding: 0 10px;
    height: 30px;
    
    &::placeholder {
        font: inherit;
        font-size: 18px;
      }
`
const SearchIcon = styled(BiSearch)`
margin-left: 5px;
width: 20px;
height: 20px;
fill: #e90c59;
&:hover{
  fill:#06b6c9
}
`

  export {SearchSection, SearchForm, SearchFormButton, SearchFormInput, SearchIcon}
  
  
