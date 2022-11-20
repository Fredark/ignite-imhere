import { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import { Participant } from '../../components'
import { styles } from './styles'

export const Home = () => {
  const [ participants, setParticipants ] = useState<string[]>([])
  const [ participantName, setParticipantName ] = useState<string>('')

  const handleParticipantAdd = () => {
    if(participants.includes(participantName)) {
      return Alert.alert('Participant already exists')
    }

    setParticipants(prevState => [...prevState, participantName])
    setParticipantName('')
  }

  const handleParticipantRemove = (name: string) => {
    Alert.alert('Remove participant', `Do you really want to remove ${name}?`, [
      {
        text: 'Yes',
        style: 'destructive',
        onPress: () => setParticipants(participants.filter(participant => participant !== name))
      },
      { 
        text: 'No',
        style: 'cancel'
      }
    ], { cancelable: true })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Event name</Text>
      <Text style={styles.eventDate}>20 de Novembro de 2022</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input} 
          placeholder="Guest name"
          placeholderTextColor="#6B6B6B"
          keyboardType="name-phone-pad"
          onChangeText={setParticipantName}
          value={participantName}
        />
        
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      
      <FlatList 
        data={participants}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={(
          <Text style={styles.listEmptyText}>
            Has nobody arrived at the event yet? Add a participant!
          </Text>
        )}
        renderItem={({ item })=> (
          <Participant name={item} onRemove={handleParticipantRemove} />
        )}
      />
    </View>
  )
}
