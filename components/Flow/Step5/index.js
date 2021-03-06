import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { motion } from 'framer-motion';
import history, { STEP_1_URL, STEP_4_URL } from '../history';
import { buttonsVariants, headerVariants, transition } from '../animation';
import {
  BackButton,
  Button,
  ButtonContainer,
  Container,
  Content,
  InnerContainer,
  Header,
} from '../../core';

export default (props) => (
  <Container>
    <motion.div initial="exit" animate="enter" exit="exit">
      <InnerContainer>
        <motion.div
          variants={headerVariants}
        >
          <Header>STEP 5</Header>
          <Content>Et voilà! Last stop! You can restart the flow</Content>
        </motion.div>
        <motion.div variants={buttonsVariants}>
          <ButtonContainer>
            <BackButton onClick={() => {history.push(STEP_4_URL)}}>back</BackButton>
            <Button onClick={() => {history.push(STEP_1_URL)}}>Restart</Button>
          </ButtonContainer>
        </motion.div>
      </InnerContainer>
    </motion.div>
  </Container>
);
