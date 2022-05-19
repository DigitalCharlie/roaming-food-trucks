import NavBar from "../../components/NavBar/NavBar"; 
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import Footer from "../../components/Footer/Footer"
import SignInForm from "../../components/SignInForm/SignInForm"





export default function AuthPage({user, setUser}){

return (
    <>
    <NavBar/>
    <SignInForm setUser={setUser} />
    <SignUpForm user={user} setUser={setUser} />
    <Footer />
    </>
)
}