'use client';


import  { motion } from 'framer-motion'
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from "../utils/motion"

const Hero = () => (
  <section className='w-full h-[100vh] mt-[100px] md:w-[100vw] sm:pl-16 pl-6'>
    <motion.div
    variants={staggerContainer}
     initial='hidden'
     whileInView='show'
     viewport={{once: false, amount:0.25}}
     className={`${styles.innerWidth} mx-auto flex flex-col md:flex-row`}
    >
      <div className='flex justify-center items-center flex-col relative z-10 flex-1'>
        <motion.h1 variants={textVariant(1.1)}
        className='font-bold text-white uppercase text-[40px]'
        >
         Enter the World of Quantum Realm and Astral Projections
       
        </motion.h1>
      </div>
     <motion.div
     variants={slideIn('right', 'tween', 0.2,1)}
     className='relative w-full md:-mt-[20px] -mt-[12px] flex-1'>

      
        <img 
        src='/metahero2.png'
        alt='cover'
        className='w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative'
        />
        <a href="#explore">
          <div className='w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10 '>
             <img src="/stamp.png" alt="stamp" className='sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] 
             object-contain ' />

          </div>
        </a>
      

     </motion.div>
    </motion.div>
  </section>
);

export default Hero;
