import TpCreateGuideButton from "@/components/tpCreateGuideButton";
import TpError from "@/components/tpError";
import TpGuide from "@/components/tpGuide";
import TpQuestionLine from "@/components/tpQuestionLine";
import TpTitle from "@/components/tpTitle";
import planner from "@/services/ai/planner";
import { styles } from "@/styles";

import * as Clipboard from 'expo-clipboard';
import { useState } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  const [destiny, setDestiny] = useState('')
  const [duration, setDuration] = useState('')
  const [budget, setBudget] = useState('')
  const [date, setDate] = useState('')

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const [guide, setGuide] = useState<string | undefined>(undefined)

  const onPressPlannerButton = async () => {
    setLoading(true)
    setError(false)
    setGuide(undefined)

    if (destiny === '') {
      alert('Insira um destino para criar um roteiro')
    } else if (duration === '') {
      alert('Insira um tempo para criar um roteiro')
    }

    let text = `Viajar para ${destiny} por ${duration}`
    if (budget !== '') {
      text += ` com um orçamento de ${budget}`
    }
    if (date !== '') {
      text += ` em ${date}`
    }

    let response = await planner({ userInput: text });
    setGuide(response)
    setError(((response?.length ?? 0) <= 0) === true)

    setLoading(false)
  }

  const onCopyGuidePressed = async () => {
    if (!guide) {
      return;
    }

    await Clipboard.setStringAsync(guide);
  }


  return (
    <SafeAreaView style={styles.safearea}>
      <ScrollView>
        <View
          style={styles.container}
        >
          <TpTitle title="Travel Planner" />

          <TpQuestionLine label="Destino" placeholder="Natal - RN" value={destiny} onChangeText={setDestiny} question="Para onde irá viajar?" />

          <TpQuestionLine label="Duração" placeholder="3 dias" value={duration} onChangeText={setDuration} question="Por quanto tempo?" />

          <TpQuestionLine label="Orçamento" placeholder="R$ 1000" value={budget} onChangeText={setBudget} question="Quanto pretende gastar?" />

          <TpQuestionLine label="Data" placeholder="Dezembro" value={date} onChangeText={setDate} question="Quando pretende ir?" />

          <TpCreateGuideButton onPressPlannerButton={onPressPlannerButton} loading={loading} />

          <TpError error={error} />
          <TpGuide guide={guide} onCopyGuidePressed={onCopyGuidePressed} />
        </View >
      </ScrollView>
    </SafeAreaView>
  );
}
