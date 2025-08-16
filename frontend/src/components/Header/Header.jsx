import React from "react";
import { assets } from "../../assets/assets";
import "../../index.css";

const Header = () => {
  return (
    <div
      className="
        mt-5
        header
        relative
        h-screen
        w-full
        flex
        justify-center
        items-center
        bg-no-repeat
        bg-center
        bg-cover
        md:w-[80%]
        mx-auto
        rounded-md
        bg-[url('https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg')]
        md:bg-[url('https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg')]
        md:w-full
        max-w-[100vw]
        "
    >
      <div
        className="
        header-contents
        absolute
        flex flex-col items-start gap-2
        left-1/2
        top-1/3
        -translate-x-1/2
        text-black
        animate-fadeIn
        w-[80vw]
        md:w-[60vw]
        px-4
      "
      >
        <h1 className="font-extrabold text-white text-4xl md:text-6xl">
          Order Now
        </h1>
        <p className="tracking-tight text-white text-base md:text-lg">
          Satisfy your cravings with a wide variety of cuisines at your
          fingertips.
          <br />
          Fresh meals delivered hot and fast, right to your doorstep.
        </p>
        <button className="text-zinc-600 py-3 px-4 bg-white rounded-4xl text-sm">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
