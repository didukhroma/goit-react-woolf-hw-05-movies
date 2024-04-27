import { DEFAULT_IMG, IMG_URL } from 'settings/settings';
//STYLES
import styles from './MovieInfo.module.css';

const MovieInfo = ({ movieData }) => {
  return (
    <section>
      {movieData && (
        <div className={styles.wrapper}>
          <div className={styles.poster}>
            <img
              src={
                movieData.poster_path
                  ? `${IMG_URL}${movieData.poster_path}`
                  : DEFAULT_IMG
              }
              alt="poster"
            />
          </div>
          <div>
            <h2>{movieData.title}</h2>
            <p>{`User Score: ${(movieData.vote_average * 10).toFixed(0)}%`}</p>
            <h3>Overview</h3>
            <p>{movieData.overview}</p>
            <h3>Genres</h3>
            <p>
              {movieData.genres.map(({ name, id }) => (
                <span className={styles.genreText} key={`${id}-${name}`}>
                  {name}
                </span>
              ))}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default MovieInfo;
