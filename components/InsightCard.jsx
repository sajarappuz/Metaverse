'use client';
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
const InsightCard = ({imgUrl, title, subtitle, index}) => (
  <motion.div
   variants={fadeIn('up', 'string',index * 0.7, 1)}
    className="flex md:flex-row  flex-col gap-4 px-[30px]"
  >
    <img
     src={imgUrl}
     alt="image"
     className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
    />
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="font-normal lg:text-[32px] text-[18px] text-white text-justify">{title}</h4>
        <p className="mt-[16px] font-normal lg:text-[16px] text-[13px] text-secondary-white">{subtitle}</p>
      </div>
      <div className="lg:flex hidden items-center justify-center w-[70px] h-[70px] rounded-full bg-transparent 
      border-[1px] border-white">
        <img
          src="arrow.svg"
          alt="arrow"
          className="w-[30%] h-[30%] object-contain"
        />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
