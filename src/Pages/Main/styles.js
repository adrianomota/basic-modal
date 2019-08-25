import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  button {
    margin: 10px 0 0;
    width: 400px;
    height: 48px;
    font-weight: bold;
    font-size: 16px;
    border-radius: 8px;
    border: 0;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.7;
    }

    background: linear-gradient(
      90deg,
      rgb(11, 89, 193) 0%,
      rgb(4, 245, 255) 100%
    );
    color: #fff;
  }
`;

export const BackDrop = styled.div`
  background: rgba(48, 49, 48, 0.42);
  height: 100%;
  position: fixed;
  transition: all 1.3s;
  width: 100%;
`;
