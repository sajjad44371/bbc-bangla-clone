import React from "react";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <>
      <div>
        <div className="bg-[#b80000] h-16">
          {" "}
          <div className="max-w-6xl mx-auto px-5 h-full flex items-center">
            <a
              href="/"
              className="flex items-center h-full border-b-4 border-transparent hover:border-white transition-all px-1"
            >
              <img src={logo} alt="BBC News Logo" className="invert h-7" />
            </a>
          </div>
        </div>

        <div className="bg-[#211f1f]">
          <div className=" max-w-6xl mx-auto px-5">
            <div className="py-5 border-b border-gray-100">
              <h2 className="text-white text-sm md:text-lg cursor-pointer hover:underline">
                বিবিসির ওপর কেন আপনি আস্থা রাখতে পারেন
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 xl:gap-6 py-5 border-b border-gray-100">
              <h2 className="text-white text-sm md:text-lg cursor-pointer hover:underline">
                ব্যবহারের শর্তাবলী
              </h2>
              <h2 className="text-white text-sm md:text-lg cursor-pointer hover:underline">
                প্রিভেসি নীতি
              </h2>
              <h2 className="text-white text-sm md:text-lg cursor-pointer hover:underline">
                বিবিসির সাথে যোগাযোগ করুন
              </h2>
              <h2 className="text-white text-sm md:text-lg cursor-pointer hover:underline">
                Do not share or sell my info
              </h2>
              <h2 className="text-white text-sm md:text-lg cursor-pointer hover:underline">
                বিবিসি সম্পর্কে
              </h2>
              <h2 className="text-white text-sm md:text-lg cursor-pointer hover:underline">
                কুকিজ
              </h2>
              <h2 className="text-white text-sm md:text-lg cursor-pointer hover:underline">
                অন্যান্য ভাষায় বিবিসির সংবাদ
              </h2>
            </div>
            <div className="py-5">
              <h2 className="text-white text-sm md:text-lg ">
                © 2026 বিবিসি। বাইরের কোন সাইটের তথ্যের জন্য বিবিসি দায়বদ্ধ
                নয়।{" "}
                <span className="cursor-pointer hover:underline">
                  বাইরের লিংক সম্পর্কে বিবিসির দৃষ্টিভঙ্গি সম্বন্ধে পড়ুন।
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
