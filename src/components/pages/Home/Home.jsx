import css from './Home.module.css';
// import { movieList } from 'components/fetchData/fetchData';

const Home = () => {
  return (
    <div className={css.temporaryClass}>
      <h1>Trending today</h1>
      <ul>lista filmów...</ul>
    </div>
  );
};

Home.propTypes = {};

export default Home;
