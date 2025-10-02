import TpTextInput from "@/components/tpTextInput";
import planner from "@/services/ai/planner";
import { styles } from "@/styles";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Markdown from 'react-native-markdown-display';

export default function Index() {
  const [destiny, setDestiny] = useState('')
  const [duration, setDuration] = useState('')
  const [budget, setBudget] = useState('')
  const [date, setDate] = useState('')

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const [guide, setGuide] = useState<String | undefined>(undefined)

  const onPressPlannerButton = async () => {
    setLoading(true)
    setError(false)

    if (destiny === '') {
      alert('Insira um destino para criar um roteiro')
    } else if (duration === '') {
      alert('Insira um tempo para criar um roteiro')
    }

    var text = `Viajar para ${destiny} por ${duration}`
    if (budget !== '') {
      text += ` com um orçamento de ${budget}`
    }
    if (date !== '') {
      text += ` em ${date}`
    }

    var response = await planner({ userInput: text });
    setGuide(response)
    setError(((response?.length ?? 0) <= 0) == true)

    console.log(text)
    setLoading(false)
  }


  return (
    <ScrollView>
      <View
        style={styles.container}
      >
        <Text style={styles.title}>Travel Planner</Text>
        <Text style={styles.questionTitle}>Para onde irá viajar?</Text>
        <TpTextInput placeholder="Natal - RN" label="Destino" value={destiny} onChangeText={setDestiny} />
        <Text style={styles.questionTitle}>Por quanto tempo?</Text>
        <TpTextInput placeholder="3 dias" label="Tempo" value={duration} onChangeText={setDuration} />
        <Text style={styles.questionTitle}>Quanto pretende gastar?</Text>
        <TpTextInput placeholder="R$ 1000" label="Orçamento" value={budget} onChangeText={setBudget} />
        <Text style={styles.questionTitle}>Quando pretende ir?</Text>
        <TpTextInput placeholder="Dezembro" label="Data" value={date} onChangeText={setDate} />
        <TouchableOpacity onPress={onPressPlannerButton} style={styles.button} disabled={loading}>
          <Text style={styles.buttonText}>{loading ? 'Carregando...' : 'Criar meu roteiro'}</Text>
        </TouchableOpacity>
        {
          error && (
            <View style={styles.errorContainer}>
              <Text>Ocorreu um erro ao criar o roteiro</Text>
            </View>
          )
        }
        {
          guide?.trim() && (
            <View style={styles.guideContainer}>
              <Markdown>{guide}</Markdown>
            </View>
          )
        }
      </View >
    </ScrollView>
  );
}
