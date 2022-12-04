export interface TechInfo {
  imgSrc: string
  name: string
}

function TechItem(props: TechInfo) {
    return (
      <div className="flex w-[250px] items-center bg-slate-200 rounded-3xl p-3 h-max-[30px] shadow-md max-mobile:max-w-none max-mobile:flex-1">
        <img className="max-w-[60px] mr-3" src={props.imgSrc}></img>
        <div className="text-xl text-coolGray-700 font-bold">{props.name}</div>
      </div>
    );
  }
  
  export default TechItem;
  