import { View, Button, Heading, useTheme } from "@aws-amplify/ui-react";

const DashboardComponent = ({ signOut, user }) => {
    const { tokens } = useTheme();

    return (
        <View padding='50px'>
            <Heading level={5} margin='10px'>Hello, {user.attributes.email}</Heading>
            <Heading level={6} margin='10px'>
                Favorite Sport: {user.attributes["custom:favorite_sport"]}
            </Heading>
            <Button position="absolute" right={tokens.space.xs} top={tokens.space.xs} onClick={signOut} margin='10px'>Sign out</Button>
        </View>
    );
};

export default DashboardComponent