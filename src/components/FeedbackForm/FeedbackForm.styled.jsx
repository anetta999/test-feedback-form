import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
  width: 557px;
  }

  button{
    display: flex;
    gap: 3px;
    align-items: center;
    width: 100%;
    padding-top: 28px;
    padding-bottom: 28px;
    padding-left: 52px;
    padding-right: 52px;
    border-radius: 500px;
    background-color: ${({ theme }) => theme.colors.yellow};
    
    font-weight: 500;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.white};

    transition: background-color ${({ theme }) => theme.transition.main};

    :is(:hover,:focus){
    background-color: ${({ theme }) => theme.colors.accent};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
  width: 235px;
  }
  
  }
`;

export const FormField = styled.div`
  height: 103px;
  margin-bottom: 8px;
`;

export const LastFormField = styled.div`
  margin-bottom: 23px;
  height: 199px;
  textarea{
    height: 189px;
    resize: none;
  }
`;

export const Input = styled(Field)`
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 46px;
  padding-right: 46px;
  border: 1px solid ${({theme}) => theme.colors.semiDarkGrey};
  border-radius: 10px;
  outline: transparent;

  font-size: 18px;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.lightBlack};
  transition: border-color ${({ theme }) => theme.transition.main};
  
  :is(:hover,:focus){
    border-color: ${({theme}) => theme.colors.accent};
  }

  ::placeholder{
  font-size: 18px;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.lightBlack};
  }
`;

export const StyledErrorMsg = styled(ErrorMessage)`
  margin-top: 2px;
  font-size: 12px;
  color: red;
`;