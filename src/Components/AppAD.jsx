import React from "react";
import { FaStar } from "react-icons/fa6";

const AppAD = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-[20%] border bg-custom-gradient gap-2 p-2">
      {/* logo and title  */}

      <div className="flex justify-center items-center gap-2">
        <img src="/assets/images/smallLogo.png" alt="LOGO" className="h-10" />
        <p className="text-md font-semibold">Download the App</p>
      </div>

      {/* rating and download titles */}
      <div className="appAdbg bg-adBg w-full bg-no-repeat bg-cover overflow-hidden h-[158px] flex flex-col text-white px-2 py-1 gap-1">
        <div className="ratings flex items-center gap-1 text-xs">
          <FaStar />
          <p>4.8 Rated</p>
        </div>

        <p className="text-center text-sm font-bold">Download App</p>
        <div className="flex flex-col p-4 gap-2">
          <div className="flex items-center gap-2">
            <img
              src="https://img.lazcdn.com/g/tps/imgextra/i2/O1CN01n3PMa828kJZVuCbPp_!!6000000007970-2-tps-72-72.png_150x150q80.png"
              className="size-8"
            />
            <p>Free Delivery</p>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="https://img.lazcdn.com/g/tps/imgextra/i3/O1CN01J03SMW1lebTE7xkaN_!!6000000004844-2-tps-72-72.png_150x150q80.png"
              className="size-8"
            />
            <p>Limited Time</p>
          </div>
        </div>
      </div>
      {/* qr code and the link to download */}
      <div className="flex gap-4">
        {/* qr code */}
        <div>
          <img
            src="https://img.drz.lazcdn.com/g/tps/imgextra/i2/O1CN01da6D0K1Khogk708ZP_!!6000000001196-0-tps-150-150.jpg_360x360q80.jpg"
            alt=""
            className="size-20"
          />
        </div>
        {/* links to download */}
        <div className="flex flex-col gap-4">
          {/* app store link */}
          <div>App Store</div>
          {/* play store link */}
          <div>PlayStore</div>
        </div>
      </div>

      <div>
        <p className="text-xs">Download the App Now</p>
      </div>
    </div>
  );
};

export default AppAD;
