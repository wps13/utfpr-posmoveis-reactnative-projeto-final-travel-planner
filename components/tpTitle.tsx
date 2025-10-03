import { Text } from "react-native";

import { styles } from "@/styles";

interface ITpTitle {
    title: string;
}


const TpTitle = (props: ITpTitle) => {
    const { title } = props;

    return (
        <Text style={styles.title}>{title}</Text>
    );
}

export default TpTitle