import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  // Displaying items on cart
  const cartItems = useSelector((store) => store?.cart?.items);
  //   console.log("cartItems", cartItems);

  //! The below way is similar to the above but we should not use it as this is very inefficient. We dont want to Subscribe to complete store but just the portion of the store i.e., slice which is needed.
//   const store = useSelector((store)=>store);
//   const cartItems = store.cart.items;

  const dispatch = useDispatch();
  // Clear cart functionality
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-5 p-5">
      <h1 className="text-2xl font-bold">Cart</h1>

      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1>Cart is empty. Add items to the cart!</h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
