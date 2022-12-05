import React, { useState } from "react";
import Project from "./Project";
import { openUrl } from "../utilities/url";
import Backdrop from "./Backdrop";

function Projects() {
  const [isModalShown, setIsModalShown] = useState(false)
  const [videoSrc, setVideoSrc] = useState("")

  const modal = <Backdrop isShown={isModalShown} onClick={() => { setIsModalShown(false); setVideoSrc("") }}>
    <iframe className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[960px] max-h-[540px] aspect-video" src={videoSrc} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  </Backdrop>

  const clickImgHandle = (videoSrc: string) => {
    return () => {
      setVideoSrc(videoSrc)
      setIsModalShown(true);
    }
  }

  return (
    <div className="text-center text-xl px-5 text-coolGray-700">
      <div className="heading my-24">
        Projects<div className="underline"></div>
      </div>
      <Project
        onClickImg={clickImgHandle("https://www.youtube.com/embed/q0gc9qqTNK4")}
        imgSrc={require("@/assets/works/DLFCBIM.png")}
        isReversePosition={false}
      >
        <React.Fragment>
          <div className="font-bold text-2xl mb-5">
            Deep Learning for Content-based Image Retrieval
          </div>
          <div>
            A final year project using ResNet50 and VGG16 for image retrieval.
            Python and Tensorflow were used in the stack.
          </div>
          <a
            href="https://github.com/YuKaWing/Deep-Learning-for-Content-Based-Image-Retrieval"
            target="_blank"
            className="project-button my-2 mx-auto"
          >
            View Code
          </a>
        </React.Fragment>
      </Project>
      <Project
        onClickImg={clickImgHandle("https://www.youtube.com/embed/irHXQbMf88M")}
        imgSrc={require("@/assets/works/drum_game.png")}
        isReversePosition={true}
      >
        <React.Fragment>
          <div className="font-bold text-2xl mb-5">Drum Game for the Elderly</div>
          <div>
            A drum game delivered to the elderly home, featuring a song input
            system. Made in Unity.
          </div>
        </React.Fragment>
      </Project>
      <Project
        onClickImg={clickImgHandle("https://www.youtube.com/embed/JZnMalX_x2o")}
        imgSrc={require("@/assets/works/overwhelmed.png")}
        isReversePosition={false}
      >
        <React.Fragment>
          <div className="font-bold text-2xl mb-5">Overwhelmed!</div>
          <div>
            A team project of a mobile game made in Unity. Role play as a nurse.
          </div>
        </React.Fragment>
      </Project>
      <Project
        onClickImg={() => openUrl("https://yukawing.github.io/MyHeroVSDragon/")}
        imgSrc={require("@/assets/works/MHVSD.png")}
        isReversePosition={true}
      >
        <React.Fragment>
          <div className="font-bold text-2xl mb-5">My Hero VS Dragon</div>
          <div>A team project of HTML5 game made in Phaser 3.</div>
          <a
            href="https://yukawing.github.io/MyHeroVSDragon/"
            target="_blank"
            className="project-button my-2 mx-auto"
          >
            Live Demo
          </a>
          <a
            href="https://github.com/YuKaWing/MyHeroVSDragon"
            target="_blank"
            className="project-button my-2 mx-auto"
          >
            View Code
          </a>
        </React.Fragment>
      </Project>
      <Project
        onClickImg={clickImgHandle("https://www.youtube.com/embed/AA_zwU1kvqY")}
        imgSrc={require("@/assets/works/robot_car.png")}
        isReversePosition={false}
      >
        <React.Fragment>
          <div className="font-bold text-2xl mb-5">Robot Car's Control System</div>
          <div>
            A PID control system of a robot car. A champion was earned for the related competition.
          </div>
        </React.Fragment>
      </Project>
      {modal}
    </div>
  );
}

export default Projects;
