import React from 'react';
import PropTypes from 'prop-types';

const Navigation = ({ children, render }) => {
  return render ? render(this.context) : children(this.context);
};

Navigation.contextTypes = {
  activeStepIndex: PropTypes.number.isRequired,
  goToNextStep: PropTypes.func.isRequired,
  goToPrevStep: PropTypes.func.isRequired,
  totalSteps: PropTypes.number.isRequired
};

export default Navigation;