import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Button = styled.button`
  background: none;
  border: 0;
  padding: 0;
  -webkit-appearance: none;
  cursor: pointer;
  border: solid 1px #666A72;
  font-size: 12px;
  color: #20222B;

  &:not(:disabled) {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #5B53FF;
    border: solid 1px #5B53FF;
    color: #fff;
  }

  height: 32px;
  background-color: #fff;
  border-radius: 4px;
  padding: 0 8px;
`;

export const BackButton = styled(Button)`
  font-family: helvetica;
  color: #20222B;
  font-size: 12px;
  border: none;
  margin-right: 8px;

  &:hover {
    background-color: #fff;
    border: none;
    color: #20222B;
    text-decoration: underline;
  }
`;

export const Container = styled.div`
  width: 400px;
  height: 300px;
  padding: 24px;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 252px;
  width: 352px;
`;

export const Header = styled.h1`
  font-size: 22px;
  color: #20222B;
  font-family: helvetica;
  margin-bottom: 16px;
`;

export const Content = styled.p`
  font-size: 14px;
  color: #20222B;
  font-family: helvetica;
`;
