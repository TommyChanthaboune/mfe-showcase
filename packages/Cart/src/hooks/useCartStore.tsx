import create from "zustand";

export type Item = {
  id: string | null;
  count: number | null;
  price: number | null;
};

export type CartStore = {
  id: string | null;
  cart: Item[] | null;
  cartTotal: number;
};

const useCartStore = create<CartStore>((set) => ({
  id: "123abc",
  cart: null,
  cartTotal: 0,
  addToCart: (item: Item) =>
    set((state) => {
      if (state.cart.filter((e) => e.id === item.id).length > 0) {
        const newCart = state.cart;

        newCart[item.id].count = item.count;

        return {
          cart: [...newCart],
        };
      }

      return {
        cart: [...state.cart, item],
      };
    }),
}));

export default useCartStore;
