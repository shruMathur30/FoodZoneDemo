import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f9ff',
    paddingBottom: 20,
  },
  backButton: {
    width: 20,
    height: 20,
  },
  restaurantInfo: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderColor: '#cfdce6',
    marginTop: 20,
    marginBottom: 20
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
    paddingBottom: 200,
  },
  itemCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ecf0f1',
  },
  itemName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2c3e50',
  },
  itemPrice: {
    color: '#7f8c8d',
    fontSize: 14,
  },
  addRow: {
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#ecf0f1',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  addRowText: {
    color: '#3498db',
    fontWeight: '500',
    flexWrap: 'wrap',
    fontSize: 15,
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
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },

  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },

  modalInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },

  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  modalCancel: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#f2f2f2',
  },

  modalCancelText: {
    fontSize: 16,
    color: '#555',
  },

  modalSave: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#00A36C',
  },

  modalSaveText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  enhancedItemCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  itemImagePlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  imageText: {
    fontSize: 24,
  },

  itemDetails: {
    flex: 1,
  },

  enhancedItemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
  },

  enhancedItemPrice: {
    fontSize: 14,
    color: '#7f8c8d',
    marginTop: 4,
  },

  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3498db',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  qtySymbol: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 6,
  },
  qtyValue: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 16,
    paddingHorizontal: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#f4f9ff',
  },

  backIconWrapper: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  headerCenter: {
    flex: 1,
    alignItems: 'center',
    marginRight: 30, // balance the back button width
  },

  checkoutTxt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
  },

});


export default styles;
