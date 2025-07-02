import React, { useState } from 'react';
import {
  View, Text, FlatList, TouchableOpacity, SafeAreaView,
  Image,
  Modal,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  ToastAndroid,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import store, { RootState } from '../../redux/store';
import { RootStackParamList } from '../../types/types';
import { clearCart, setQuantity } from '../../redux/slices/cartSlice';
import styles from './CheckoutStyles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const CheckoutScreen = () => {

  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [cookingInstruction, setCookingInstruction] = useState('');
  const [inputText, setInputText] = useState('');
  const navigation = useNavigation<NavigationProp>();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const restaurantName = useSelector((state: RootState) => state.cart.restaurantName);

  const items = cartItems;

  const total = items.reduce((sum, item: any) => sum + item.price * item.quantity, 0);

  const updateQuantity = (item: any, delta: number) => {
    const newQty = item.quantity + delta;

    if (newQty >= 0) {
      dispatch(setQuantity({ id: item.id, quantity: newQty }));

      // Wait for Redux state update
      setTimeout(() => {
        const updatedCart = store.getState().cart.items;
        const hasItems = updatedCart.some((item: any) => item.quantity > 0);

        if (!hasItems) {
          navigation.navigate('Home');
        }
      }, 100);
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIconWrapper}>
          <Image
            source={require('../../assets/images/backbutton.png')}
            style={styles.backButton}
          />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.checkoutTxt}>Checkout</Text>
        </View>
      </View>


      <View style={styles.restaurantInfo}>
        <Text style={styles.restaurantName}>{restaurantName}</Text>
        <Text style={styles.deliveryInfo}>54 mins to Home | 1.3 km | Auto Delivery</Text>
      </View>

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.enhancedItemCard}>

            <View style={styles.itemImagePlaceholder}>
              <Text style={styles.imageText}>🍽️</Text>
            </View>

            {/* Item Details */}
            <View style={styles.itemDetails}>
              <Text style={styles.enhancedItemName}>{item.name}</Text>
              <Text style={styles.enhancedItemPrice}>₹{item.price}</Text>
            </View>

            {/* Quantity Controls */}
            <View style={styles.qtyContainer}>
              <TouchableOpacity onPress={() => updateQuantity(item, -1)}>
                <Text style={styles.qtySymbol}>−</Text>
              </TouchableOpacity>
              <Text style={styles.qtyValue}>{item.quantity}</Text>
              <TouchableOpacity onPress={() => updateQuantity(item, 1)}>
                <Text style={styles.qtySymbol}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {/* Additions Section */}
      <TouchableOpacity style={styles.addRow} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.addRowText}>➕ Add more items</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.addRow}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addRowText}>
          📝 {cookingInstruction ? cookingInstruction : 'Add cooking requests'}
        </Text>
      </TouchableOpacity>

      {/* Payment Section */}
      <TouchableOpacity style={styles.sectionRow}>
        <Text style={styles.sectionText}>💳 Paying using UPI</Text>
        <Text style={styles.changeText}>Change ➤</Text>
      </TouchableOpacity>

      {/* Bottom Bar */}
      <View style={styles.bottomBar}>
        <Text style={styles.totalAmount}>Total: ₹{total}</Text>
        <TouchableOpacity
          style={styles.payButton}
          onPress={() => {
            dispatch(clearCart());
            setCookingInstruction('');
            ToastAndroid.showWithGravity(
              'Order Placed Successfully',
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM
            );

            navigation.navigate('Home');
          }}
        >
          <Text style={styles.payButtonText}>Pay ₹{total}</Text>
        </TouchableOpacity>
      </View>

      {/* Cooking Instruction Modal */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            style={styles.modalContainer}
          >
            <Text style={styles.modalTitle}>Enter Cooking Instructions</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="e.g. No onions, less spicy"
              value={inputText}
              onChangeText={setInputText}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.modalCancel}
                onPress={() => {
                  setModalVisible(false);
                  setInputText('');
                }}
              >
                <Text style={styles.modalCancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalSave}
                onPress={() => {
                  setCookingInstruction(inputText);
                  setModalVisible(false);
                  setInputText('');
                }}
              >
                <Text style={styles.modalSaveText}>Save</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default CheckoutScreen;
