import React, { useEffect, useMemo, useState } from 'react';
import { View, FlatList, Text, ToastAndroid } from 'react-native';
import { useDispatch } from 'react-redux';
import RestaurantCard from '../../components/RestaurantCard';
import localData from '../../data/DummyData.json';
import { addToCart } from '../../redux/slices/cartSlice';
import { FoodItem, Restaurant } from '../../types/types';
import styles from './HomeStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [data, setData] = useState<Restaurant[]>([]);
  console.log("data", data);

  useEffect(() => {
    setData(localData as Restaurant[]);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>🍽️ Popular Restaurants</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <RestaurantCard
            restaurant={item}
          />
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};
export default HomeScreen;