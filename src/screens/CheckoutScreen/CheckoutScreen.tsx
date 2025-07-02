import React, { useState } from 'react';
import {
  View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView,
  Image,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { FoodItem, RootStackParamList } from '../../types/types';
import { clearCart } from '../../redux/slices/cartSlice';
import styles from './CheckoutStyles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type CartItemWithQty = FoodItem & { quantity: number };
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const CheckoutScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const restaurantName = useSelector((state: RootState) => state.cart.restaurantName);

  const [items, setItems] = useState<CartItemWithQty[]>(() => {
    const map: Record<string, CartItemWithQty> = {};
    cartItems.forEach(item => {
      if (!item || !item.id) return;

      if (map[item.id]) {
        map[item.id].quantity += 1;
      } else {
        map[item.id] = { ...item, quantity: 1 };
      }
    });
    return Object.values(map);
  });

  const updateQuantity = (id: string, delta: number) => {
    setItems(prev => {
      const updated = prev.flatMap(item => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          if (newQty <= 0) return [];
          return [{ ...item, quantity: newQty }];
        }
        return [item];
      });

      if (updated.length === 0) {
        dispatch(clearCart());
        navigation.navigate('Home');
      }

      return updated;
    });
  };

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={require('../../assets/images/backbutton.png')} style={styles.backButton} />
      </TouchableOpacity>

      {/* Restaurant Summary */}
      <View style={styles.restaurantInfo}>
        <Text style={styles.restaurantName}>{restaurantName}</Text>
        <Text style={styles.deliveryInfo}>54 mins to Home | 1.3 km | Auto Delivery</Text>
      </View>

      {/* Food Items List */}
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.itemCard}>
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>₹{item.price}</Text>
            </View>
            <View style={styles.qtyControls}>
              <TouchableOpacity onPress={() => updateQuantity(item.id, -1)} style={styles.qtyBtn}>
                <Text style={styles.qtyText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.qtyNumber}>{item.quantity}</Text>
              <TouchableOpacity onPress={() => updateQuantity(item.id, 1)} style={styles.qtyBtn}>
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

      {/* Payment */}
      <TouchableOpacity style={styles.sectionRow}>
        <Text style={styles.sectionText}>💳 Paying using UPI</Text>
        <Text style={styles.changeText}>Change ➤</Text>
      </TouchableOpacity>

      {/* Pay */}
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
