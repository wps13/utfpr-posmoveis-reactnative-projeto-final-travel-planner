import { Text, View } from "react-native";

import { styles } from "@/styles";

interface ITpError {
    error: boolean;
}


const TpError = (props: ITpError) => {
    const { error } = props;

    return (
        error && (
            <View style={styles.errorContainer}>
                <Text>Ocorreu um erro ao criar o roteiro</Text>
            </View>
        ));

}

export default TpError;