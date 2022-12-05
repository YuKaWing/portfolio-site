import * as Scroll from 'react-scroll';
import React from "react";

export interface NavBarProps {
  className?: string
}

function NavBar(props: NavBarProps) {
  const scrollToTop = (event: React.UIEvent<HTMLElement>) => {
    Scroll.animateScroll.scrollToTop();
    event.stopPropagation();
  }

  return (
    <div className={"tap-highlight-transparent font-bold text-xl text-stone-600 w-full min-h-[70px] bottom-0 bg-[#f5ef76] shadow-lg px-10 py-2 flex justify-end items-center gap-x-10 flex-wrap max-mobile:justify-evenly max-mobile:gap-x-2" + " " + (props.className == null ? "" : props.className)}>
      <Scroll.Link to='home' spy={true} smooth="easeOutQuad" className="py-2 px-3 rounded-lg cursor-pointer active:bg-light-blue active:text-white hover:bg-light-blue hover:text-white select-none" activeClass={"bg-light-blue text-white"}>
        <div>
          Home
        </div>
      </Scroll.Link>
      <Scroll.Link to='about' spy={true} smooth="easeOutQuad" className="py-2 px-3 rounded-lg cursor-pointer active:bg-light-blue active:text-white hover:bg-light-blue hover:text-white select-none" activeClass={"bg-light-blue text-white"}>
        <div>
          About
        </div>
      </Scroll.Link>
      <Scroll.Link to='projects' spy={true} smooth="easeOutQuad" className="py-2 px-3 rounded-lg cursor-pointer active:bg-light-blue active:text-white hover:bg-light-blue hover:text-white select-none" activeClass={"bg-light-blue text-white"}>
        <div>
          Projects
        </div>
      </Scroll.Link>
      <Scroll.Link to='contact' spy={true} smooth="easeOutQuad" className="py-2 px-3 rounded-lg cursor-pointer active:bg-light-blue active:text-white active: hover:bg-light-blue hover:text-white select-none" activeClass={"bg-light-blue text-white"}>
        <div>
          Contact
        </div>
      </Scroll.Link>
    </div>
  );
}

export default NavBar;
