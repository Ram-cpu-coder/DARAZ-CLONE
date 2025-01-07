import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex justify-between w-[80%] m-3">
        <div className="flex flex-col">
          <h1>Customer Care</h1>
          <a href="">Help Center</a>
          <a href="">How to Buy</a>
          <a href="">Returns & Refunds</a>
          <a href="">Contact Us</a>
        </div>
        <div className="flex flex-col">
          <h1>Daraz</h1>
          <a href="">About Daraz</a>
          <a href="">Careers</a>
          <a href="">Daraz Blog</a>
          <a href="">Terms & Conditions</a>
          <a href="">Privacy Policy</a>
          <a href="">Digital Payments</a>
          <a href="">Daraz Customer University</a>
          <a href="">Daraz Affiliate Program</a>
          <a href="">Review & Win</a>
          <a href="">Meet the Winners</a>
          <a href="">Daraz University</a>
          <a href="">Sell on Daraz</a>
          <a href="">Code of Conduct</a>
        </div>
        <div className="flex flex-col">
          <img src="" alt="" />
          <h1>Happy Shopping</h1>
          <h2>Download App</h2>
        </div>
        <div>
          <a href="">
            <img src="" alt="" />
            first 1
          </a>
          <a href="">
            <img src="" alt="" />
            first 1
          </a>
          <a href="">
            <img src="" alt="" />
            first 1
          </a>
        </div>
      </div>
      <div className="flex justify-between w-[80%] m-3">
        <div className="flex flex-col ">
          <h1>Payment Methods</h1>
          <div className="flex">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
        <div className="flex flex-col">
          <h1>Verified by</h1>
          <img src="" alt="" />
        </div>
        {/* Leave Empty */}
        <div></div>
      </div>
      {/* needs to add more in this div */}
      <div></div>
      <div className="flex justify-between w-[80%] m-3">
        <div className="flex flex-col">
          <h1>Daraz International</h1>
          <div className="flex gap-2">
            <a href="">
              <img src="" alt="" /> Pakistan
            </a>
            <a href="">
              <img src="" alt="" /> Bangladesh
            </a>
            <a href="">
              <img src="" alt="" /> Sri Lanka
            </a>
            <a href="">
              <img src="" alt="" /> Myanmar
            </a>
            <a href="">
              <img src="" alt="" /> Nepal
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <h1>Follow Us</h1>
          <div className="flex">
            <a href="">
              <img src="" alt="" />
            </a>
            <a href="">
              <img src="" alt="" />
            </a>
            <a href="">
              <img src="" alt="" />
            </a>
            <a href="">
              <img src="" alt="" />
            </a>
          </div>
        </div>
        <div>© Daraz 2025</div>
      </div>
    </div>
  );
};

export default Footer;
