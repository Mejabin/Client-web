import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { CiMobile1 } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

const Contact = () => {
  return (
    <div className="container mx-auto">
      <div className="container ">
        <div className="flex items-center">
          <IoCallOutline className="mr-2 " />
          <span className="text-base font-medium text-gray-800">
            02-48038536
          </span>
        </div>
        <div className="flex items-center">
          <CiMobile1 className="mr-2" />
          <span className="text-base font-medium text-gray-800">
            02-48038536
          </span>
        </div>
        <div className="flex items-center">
          <FaWhatsapp className="mr-2" />
          <span className="text-base font-medium text-gray-800">
            dicmadrasha2007@gmail.com
          </span>
        </div>
        <div className="flex items-center">
          <IoMail className="mr-2" />
          <span className="text-base font-medium text-gray-800">
            01738177117
          </span>
        </div>
        <div className="flex items-center">
          <CiLocationOn className="mr-2" />
          <a
            href="https://maps.app.goo.gl/QRb1ZCEbFdKK8fhX8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-medium text-gray-800"
          >
            https://maps.app.goo.gl/QRb1ZCEbFdKK8fhX8
        </a>
        </div>
        <div className="flex items-center">
          <FaFacebook className="mr-2" />
          <a
            href="https://www.facebook.com/dicmadrasha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-medium text-gray-800"
          >
            https://www.facebook.com/dicmadrasha
          </a>
        </div>
        <div className="flex items-center">
          <TfiYoutube className="mr-2" />
          <a
            href="www.youtube.com/@dicmadrasha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-medium text-gray-800"
          >
            www.youtube.com/@dicmadrasha
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
