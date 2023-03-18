import { View, useTheme } from "@aws-amplify/ui-react";

const useHeader = () => {
    const { tokens } = useTheme();

    return (
        <View textAlign="center" padding={tokens.space.large}>
            <h1>Sports Center</h1>
        </View>
    );
}

export default useHeader;