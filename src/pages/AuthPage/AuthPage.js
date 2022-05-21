import SignUpForm from "../../components/SignUpForm/SignUpForm";
// import SignInForm from "../../components/SignInForm/SignInForm"





export default function AuthPage({user, setUser}){

return (
    <>
    {/* <SignInForm setUser={setUser} /> */}
    <SignUpForm user={user} setUser={setUser} />
    </>
)
}