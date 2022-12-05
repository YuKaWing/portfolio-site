import { AiOutlineArrowUp } from "react-icons/ai";
import * as Scroll from 'react-scroll';

function Footer() {
  return (
    <div className="text-secondary-color text-sm font-bold w-full h-[70px] bottom-0 bg-light-green uppercase relative">
      <span className="translate-x-[-50%] translate-y-[-50%] absolute top-1/2 left-1/2">
        Made by Alex Yu
      </span>
      <div onClick={Scroll.animateScroll.scrollToTop} className="tap-highlight-transparent top-button custom-shadow cursor-pointer select-none inline-block text-3xl p-1 text-black bg-neutral-100 rounded-full translate-x-[-50%] absolute top-[-25px] left-1/2">
        <AiOutlineArrowUp></AiOutlineArrowUp>
      </div>
    </div>
  );
}

export default Footer;
