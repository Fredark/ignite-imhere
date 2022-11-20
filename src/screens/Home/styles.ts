import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#131016',
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 56
  },
  eventName: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 4
  },
  eventDate: {
    color: '#68686B',
    fontSize: 16,
    marginBottom: 16
  },
  form: {
    flexDirection: 'row',
    marginBottom: 16,
    width: '100%'
  },
  input: {
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    color: '#FFFFFF',
    fontSize: 16,
    flex: 1,
    height: 56,
    padding: 16
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#31CF67',
    borderRadius: 5,
    height: 56,
    justifyContent: 'center',
    marginLeft: 12,
    width: 56
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 24
  },
  listEmptyText: {
    color: '#FFFFFF',
    fontSize: 14,
    textAlign: 'center'
  }
})
  