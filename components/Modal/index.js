import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import styled from 'styled-components';
import { Button } from '../core';
import Flow from '../Flow';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 50vh;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  z-index: 1;
`;

const StyledPopper = styled(Popper)`
  width: 400px;
  height: 300px;
  background-color: #fff;
  border-radius: 8px;
  margin-top: 8px;
  z-index: 2;
`;

const StyledButton = styled(Button)`
  &:hover {
    background-color: #fff;
    color: #20222B;
  }
`;

const useStyles = makeStyles((theme) => ({
  paper: {
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimplePopper() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <Container>
      <StyledButton aria-describedby={id} type="button" onClick={handleClick}>
        Start flow
      </StyledButton>
      <StyledPopper id={id} open={open} anchorEl={anchorEl}>
        <Flow />
      </StyledPopper>
      {open && <Overlay onClick={handleClick} />}
    </Container>
  );
}