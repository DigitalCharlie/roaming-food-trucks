import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import styles from './NavBar.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { logOut } from '../../utilities/users-service';


export default function NavBar({ pathname, user, setUser }) {

   function handleLogOut() {
    logOut();
    setUser(null);
  }


  return (
    <Navbar className={styles.fixedNavbar}>

      <Container>
        <Navbar.Brand><Link to="/"><img src="/assets/roaming-spoon-logo.png" alt="logo" className={styles.logo} /></Link> </Navbar.Brand>
        {
         pathname === "/signup" || pathname === "/login" ?
            ""
            : !user ? 
            <>
              <Navbar.Toggle />
              {
                pathname !== '/' &&
                <SearchBar buttonClass="search-bar-button" />
              }
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  <button className="signup-button"> <Link className={styles.link} to="/signup">Sign Up</Link></button>
                  <a className={styles.anchor}> <img src="/assets/login_user_icon.png" alt="login-icon" /><Link className={styles.link} to="/login"> Sign In</Link> </a>
                </Navbar.Text>
              </Navbar.Collapse>
            </>
            :
          <>
          <Navbar.Toggle />
          {
            pathname !== '/' &&
            <SearchBar buttonClass="search-bar-button" />
          }
          <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  <button className="signup-button" onClick={handleLogOut}> <Link className={styles.link} to="/">Log Out </Link></button>
                  <Link className={styles.anchor} to="/user"> <img src="/assets/login_user_icon.png" alt="login-icon" /> Hi, {user.firstName} </Link>
                </Navbar.Text>
              </Navbar.Collapse> 
              </>
        }

      </Container>
    </Navbar>


  )




}