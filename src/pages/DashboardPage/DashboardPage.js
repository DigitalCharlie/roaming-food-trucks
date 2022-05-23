import Favorites from "../../components/MyFavoritesList/Favorites";

export default function DashboardPage({ user }) {
    console.log(user)
    return (
        <div>
            <h1>This is the Dashboard Page</h1>
            <Favorites user={user} />
        </div>
    );
};