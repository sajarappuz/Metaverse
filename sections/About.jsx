'use client';
import  { motion } from 'framer-motion'
import {TypingText} from "../components"
import styles from '../styles';
import { fadeIn, staggerContainer } from "../utils/motion"

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className='gradient-02 z-0' />
    <motion.div
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{once: false, amount:0.25}}
    className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}>

      <TypingText title='| About Metaverse' textStyles='text-center' />
      
      <motion.p
       variants={fadeIn('up', 'tween', 0.2, 1)}
       className='mt-[8px] font-normal sm:text-[25px] text-[20px] text-justify text-secondary-white '
      >
        <span className='font-extrabold text-white'>Metaverse</span> is an immersive digital realm that has captured the imagination of people worldwide. It is a vast interconnected network of <span className='font-extrabold text-white'>virtual worlds</span>, where individuals can explore, create, and interact with each other in real-time. In the metaverse, boundaries of physical space are transcended, allowing for limitless possibilities and experiences. It serves as a convergence point for virtual reality, augmented reality, and the internet, enabling seamless integration of digital and physical elements. From virtual marketplaces where users can buy and sell virtual goods, to social spaces where people can gather and connect, the metaverse offers a new frontier of opportunities. It has the potential to revolutionize various industries, from gaming and entertainment to education and commerce. With its ever-expanding scope and the potential for constant evolution, the metaverse is poised to <span className='font-extrabold text-white'> redefine</span> the way we live, work, and interact in the digital age.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src='/arrow-down.svg'
        alt='arrow'
        className='w-[18px] h-[28px] object-contain mt-[30px] '
      />


    

    </motion.div>
  </section>
);

export default About;
