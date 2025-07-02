import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { FoodItem } from '../types/types';

const FoodItemCard = ({ item, onAdd }: { item: FoodItem; onAdd: (item: FoodItem) => void }) => (
  <View style={styles.card}>
    <Text style={styles.name}>{item.name}</Text>
    <Text style={styles.price}>₹{item.price}</Text>
    <Text style={styles.rating}>⭐ {item.rating}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#EEE',
    margin: 5,
    borderRadius: 8,
    width: 150,
    backgroundColor: '#FFF',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  rating: {
    fontSize: 14,
    color: '#FF6B6B',
    marginBottom: 8,
  },
});

export default FoodItemCard;
