import 'bootstrap/dist/css/bootstrap.css'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import styles from './NavBar.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const navigate = useNavigate()

  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home"><img src="assets/roaming-spoon-logo.png" alt="logo" className={styles.logo} /> </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <SearchBar />
          <Navbar.Text>
            <button className="button" onClick={() => { navigate("/signup") }}>Sign Up</button>
            <a href="#" className={styles.anchor}> <img src="assets/login_user_icon.png" alt="login-icon" /> Sign In</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>


  )




}