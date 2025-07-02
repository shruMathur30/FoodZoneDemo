import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  restaurantInfo: {
    backgroundColor: '#fff',
    padding: 16,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2d3436',
  },
  deliveryInfo: {
    fontSize: 13,
    color: '#636e72',
    marginTop: 4,
  },
  list: {
    padding: 16,
  },
  itemCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 1,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2f3542',
  },
  itemPrice: {
    fontSize: 14,
    color: '#57606f',
    marginTop: 4,
  },
  qtyControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  qtyBtn: {
    width: 30,
    height: 30,
    borderRadius: 6,
    backgroundColor: '#dfe6e9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qtyText: {
    fontSize: 18,
    color: '#2f3542',
    fontWeight: '700',
  },
  qtyNumber: {
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 6,
  },
  addRow: {
    padding: 14,
    backgroundColor: '#fff',
    borderTopColor: '#eee',
    borderTopWidth: 1,
  },
  addRowText: {
    fontSize: 15,
    color: '#0984e3',
    fontWeight: '500',
  },
  sectionRow: {
    backgroundColor: '#fff',
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopColor: '#eee',
    borderTopWidth: 1,
  },
  sectionText: {
    fontSize: 15,
    color: '#2f3542',
  },
  changeText: {
    fontSize: 13,
    color: '#0984e3',
  },
  bottomBar: {
    backgroundColor: '#fff',
    padding: 16,
    borderTopColor: '#ccc',
    borderTopWidth: 1,
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#2d3436',
  },
  payButton: {
    backgroundColor: '#00b894',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  payButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  backButton: {
    marginTop: 10,
    paddingVertical: 6,
    paddingHorizontal: 10,
    alignSelf: 'flex-start',
    width: 24,
    height: 24,
    marginBottom: 10
  },
  backButtonText: {
    fontSize: 16,
    color: '#333'
  }

});


export default styles;
