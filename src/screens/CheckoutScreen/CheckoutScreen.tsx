import React, { useState } from 'react';
import {
  View, Text, FlatList, TouchableOpacity, SafeAreaView,
  Image,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { RootStackParamList } from '../../types/types';
import { clearCart, setQuantity } from '../../redux/slices/cartSlice';
import styles from './CheckoutStyles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const CheckoutScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const restaurantName = useSelector((state: RootState) => state.cart.restaurantName);

  const items = cartItems;

  const total = items.reduce((sum, item: any) => sum + item.price * item.quantity, 0);

  const updateQuantity = (item: any, delta: number) => {
    const newQty = item.quantity + delta;
    dispatch(setQuantity({ id: item.id, quantity: newQty }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={require('../../assets/images/backbutton.png')} style={styles.backButton} />
      </TouchableOpacity>

      <View style={styles.restaurantInfo}>
        <Text style={styles.restaurantName}>{restaurantName}</Text>
        <Text style={styles.deliveryInfo}>54 mins to Home | 1.3 km | Auto Delivery</Text>
      </View>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }: any) => (
          <View style={styles.itemCard}>
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>₹{item.price}</Text>
            </View>
            <View style={styles.qtyControls}>
              <TouchableOpacity onPress={() => updateQuantity(item, -1)} style={styles.qtyBtn}>
                <Text style={styles.qtyText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.qtyNumber}>{item.quantity}</Text>
              <TouchableOpacity onPress={() => updateQuantity(item, 1)} style={styles.qtyBtn}>
                <Text style={styles.qtyText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {/* Additions Section */}
      <TouchableOpacity style={styles.addRow}>
        <Text style={styles.addRowText}>➕ Add more items</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.addRow}>
        <Text style={styles.addRowText}>📝 Add cooking requests</Text>
      </TouchableOpacity>

      {/* Payment Option */}
      <TouchableOpacity style={styles.sectionRow}>
        <Text style={styles.sectionText}>💳 Paying using UPI</Text>
        <Text style={styles.changeText}>Change ➤</Text>
      </TouchableOpacity>

      {/* Pay Section */}
      <View style={styles.bottomBar}>
        <Text style={styles.totalAmount}>Total: ₹{total}</Text>
        <TouchableOpacity style={styles.payButton} onPress={() => dispatch(clearCart())}>
          <Text style={styles.payButtonText}>Slide to Pay ₹{total}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CheckoutScreen;
