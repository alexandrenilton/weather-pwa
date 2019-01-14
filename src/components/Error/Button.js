import styled from 'styled-components';

const Button = styled.button`
  color: #fff;
  font-size: 15px;
  border-radius: 99px;
  padding: ${({ padding }) => padding};
  background-color: #cacacd;
  border: none;
  cursor: pointer;
  outline: 0;
  box-shadow: none;
  transition: 0.2s ease-in all;
  &:hover {
    background-color: #b2b2b2;
  }
`;

Button.defaultProps = {
  padding: '10px 30px'
};

export default Button;
