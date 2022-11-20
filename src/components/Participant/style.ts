import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 8,
    width: '100%',
  },
  name: {
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    color: '#FFFFFF',
    fontSize: 16,
    flex: 1,
    padding: 16
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#E23C44',
    borderRadius: 5,
    height: 56,
    justifyContent: 'center',
    marginLeft: 12,
    width: 56
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 24
  }
})
