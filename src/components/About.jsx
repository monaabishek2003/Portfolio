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
I'm Mona Abishek, an aspiring full-stack developer and problem solver passionate about building impactful digital experiences. Currently working as an Associate Engineer at AstraZeneca, I specialize in developing scalable web applications, integrating complex APIs, and creating tools that reduce manual effort for scientific workflows.

My journey blends engineering curiosity with hands-on development — from crafting full-stack platforms like Pixshare and Melthify, to innovating AI-powered solutions using AWS Bedrock. I enjoy working across the stack, optimizing performance, and exploring modern technologies like GraphQL, GitHub Actions, and scalable cloud architectures.

Beyond code, I thrive in collaborative environments, whether it’s organizing tech events, contributing to open-source, or participating in global hackathons.

Always learning. Always building. Always up for the next challenge.
    </motion.p>
    {/* <div className='mt-20 flex flex-wrap justify-evenly  gap-10'>
    {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
    </div> */}
    </>
  )
}

export default SectionWrapper(About,'about');