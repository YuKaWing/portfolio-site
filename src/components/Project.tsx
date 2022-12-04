interface ProjectItem {
    children?: React.ReactNode
    onClickImg?: React.MouseEventHandler
    imgSrc: string
    isReversePosition?: boolean
}

function Project(props: ProjectItem) {
  return (
    <div className="flex justify-around items-center gap-4 max-mobile:flex-col mb-14 last:mb-0">
      <div className={(props.isReversePosition ? "order-3" : "order-1") + " max-mobile:order-3 z-20"}>
        {props.children}
      </div>
      <div
        onClick={props.onClickImg}
        className="work-wrapper p-[20px] box-content bg-gradient-to-r to-secondary-color from-light-blue rounded-2xl shadow-xl max-w-[800px] order-2 z-10"
      >
        <img
          src={props.imgSrc}
          className="rounded-xl w-full max-w-full"
        ></img>
      </div>
    </div>
  );
}

export default Project;
