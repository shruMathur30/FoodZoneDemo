import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f9ff',
  },
  backButton: {
    width: 30,
    height: 30,
    margin: 10,
  },
  restaurantInfo: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderColor: '#cfdce6',
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  deliveryInfo: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  list: {
    paddingBottom: 140,
  },
  itemCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ecf0f1',
  },
  itemInfo: {},
  itemName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2c3e50',
  },
  itemPrice: {
    color: '#7f8c8d',
    fontSize: 14,
  },
  qtyControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  qtyBtn: {
    backgroundColor: '#3498db',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  qtyText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  qtyNumber: {
    marginHorizontal: 8,
    fontSize: 16,
    fontWeight: '600',
  },
  addRow: {
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#ecf0f1',
    backgroundColor: '#ffffff',
  },
  addRowText: {
    color: '#3498db',
    fontWeight: '500',
  },
  sectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#ffffff',
  },
  sectionText: {
    color: '#2c3e50',
    fontWeight: '500',
  },
  changeText: {
    color: '#3498db',
    fontWeight: '500',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#ffffff',
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#ecf0f1',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  payButton: {
    backgroundColor: '#2c3e50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  payButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});


export default styles;
