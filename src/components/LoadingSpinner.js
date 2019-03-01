import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const SpinnerContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const LoadingSpinner = () => (
  <SpinnerContainer>
    <FontAwesomeIcon icon="spinner" size="6x" spin />
  </SpinnerContainer>
);

export default LoadingSpinner;
