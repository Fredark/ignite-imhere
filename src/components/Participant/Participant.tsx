import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './style'

type ParticipantProps = {
  name: string,
  onRemove: (name: string) => void
}

export const Participant = ({ name, onRemove }: ParticipantProps) => (
  <View style={styles.container}>
    <Text style={styles.name}>
      { name }
    </Text>
    <TouchableOpacity style={styles.button} onPress={() => onRemove(name)}>
      <Text style={styles.buttonText}>-</Text>
    </TouchableOpacity>
  </View>
)
