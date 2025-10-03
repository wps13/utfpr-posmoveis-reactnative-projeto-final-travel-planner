import { Text, TouchableOpacity, View } from "react-native";
import Markdown from 'react-native-markdown-display';

import { styles } from "@/styles";

interface ITpGuide {
    guide: string | undefined;
    onCopyGuidePressed: () => void;
}

const TpGuide = (props: ITpGuide) => {
    const { guide, onCopyGuidePressed } = props;

    return (
        guide?.trim() && (
            <View style={styles.guideContainer}>
                <Markdown>{guide}</Markdown>
                <TouchableOpacity onPress={onCopyGuidePressed} style={styles.buttonCopyGuide}>
                    <Text style={styles.buttonCopyGuideText}>Copiar roteiro</Text>
                </TouchableOpacity>
            </View>
        )
    )
}

export default TpGuide;