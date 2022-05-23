import SignUpForm from "../../components/SignUpForm/SignUpForm";






export default function AuthPage({user, setUser}){

return (
    <>
    <SignUpForm user={user} setUser={setUser} />
    </>
)
}