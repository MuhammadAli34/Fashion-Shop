import React from "react";
import { debit, logowhite, stripe } from "../assets";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
} from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";
function Footer() {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        <div className="flex flex-col gap-7">
          <img src={logowhite} alt="logoLight" className="w-32" />
          <p>@Made By Mohamed Ali</p>
          <img src={stripe} alt="stripe" className="w-20" />
          <div className="flex gap-5 text-lg text-gray-400">
            <ImGithub className="hover:text-white  duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-white  duration-300 cursor-pointer" />
            <FaFacebookF className="hover:text-white  duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white  duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white  duration-300 cursor-pointer" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Locate us</h2>
          <div>
            <p>Online,in Our accounts</p>
            <p>Mobile:00954 5594455</p>
            <p>Phone:,012900000</p>
            <p>Fashion00Shop@gmail.com</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Profile</h2>
          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPersonFill />
              </span>
              my account
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPaypal />
              </span>
              checkout
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <FaHome />
              </span>
              Order tracking
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <MdLocationOn />
              </span>
              help @ support
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <input
            type="text"
            placeholder="e-mail"
            className="bg-transparent border px-4 py-2 text-sm"
          />
          <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
