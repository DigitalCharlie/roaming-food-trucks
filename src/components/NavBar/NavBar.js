import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import styles from './NavBar.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { useNavigate } from 'react-router-dom';

export default function NavBar({ pathname, user }) {


  return (
    <Navbar>

      <Container>
        <Navbar.Brand><Link to="/"><img src="assets/roaming-spoon-logo.png" alt="logo" className={styles.logo} /></Link> </Navbar.Brand>
        {
          pathname === "/signup" || pathname === "/login" ?
            ""
            :
            <>
              <Navbar.Toggle />
              <SearchBar />
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  <button className="button"> <Link className={styles.link} to="/signup">Sign Up</Link></button>
                  <a className={styles.anchor}> <img src="assets/login_user_icon.png" alt="login-icon" /><Link className={styles.link} to="/login"> Sign In</Link> </a>
                </Navbar.Text>
              </Navbar.Collapse>
            </>
        }
        {/* {
          user ? 


        } */}

      </Container>
    </Navbar>


  )




}