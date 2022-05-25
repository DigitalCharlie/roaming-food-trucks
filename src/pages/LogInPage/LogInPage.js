import SignInForm from "../../components/SignInForm/SignInForm"
import styles from './LogInPage.module.css';

export default function LogInPage({setUser}){
    return (
        <main className={styles.signinform}>
            <SignInForm setUser={setUser} />
        </main>
        

    )
}