import { Link, useLocation } from 'react-router-dom';

const GoBack = () => {
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';

  return <Link to={backLinkHref}>Go back</Link>;
};

export default GoBack;
