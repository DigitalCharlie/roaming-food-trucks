import SignUpForm from "../../components/SignUpForm/SignUpForm";
import styles from './AuthPage.module.css';






export default function AuthPage({user, setUser}){

return (
    <main className={styles.signupform}>
    <SignUpForm  user={user} setUser={setUser} />
    </ main>
)
}