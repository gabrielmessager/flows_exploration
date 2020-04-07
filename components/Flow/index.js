import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import
  history,
  { 
    ROOT_URL,
    STEP_1_URL,
    STEP_2_URL,
    STEP_3_URL,
    STEP_4_URL,
    STEP_5_URL,
  }
from './history';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';

export default function Flow() {
  useEffect(() => {
    history.push(STEP_1_URL);
  });

  return (
    <Router history={history}>
      <Route
        render={({ location }) => (
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route
                path={STEP_1_URL}
                component={Step1}
              />
              <Route
                path={STEP_2_URL}
                component={Step2}
              />
              <Route
                path={STEP_3_URL}
                component={Step3}
              />
              <Route
                path={STEP_4_URL}
                component={Step4}
              />
              <Route
                path={STEP_5_URL}
                component={Step5}
              />
              <Route
                path={ROOT_URL}
                component={Step1}
              />
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  );
}
