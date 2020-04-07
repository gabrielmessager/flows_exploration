import React from "react";
import styled from 'styled-components';
import Modal from '../components/Modal';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #0F1014;
`;

const Index = (props: Object) => {
  return (
    <Container>
      <Modal />
    </Container>
  );
};

export default Index;
