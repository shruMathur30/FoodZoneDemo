export type FoodItem = {
  id: string;
  restaurant_Name: string;
  rating: number;
  price: number;
  cuisine: string;
};

export type Restaurant = {
  id: number;
  restaurant_Name: string;
  rating: number;
  Cuisines: string; 
  foodItems: FoodItem[];
  name: string;
};

export type RootStackParamList = {
  Home: undefined;
  Checkout: undefined;
};
