const DashboardComponent = ({ signOut, user }) => {
    return (
        <main>
            <h1>Hello {user.attributes.email}</h1>
            <h2>
                Your favorite Sport: {user.attributes["custom:favorite_sport"]}
            </h2>
            <button onClick={signOut}>Sign out</button>
        </main>
    );
};

export default DashboardComponent