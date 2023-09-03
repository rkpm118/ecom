function cartreducer(state,action) {
    let {product:{price,image,name},color,id,cartCount}=action.payload
    console.log(price,image,name,color,id,cartCount)
   switch (action.type) {
  
    case "ADD_TO_CART":
        let productData={
           name,
           id:Math.trunc(Math.random()*10000)+id,
           image:image[0].url,
           color,
           quantity:cartCount,
           price
        }
        return {
            ...state,
               cart:[productData,...state.cart,]
        }
      
   
    default:
        return state
   }
}
export default cartreducer;