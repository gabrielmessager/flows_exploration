import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { motion } from 'framer-motion';
import history, { STEP_3_URL, STEP_5_URL } from '../history';
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
          <Header>STEP 4</Header>
          <Content>One more step to go! Woohoo!</Content>
        </motion.div>
        <motion.div variants={buttonsVariants}>
          <ButtonContainer>
            <BackButton onClick={() => {history.push(STEP_3_URL)}}>back</BackButton>
            <Button onClick={() => {history.push(STEP_5_URL)}}>Continue</Button>
          </ButtonContainer>
        </motion.div>
      </InnerContainer>
    </motion.div>
  </Container>
);
