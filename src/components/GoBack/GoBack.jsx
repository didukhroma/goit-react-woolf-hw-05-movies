import { Link, useLocation } from 'react-router-dom';
//STYLES
import styles from './GoBack.module.css';

const GoBack = () => {
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';

  return (
    <Link className={styles.button} to={backLinkHref}>
      Go back
    </Link>
  );
};

export default GoBack;
