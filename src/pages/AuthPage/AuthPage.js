import NavBar from "../../components/NavBar/NavBar"; 
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import Footer from "../../components/Footer/Footer"





export default function AuthPage({user, setUser}){

return (
    <>
    <NavBar/>
    <SignUpForm user={user} setUser={setUser} />
    <Footer />
    </>
)
}