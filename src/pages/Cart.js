import React from "react";

function Cart() {
  return (
    <div>
      <div className="p-24 h-max-content font-thin max-md:p-9">
        <h1 className="text-3xl max-md:text-2xl">Your Shopping Cart</h1>
        <div>
          <div className="flex justify-between  pt-12 pr-12 pl-12 pb-3  border-b-2 max-md:hidden">
            <p className="w-4/12">Product</p>
            <p>Quantity</p>
            <p>Total</p>
          </div>
          <div className="flex justify-between  pt-4 pr-12 pl-5 pb-3  border-b-2 max-md:p-2 ">
            <div className="flex w-5/12 max-md:w-full max-md:pt-4">
              <img
                src="https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8"
                className="h-[175px] w-[150px] object-cover"
                alt="img"
              />
              <div className="pl-4 w-[225px] flex flex-col gap-2">
                <h1 className="font-normal pt-3">GrayStone Vase</h1>
                <p className="text-sm">
                  A timeless ceramic vase with tri color gray glaze
                </p>
                <p className="font-normal">$150</p>
              </div>
            </div>
            <div className="max-md:hidden">
              <p>1</p>
            </div>
            <div className="max-md:hidden">
              <p>$150</p>
            </div>
          </div>
          <div className="flex justify-between  pt-4 pr-12 pl-5 pb-3 border-b-2  max-md:p-2">
            <div className="flex w-5/12 max-md:w-full max-md:pt-4">
              <img
                src="https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80&w=1976&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="h-[175px] w-[150px] object-cover"
                alt="img"
              />
              <div className="pl-4 w-[225px] flex flex-col gap-2">
                <h1 className="font-normal pt-3">My Dining Room</h1>
                <p className="text-sm">
                  A timeless ceramic vase with tri color gray glaze
                </p>
                <p className="font-normal">$150</p>
              </div>
            </div>
            <div className="max-md:hidden">
              <p>1</p>
            </div>
            <div className="max-md:hidden">
              <p>$250</p>
            </div>
          </div>
          <div className="flex flex-col  items-end pt-5 gap-3">
            <h1 className="font-normal text-xl ">SubTotal $350</h1>
            <p className="text-xs ">
              Taxes and shipping are calculated at checkout
            </p>
            <button className="pt-3 pb-3 pr-5 pl-5 bg-black text-white text-sm hover:scale-110 duration-300 max-md:p-3 max-md:text-xs">
              Go to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
