import React from "react";

const AppAD = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-[20%] border">
      {/* logo and title  */}

      <div className="flex justify-center items-center gap-2">
        <img
          src="/assets/images/smallLogo.png"
          alt="LOGO"
          className="h-[20px]"
        />
        <p>Download the App</p>
      </div>

      {/* rating and download titles */}
      <div className="appAdbg">
        <p>4.8 Rated</p>
        <p>Download App</p>
        <div className="flex flex-col">
          <div>
            <img src="" alt="" />
            <p>Free Delivery</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>Free Delivery</p>
          </div>
        </div>
      </div>
      {/* qr code and the link to download */}
      <div>
        {/* qr code */}
        <div></div>
        {/* links to download */}
        <div>
          {/* app store link */}
          <div></div>
          {/* play store link */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default AppAD;
