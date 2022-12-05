import React from "react";
import Typed from "typed.js";
import * as Scroll from 'react-scroll';

function Header() {
  const el: React.MutableRefObject<HTMLElement | null> = React.useRef(null);

  const typed: React.MutableRefObject<Typed | null> = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: [
        "Fullstack Developer",
        "Frontend Developer",
        "Backend Developer",
        "Mobile App Developer",
        "Game Developer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    typed.current = new Typed(el.current!, options);

    return () => {
      typed.current!.destroy();
    };
  }, []);



  return (
    <div className="tap-highlight-transparent select-none px-4 h-screen header text-3xl text-white text-center flex justify-center items-center flex-col">
      <div>
        Hello, I am <span className="text-ternary-color">Alex</span>
      </div>
      <div>
        <span>I am a </span>
        <span ref={el}></span>
      </div>
      <Scroll.Link to='about' spy={true} smooth="easeOutQuad" offset={5} className="mt-10">
        <div className="rgb-button flex select-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 mr-2 min-w-[40px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          View my work
        </div>
      </Scroll.Link>
    </div>
  );
}

export default Header;
