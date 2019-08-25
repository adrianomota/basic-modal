import styled from 'styled-components';
import { darken } from 'polished';

export const ModalContainer = styled.div`
  background: #fff;
  border: 1px solid #d0cccc;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17);
  margin: 100px auto 0;
  transition: all 0.8s;
  width: 60%;
  border-radius: 8px;
  border: solid 2px #3bb9e3;
  transform: translateY(-100vh);
  ${({ show }) => show && `transform: translateY(0vh);`}
  opacity: ${props => (props.show ? '1' : '0')}
`;

export const Header = styled.div`
  display: flex;
  background: #fff;
  height: 40px;
  line-height: 40px;
  padding: 5px 20px;
  border-bottom: solid 2px #3bb9e3;
  justify-content: space-between;
  align-items: center;

  h3 {
    color: #3bb9e3;
    margin: 0;
    padding: 0;
    font-weight: bold;
  }

  > span {
    color: #3bb9e3;
    cursor: pointer;
    font-size: 20px;
    margin: 0;

    &:hover {
      color: ${darken(0.03, '#2E9AFE')};
    }
  }
`;

export const Body = styled.div`
  padding: 10px 15px;
  text-align: center;
  border-bottom: solid 2px #3bb9e3;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  background: #fff;
  height: 60px;
  padding: 15px;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #3bb9e3;
    height: 34px;
    width: 100px;
    font-weight: bold;
    font-size: 14px;
    border: 0;
    border-radius: 16px;
    border: solid 2px #3bb9e3;
    background: #fff;
  }
`;
