import { styles } from "@/styles";
import { TextInput } from "react-native";

interface ITpTextInput {
    label: string;
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
}

const TpTextInput = (props: ITpTextInput) => {
    return (
        <TextInput
            {...props}
            style={styles.input}
        />
    );
}

export default TpTextInput;