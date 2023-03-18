import { View, useTheme, Heading } from "@aws-amplify/ui-react";

const useHeader = () => {
    const { tokens } = useTheme();

    return (
        <View textAlign="center" padding={tokens.space.large}>
            <Heading level={1}>Sports Center</Heading>
        </View>
    );
}

export default useHeader;