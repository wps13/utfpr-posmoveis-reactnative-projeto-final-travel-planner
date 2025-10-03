import { styles } from "@/styles";
import { Text, TouchableOpacity } from "react-native";

interface ITpCreateGuideButton {
    onPressPlannerButton: () => void;
    loading: boolean;
}

const TpCreateGuideButton = (props: ITpCreateGuideButton) => {
    const { onPressPlannerButton, loading } = props;

    return (
        <TouchableOpacity onPress={onPressPlannerButton} style={styles.button} disabled={loading}>
            <Text style={styles.buttonText}>{loading ? 'Carregando...' : 'Criar meu roteiro'}</Text>
        </TouchableOpacity>
    )
}

export default TpCreateGuideButton;