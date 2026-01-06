import React from "react";
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Social = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto my-12">
        <h2 className="text-3xl font-bold">সামাজিক মাধ্যমে বিবিসি বাংলা</h2>
        <div className="grid grid-cols-4 gap-10 mt-5">
          <Link
            to={"https://web.facebook.com/BBCBengaliService/"}
            className="text-xl font-semibold flex items-center gap-4 hover:underline cursor-pointer"
          >
            <FaFacebook className="text-[#1877F2] text-5xl " />
            Facebook
          </Link>
          <Link
            to={"https://www.whatsapp.com/channel/0029Vb68i5LKQuJMXWvqcx0X"}
            className="text-xl font-semibold flex items-center gap-4 hover:underline cursor-pointer"
          >
            <FaWhatsapp className="text-[#25D366] text-5xl " />
            Whatsapp
          </Link>
          <Link
            to={"https://www.instagram.com/bbcnewsbangla/"}
            className="text-xl font-semibold flex items-center gap-4 hover:underline cursor-pointer"
          >
            <FaInstagram className="text-[#E1306C] text-5xl " />
            Instagram
          </Link>
          <Link
            to={"https://www.youtube.com/BBCBangla"}
            className="text-xl font-semibold flex items-center gap-4 hover:underline cursor-pointer"
          >
            <FaYoutube className="text-[#FF0000] text-5xl " />
            Youtube
          </Link>
          <Link
            to={"https://x.com/bbcbangla"}
            className="text-xl font-semibold flex items-center gap-4 hover:underline cursor-pointer"
          >
            <FaXTwitter className="text-[#000000] text-5xl " />X
          </Link>
          <Link
            to={"https://www.tiktok.com/@bbcnewsbangla"}
            className="text-xl font-semibold flex items-center gap-4 hover:underline cursor-pointer"
          >
            <AiFillTikTok className="text-[#000000] text-5xl " />
            TikTok
          </Link>
        </div>
      </div>
    </>
  );
};

export default Social;
