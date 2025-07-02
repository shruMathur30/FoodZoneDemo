import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f9ff',
    paddingHorizontal: 12,
    paddingTop: 10,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center'
  },
  listContent: {
    paddingBottom: 100,
  },
  cartBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -3 },
    shadowRadius: 8,
  },
  cartLabel: {
    fontSize: 16,
    color: '#7f8c8d',
  },
  cartTotal: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  checkoutBtn: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 30,
  },
  checkoutText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
});

export default styles;
