import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FoodItem } from '../../types/types';

interface CartState {
  items: FoodItem[];
  restaurantId: string | null;
  restaurantName: string | null;
}

interface AddToCartPayload {
  item: FoodItem;
  restaurantName: string;
}

const initialState: CartState = {
  items: [],
  restaurantId: null,
  restaurantName: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<AddToCartPayload>) => {
      const { item, restaurantName } = action.payload;
      state.items.push(item);
      state.restaurantName = restaurantName;
    },
    clearCart: (state) => {
      state.items = [];
      state.restaurantId = null;
      state.restaurantName = null;
    },
  },
});

export const { addToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
