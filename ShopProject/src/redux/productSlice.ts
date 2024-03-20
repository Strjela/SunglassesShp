/* import { RootState, AppDispatch } from "./store"; // */ /* Import RootState and AppDispatch from your store file */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type ProductData = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  images: string[];
};

type CartData = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  images: string[];
  qty: number;
};

interface ProductState {
  allProducts: ProductData[];
  loading: boolean;
  error: string | null;
  cart: CartData[];
  currentItem: ProductData | null;
}

const initialState: ProductState = {
  allProducts: [],
  loading: false,
  error: null,
  cart: [],
  currentItem: {
    id: 0,
    title: "",
    description: "",
    price: 0,
    thumbnail: "",
    images: [],
  },
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch(
      "https://dummyjson.com/products?limit=5&skip=80"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return data.products;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const inCart = state.cart.find((item) => item.id === action.payload.id);
      /*  if (inCart) {
        console.log("Ovo je inCart", true);
      } else {
        console.log("Ovo je inCart", false);
      } */
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...action.payload, qty: 1 }],
      };
    },
    loadCurrentItem: (state, action) => {
      return {
        ...state,
        currentItem: action.payload,
      };
    },
    removeFromCart: (state, action) => {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    },
    adjustQty: (state, action) => {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.allProducts = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch products";
      });
  },
});

export const { addItem, loadCurrentItem, removeFromCart, adjustQty } =
  productSlice.actions;

export default productSlice.reducer;
