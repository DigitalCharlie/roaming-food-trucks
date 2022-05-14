import 'bootstrap/dist/css/bootstrap.css'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import styles from './NavBar.module.css';



export default function NavBar() {


  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home"><img src="assets/roaming-spoon-logo.png" alt="logo" className={styles.Logo} /> </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <button className={styles.Button}>Sign Up</button>
            <a href="#" className={styles.Anchor}> <img src="assets/login_user_icon.png" alt="login-icon" /> Sign In</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>


  )




}