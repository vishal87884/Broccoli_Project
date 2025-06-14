function ShoppingCart() {
  return (
    <div className='fixed top-0 left-0 h-screen w-72 bg-white z-50 shadow-lg transform transition-transform duration-500 ease-in-out overflow-y-auto custom-scrollbar  '>
      <div>
        <p>Cart</p>
        <RxCross2 />
      </div>
      <div></div>
      <div>
        <div>
          <p>SubTotal</p>
          <p></p>
        </div>
        <div>
          <button>View Cart</button>
          <button>CheckOut</button>
        </div>
        <div>
          <p>Free Shipping on All Orders Over $100!</p>
        </div>
      </div>
    </div>
  );
}
export default ShoppingCart;
