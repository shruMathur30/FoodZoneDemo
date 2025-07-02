import React, { useEffect, useMemo, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import localData from '../../data/DummyData.json';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import RestaurantCard from '../../components/RestaurantCard';
import { useNavigation } from '@react-navigation/native';
import { Restaurant } from '../../types/types';
import styles from './HomeStyles';

const HomeScreen = () => {
  const [data, setData] = useState<Restaurant[]>([]);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  // console.log("cartItems", cartItems)
  const totalAmount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  );

  const navigation = useNavigation<any>();

  useEffect(() => {
    setData(localData as Restaurant[]);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>🍽️ Popular Restaurants</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <RestaurantCard restaurant={item} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

      {cartItems.length > 0 && (
        <View style={styles.cartBar}>
          <View>
            <Text style={styles.cartLabel}>Total</Text>
            <Text style={styles.cartTotal}>₹{totalAmount}</Text>
          </View>
          <TouchableOpacity
            style={styles.checkoutBtn}
            onPress={() => navigation.navigate('Checkout')}
          >
            <Text style={styles.checkoutText}>Checkout</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
