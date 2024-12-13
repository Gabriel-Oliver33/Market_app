import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  list: {
    paddingBottom: 80, // Espaço para o botão flutuante
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  brand: {
    fontSize: 14,
    color: '#666',
  },
  price: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 14,
    color: '#666',
  },
  status: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
  actions: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  button: {
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 4,
    marginBottom: 4,
  },
  inactivateButton: {
    backgroundColor: '#ffe5e5',
  },
  buttonText: {
    fontSize: 14,
    color: '#333',
  },
  addButton: {
    position: 'absolute',
    bottom: 80,
    right: 16,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  addButtonText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#f8f8f8',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  navItem: {
    fontSize: 16,
    color: '#666',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 8,
  },
});
