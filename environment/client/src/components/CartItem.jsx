import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useDispatch } from "react-redux";
import axios from "axios";
import {
  decrementQuantity,
  deleteItem,
  increamentQuantity,
} from "../redux/fashionShopSlice";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
function CartItem() {
  const productData = useSelector((state) => state.fashion.productData);
  const userInfo = useSelector((state) => state.fashion.userInfo);
  const [basenumber, setBaseNumber] = useState(1);
  const [amon, setAmon] = useState("");
  const [payNow, setPayNow] = useState(false);

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });

    setAmon(price.toFixed(2));
  }, [productData]);
  const dispatch = useDispatch();
  const handleCheckOut = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("Please sign in to Checkout");
    }
  };
  const payment = async (token) => {
    await axios.post("http://localhost:8000/pay", {
      amount: totalAmt * 100,
      token: token,
    });
  };
  return (
    <div className="w-2/3 pr-10 ">
      <div className="w-full">
        <h2 className="font-titleFont text-2xl">Shopping cart</h2>
        <div>
          {productData.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between gap-6 mt-6"
            >
              <div className="flex items-center  gap-2">
                <MdOutlineClose
                  onClick={() =>
                    dispatch(deleteItem(item._id)) &
                    toast.error(`${item.title} deleted from cart`)
                  }
                  className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300"
                />
                <img
                  className="w-32 h-32 object-cover"
                  src={item.image}
                  alt="productImg"
                />
              </div>
              <h2 className="w-52">{item.title}</h2>
              <p className="w-10">${item.price}</p>
              <div className="flex gap-4">
                <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
                  <p className="text-sm">Quantity</p>
                  <div className="flex items-center gap-4 text-sm font-semibold">
                    <span
                      onClick={() =>
                        dispatch(
                          decrementQuantity({
                            _id: item._id,
                            title: item.title,
                            image: item.image,
                            price: item.price,
                            quantity: setBaseNumber(
                              basenumber === 0
                                ? setBaseNumber(0)
                                : basenumber - 1
                            ),
                            description: item.description,
                          })
                        )
                      }
                      className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                    >
                      -
                    </span>
                    <span>{basenumber}</span>
                    <span
                      onClick={() =>
                        dispatch(
                          increamentQuantity({
                            _id: item._id,
                            title: item.title,
                            image: item.image,
                            price: item.price,
                            quantity: setBaseNumber(basenumber + 1),
                            description: item.description,
                          })
                        )
                      }
                      className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                    >
                      +
                    </span>
                  </div>
                </div>
                <span
                  onClick={() =>
                    dispatch(
                      increamentQuantity({
                        _id: details._id,
                        title: details.title,
                        image: details.image,
                        price: details.price,
                        quantity: basenumber,
                        description: details.description,
                      })
                    )
                  }
                ></span>
              </div>
              <p className="w-14">${item.quantity * item.price}</p>
            </div>
          ))}
        </div>
      </div>
      <Link to="/">
        <button className="mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300">
          <span>
            <HiOutlineArrowLeft />
          </span>
          go Shopping
        </button>
      </Link>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div>
        <div className="max-w-screen-xl mx-auto py-20 flex">
          <div className="w-1/3 bg-[#fafafa] py-6 px-4">
            <div className="flex flex-col gap-6 border-6 border-b-[1px] border-b-gray-400 pb-6">
              <h2 className="text-2xl font-medium">cart totals</h2>
              <p className="flex items-center gap-4 text-base">
                Subtotal
                <span className="font-titleFont font-bold text-lg">
                  ${amon}
                </span>
              </p>
            </div>
            <p className="font-titleFont font-semibold flex justify-between mt-6">
              Total <span className="text-xl font-bold">${amon}</span>
            </p>
            <button
              onClick={handleCheckOut}
              className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Proceed to checkout
            </button>
            {payNow && (
              <div className="w-full mt-6 flex items-center justify-center">
                <StripeCheckout
                  name="Fashion shop Online"
                  stripeKey="pk_test_51NhcnnHlaML2Rsb1hruHMsSoxJ16FZfNVjwgusI1P6MjEESsW8ahfzubq3fFYBWvFxFtXfeIcby47CQgxo6AUWFj00Vg1GdeI2"
                  email={userInfo.email}
                  token={payment}
                  description={`Your Payment amount is ${amon}`}
                  label="Pay to Fashion"
                  amount={amon * 100}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
