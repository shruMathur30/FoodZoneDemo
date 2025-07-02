import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Restaurant, FoodItem, RootStackParamList } from '../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, clearCart } from '../redux/slices/cartSlice';
import { useNavigation } from '@react-navigation/native';
import { RootState } from '../redux/store';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const RestaurantCard = ({
  restaurant,
}: {
  restaurant: Restaurant;
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp>();
  const cuisines = restaurant.Cuisines.split(',').map(c => c.trim());
  const cartRestaurantName = useSelector((state: RootState) => state.cart.restaurantName);


  const handleAddToCart = (item: any) => {
    if (cartRestaurantName && cartRestaurantName !== restaurant.restaurant_Name) {
      Alert.alert(
        "Replace Cart Items?",
        "Your cart has items from another restaurant. Do you want to replace them?",
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "OK",
            onPress: () => {
              dispatch(clearCart());
              dispatch(addToCart({ item, restaurantName: restaurant.restaurant_Name }));
              navigation.navigate("Checkout");
            },
          },
        ],
        { cancelable: true }
      );
    } else {
      dispatch(addToCart({ item, restaurantName: restaurant.restaurant_Name }));
      navigation.navigate("Checkout");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {restaurant.restaurant_Name} ({restaurant.rating})
      </Text>

      {cuisines.map((cuisine, idx) => {
        const items = restaurant.foodItems.filter(item => item.cuisine === cuisine);

        if (items.length === 0) return null;

        return (
          <View key={idx} style={styles.cuisineSection}>
            <Text style={styles.cuisineTitle}>{cuisine}</Text>
            {items.map(item => (
              <View key={item.id} style={styles.foodItem}>
                <Text>{item.name} - ⭐ {item.rating} - ₹{item.price}</Text>
                <Button title="Add to Cart" onPress={() => handleAddToCart(item)} />
              </View>
            ))}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cuisineSection: {
    marginTop: 10,
  },
  cuisineTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  foodItem: {
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default RestaurantCard;
