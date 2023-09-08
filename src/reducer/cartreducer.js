function cartreducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      let {
        product: { price, image, name ,stock},
        color,
        id,
        cartCount,
      } = action.payload;
      console.log('hii i am ',stock)
      let findItem = state.cart.find((data) => {
        return data.id == id + color;
      });
      if (findItem) {
        let updateFindData = state.cart.map((data) => {
          if (data.id == id + color) {
            let newAmmount = data.quantity + cartCount;
            return {
              ...data,
              quantity: newAmmount,
            };
          } else {
            return {
              ...data,
            };
          }
        });

        return {
          ...state,
          cart: updateFindData,
        };
      } else {
        let productData = {
          name,
          id: id + color,
          image: image[0].url,
          color,
          quantity: cartCount,
          price,
        };
        return {
          ...state,
          cart: [productData, ...state.cart],
        };
      }

    case "DELETE_CART_ITEM":
      let filterItem = state.cart.filter((data) => {
        return data.id !== action.payload;
      });
      return {
        ...state,
        cart: filterItem,
      };
    case "CLEARALLCART":
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
}
export default cartreducer;
