import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootState } from '../redux/store';
import { RootStackParamList } from '../types/types';
import { addToCart, clearCart, setQuantity } from '../redux/slices/cartSlice';
import { Colors } from '../styles/colors';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const RestaurantCard = ({ restaurant }: { restaurant: any }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp>();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartRestaurantName = useSelector((state: RootState) => state.cart.restaurantName);

  const isActiveRestaurant =
    !cartRestaurantName || cartRestaurantName === restaurant.name;

  const getQuantity = (itemName: string) => {
    const itemId = `${restaurant.id}-${itemName}`;
    const cartItem = cartItems.find(ci => ci.id === itemId);
    return cartItem?.quantity || 0;
  };

  const handleQuantityChange = (item: any, delta: number) => {
    const itemId = `${restaurant.id}-${item.name}`;
    const currentQty = getQuantity(item.name);
    const newQty = currentQty + delta;

    const itemPayload = {
      ...item,
      id: itemId,
      name: item.name,
      price: item.price,
      rating: Number(item.rating),
      restaurant_Name: restaurant.name,
      cuisine: '', // You can pass cuisine name if needed
    };

    const update = () => {
      if (newQty <= 0) {
        dispatch(setQuantity({ id: itemId, quantity: 0 }));
      } else if (currentQty === 0) {
        dispatch(addToCart({
          item: { ...itemPayload, quantity: 1 },
          restaurantName: restaurant.name,
          restaurantId: restaurant.id,
        }));
      } else {
        dispatch(setQuantity({ id: itemId, quantity: newQty }));
      }

    };

    if (!isActiveRestaurant) {
      Alert.alert(
        'Replace Cart Items?',
        'Your cart has items from another restaurant. Do you want to replace them?',
        [
          { text: 'Cancel', style: 'cancel' },
          {
            text: 'OK',
            onPress: () => {
              dispatch(clearCart());
              dispatch(addToCart({
                item: { ...itemPayload, quantity: 1 },
                restaurantName: restaurant.name,
                restaurantId: restaurant.id
              }));
            },
          },
        ]
      );
    } else {
      update();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{restaurant.name}</Text>

      {restaurant.cuisines.map((cuisine: any, idx: number) => (
        <View key={idx} style={styles.cuisineSection}>
          <Text style={styles.cuisineTitle}>
            🍽️ {cuisine.name}{' '}
            <Text style={styles.cuisineTag}>({cuisine.tag})</Text>
          </Text>

          {cuisine.items.map((item: any) => {
            const quantity = getQuantity(item.name);

            return (
              <View key={item.name} style={styles.foodItem}>
                <View style={styles.itemTextContainer}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemDetails}>
                    ⭐ {item.rating} | ₹{item.price}
                  </Text>
                </View>

                {isActiveRestaurant ? (
                  quantity > 0 ? (
                    <View style={styles.qtyControls}>
                      <TouchableOpacity
                        onPress={() => handleQuantityChange(item, -1)}
                        style={styles.qtyBtn}
                      >
                        <Text style={styles.qtyText}>−</Text>
                      </TouchableOpacity>
                      <Text style={styles.qtyNumber}>{quantity}</Text>
                      <TouchableOpacity
                        onPress={() => handleQuantityChange(item, 1)}
                        style={styles.qtyBtn}
                      >
                        <Text style={styles.qtyText}>+</Text>
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <TouchableOpacity
                      style={styles.addBtn}
                      onPress={() => handleQuantityChange(item, 1)}
                    >
                      <Text style={styles.addBtnText}>Add to Cart</Text>
                    </TouchableOpacity>
                  )
                ) : (
                  <View style={styles.disabledBtn}>
                    <Text style={styles.disabledBtnText}>Add to Cart</Text>
                  </View>
                )}
              </View>
            );
          })}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    margin: 12,
    borderRadius: 16,
    padding: 18,
    borderColor: Colors.border,
    borderWidth: 1,
    shadowColor: Colors.primary,
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 12,
  },
  cuisineSection: {
    marginTop: 10,
  },
  cuisineTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 8,
  },
  cuisineTag: {
    fontSize: 14,
    fontStyle: 'italic',
    color: Colors.gray,
  },
  foodItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
  },
  itemTextContainer: {
    flex: 1,
    paddingRight: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
  },
  itemDetails: {
    fontSize: 13,
    color: Colors.gray,
    marginTop: 2,
  },
  qtyControls: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eaf3fa',
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  qtyBtn: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  qtyText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  qtyNumber: {
    marginHorizontal: 8,
    fontSize: 14,
    fontWeight: '600',
    color: Colors.text,
  },
  addBtn: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 10,
  },
  addBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  disabledBtn: {
    backgroundColor: '#dcdcdc',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 10,
  },
  disabledBtnText: {
    color: '#999',
    fontWeight: '600',
  },
});

export default RestaurantCard;
