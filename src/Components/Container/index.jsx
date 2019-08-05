import React from 'react';
import MaterialContainer from '@material-ui/core/Container';
import styles from './styles.module.css';

function Container({ children }) {
  return (
    <MaterialContainer className={styles.container}>
      {children}
    </MaterialContainer>
  )
}

export default Container;