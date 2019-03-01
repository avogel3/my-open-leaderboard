import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LoadingSpinner = () => (
  <div
    style={{
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: '80vh',
    }}
  >
    <FontAwesomeIcon icon="spinner" size="6x" spin />
  </div>
);

export default LoadingSpinner;
