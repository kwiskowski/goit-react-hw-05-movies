import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCredits } from 'components/fetchData/fetchData';
import css from './Cast.module.css';

const Cast = () => {
  const [castList, setCastList] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getMovieCredits(movieId).then(data => setCastList(data.cast));
  }, [movieId]);
  return (
    <ul className={css.castList}>
      {castList.length > 0
        ? castList.map(({ id, name, profile_path, character }) => (
            <li className={css.castListItem} key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                    : `http://www.suryalaya.org/images/no_image.jpg`
                }
                alt="actor"
                loading="lazy"
                width={120}
                height={180}
              />
              <h1 className={css.characterName}>{name}</h1>
              <div className={css.characterBox}> Character: {character}</div>
            </li>
          ))
        : "Sorry, there isn't any info :("}
    </ul>
  );
};

export default Cast;

// import css from './Cast.module.css';

// const Cast = () => {
//   return <div className={css.temporaryClass}>Cast</div>;
// };

// Cast.propTypes = {};

// export default Cast;
