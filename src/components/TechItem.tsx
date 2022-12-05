import { motion, Variants } from "framer-motion";
interface TechItemProps {
  imgSrc: string
  name: string
  variants: Variants
  custom: any
}

function TechItem(props: TechItemProps) {
  return (
    <motion.div
      variants={props.variants}
      custom={props.custom}
      className="flex w-[250px] items-center bg-slate-200 rounded-3xl p-3 h-[80px] shadow-md max-mobile:max-w-none max-mobile:flex-1"
    >
      <img className="max-w-[60px] max-h-[56px] mr-3" src={props.imgSrc}></img>
      <div className="text-xl text-coolGray-700 font-bold">{props.name}</div>
    </motion.div>
  );
}

export default TechItem;
