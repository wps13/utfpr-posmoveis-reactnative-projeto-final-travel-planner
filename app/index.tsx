import TpTextInput from "@/components/tpTextInput";
import { styles } from "@/styles";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [destiny, setDestiny] = useState('')
  const [duration, setDuration] = useState('')
  const [budget, setBudget] = useState('')
  const [date, setDate] = useState('')

  const [loading, setLoading] = useState(false)

  const onPressPlannerButton = () => {
    setLoading(true)

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
      </View >
    </ScrollView>
  );
}
