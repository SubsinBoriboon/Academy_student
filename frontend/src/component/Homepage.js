import './Homepage.css';
import { Link } from 'react-router-dom';
const Homepage = () => {
  return (
    <div>
      <header>Navbar</header>
      <section>
        <div className="func">
          <Link to={'/member'} className="func1">
            <i class="fa-solid fa-user"></i>
            <h2>Employee</h2>
          </Link>
        </div>
      </section>
      <footer></footer>
    </div>
  );
};
export default Homepage;
