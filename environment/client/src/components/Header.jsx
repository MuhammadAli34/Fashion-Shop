import React from "react";
import { cart, logodark, user } from "../assets";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const productData = useSelector((state) => state.fashion.productData);
  const userInfo = useSelector((state) => state.fashion.userInfo);
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to={"/"}>
          <div>
            <img src={logodark} alt="logo" className="w-[150px]  " />
          </div>
        </Link>
        <div className="flex justify-center gap-8">
          <ul className="flex justify-center gap-8">
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
              Home
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
              Pages
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
              Shop
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
              Element
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
              Blog
            </li>
          </ul>
          <Link to="/cart">
            <div className="relative">
              <img src={cart} alt="cart" className="w-[30px]  h-[30px]" />
              <span className="absolute w-[30px]  h-[25px] justify-center font-semibold flex items-center text-sm top-0 left-0">
                {productData.length}
              </span>
            </div>
          </Link>
          <Link to="/login">
            <img
              src={userInfo ? userInfo.image : user}
              alt="user"
              className="w-[30px]  h-[30px] rounded-full"
            />
          </Link>
          {userInfo && (
            <p className="text-base font-titleFont font-semibold underline underline-offset-2">
              {userInfo.name}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
