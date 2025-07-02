import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CartItem = {
  id: string;
  restaurant_Name: string;
  rating: number;
  price: number;
  cuisine: string;
  name: string;
  quantity: number;
};

interface CartState {
  items: CartItem[];
  restaurantName: string | null;
  restaurantId: string | null;
}

const initialState: CartState = {
  items: [],
  restaurantName: null,
  restaurantId: null,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{ item: CartItem; restaurantName: string; restaurantId: string }>
    ) => {
      const existingItem = state.items.find(i => i.id === action.payload.item.id);
      if (existingItem) {
        existingItem.quantity += action.payload.item.quantity || 1; // <- respect passed quantity
      } else {
        state.items.push({ ...action.payload.item });
      }
      state.restaurantName = action.payload.restaurantName;
      state.restaurantId = action.payload.restaurantId;
    },
    decreaseFromCart: (state, action: PayloadAction<string>) => {
      const idx = state.items.findIndex(i => i.id === action.payload);
      if (idx !== -1) {
        state.items[idx].quantity -= 1;
        if (state.items[idx].quantity <= 0) {
          state.items.splice(idx, 1);
        }
      }
      if (state.items.length === 0) {
        state.restaurantName = null;
        state.restaurantId = null;
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.restaurantName = null;
      state.restaurantId = null;
    },
    setQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const item = state.items.find(i => i.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
        if (item.quantity <= 0) {
          state.items = state.items.filter(i => i.id !== action.payload.id);
        }
      } else if (action.payload.quantity > 0) {
        // You MUST also pass full item info (see below)
        // This fallback requires separate handling
        console.warn("Trying to setQuantity on item not in cart:", action.payload.id);
      }

      if (state.items.length === 0) {
        state.restaurantId = null;
        state.restaurantName = null;
      }
    }

  },
});

export const { addToCart, decreaseFromCart, clearCart, setQuantity } = cartSlice.actions;
export default cartSlice.reducer;
