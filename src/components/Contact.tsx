import { AiTwotoneMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

function Contact() {
  return (
    <div className="text-center">
      <div className="heading my-24 mt-36">
        Contact<div className="underline"></div>
      </div>
      <div className="px-5">
        <div
          className="text-xl text-center max-w-[600px] mx-auto mb-10"
        >
          Have a question or want to work together? Email me and I'll get back
          to you as soon as possible.
        </div>
        <div className="text-3xl font-bold text-light-blue flex flex-col gap-10 max-w-[350px] text-left mb-24 mx-auto">
          <div className="flex justify-between items-center">
            <span className="align-middle">Email:&nbsp;</span>
            <a
              href="mailto:yu.ka.wing.alex@gmail.com"
              className="cursor-pointer align-middle"
              target="_blank"
            >
              <AiTwotoneMail className="text-5xl"></AiTwotoneMail>
            </a>
          </div>
          <div className="flex justify-between items-center">
            <span className="align-middle">LinkedIn:&nbsp;</span>
            <a
              href="https://www.linkedin.com/in/alex-yu-340383247/"
              className="cursor-pointer align-middle"
              target="_blank"
            >
              <AiFillLinkedin className="text-5xl"></AiFillLinkedin>
            </a>
          </div>
          <div className="flex justify-between items-center">
            <span className="align-middle">GitHub:&nbsp;</span>
            <a
              href="https://github.com/YuKaWing?tab=repositories"
              className="cursor-pointer align-middle"
              target="_blank"
            >
              <AiFillGithub className="text-5xl"></AiFillGithub>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
