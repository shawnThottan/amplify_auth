import { View, Button, Heading,  } from "@aws-amplify/ui-react";

const DashboardComponent = ({ signOut, user }) => {
    return (
        <View padding='50px'>
            <Heading level={5} margin='10px'>Hello, {user.attributes.email}</Heading>
            <Heading level={6} margin='10px'>
                Favorite Sport: {user.attributes["custom:favorite_sport"]}
            </Heading>
            <Button onClick={signOut} margin='10px'>Sign out</Button>
        </View>
    );
};

export default DashboardComponent