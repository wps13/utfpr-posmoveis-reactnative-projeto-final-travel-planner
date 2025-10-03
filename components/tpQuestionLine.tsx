import { Text } from "react-native";

import { styles } from "@/styles";
import TpTextInput from "./tpTextInput";

interface ITpQuestionLine {
    label: string;
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    question: string;
}

const TpQuestionLine = (props: ITpQuestionLine) => {

    const { label, placeholder, value, onChangeText, question } = props;

    return (
        <>
            <Text style={styles.questionTitle}>{question}</Text>
            <TpTextInput placeholder={placeholder} label={label} value={value} onChangeText={onChangeText} />
        </>
    );
}

export default TpQuestionLine;