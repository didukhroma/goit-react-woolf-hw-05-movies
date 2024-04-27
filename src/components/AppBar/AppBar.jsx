//STYLES
import styles from './AppBar.module.css';

const AppBar = ({ children }) => {
  return <header className={styles.header}>{children}</header>;
};

export default AppBar;
