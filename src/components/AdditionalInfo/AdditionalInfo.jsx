import { NavLink } from 'react-router-dom';

const AdditionalInfo = () => {
  return (
    <div>
      <h3>Additional information</h3>
      <ul>
        <NavLink>Cast</NavLink>
        <NavLink>Reviews</NavLink>
      </ul>
    </div>
  );
};

export default AdditionalInfo;
