import React from 'react'
import Tilt from "react-tilt"
import {motion} from 'framer-motion'
import { styles } from '../styles'
import {services} from '../constants'
import {fadeIn,textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index,title,icon}) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card '
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
    <motion.p
      variants={fadeIn("","",0.1,1)}
      className="mt-4 text-secondary text-[17px] max-w-8xl leading-[30px]" 
    >
      As an ambitious and driven pre-final year student pursuing Electrical and 
      Electronics Engineering at SSN College of Engineering, I am Mona Abishek A. 
      Fueled by a deep passion for web development, I specialize in both frontend 
      and backend technologies, including HTML, CSS, JavaScript, Node.js, MongoDB,
      React, and Express. With an unwavering commitment to excellence, I 
      meticulously craft immersive digital experiences, seamlessly integrating 
      external services and architecting scalable RESTful APIs. My proficiency 
      extends to Python, where I leverage libraries like Tkinter, pandas, and NumPy
      to engineer efficient, data-driven applications. Recently venturing into 
      competitive programming using C++, I embrace its intellectual challenges,
      relentlessly sharpening my problem-solving skills. Join me on this ambitious
      journey, where innovation meets dedication, as we redefine tomorrow's digital
      landscape.
    </motion.p>
    <div className='mt-20 flex flex-wrap justify-evenly  gap-10'>
    {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
    </div>
    </>
  )
}

export default SectionWrapper(About,'about');