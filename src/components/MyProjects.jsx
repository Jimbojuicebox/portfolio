import React from 'react'
import { motion } from 'framer-motion'

import { ProjectDetails } from '../utils/Data'
import Project from './layouts/Project'

import {
    PaddingContainer,
    Heading,
    BlueText,
} from '../styles/Global.styled'

import { fadeInTopVariant } from '../utils/Variants'


const MyProjects = ({ openMenu }) => {
  return (
    <PaddingContainer
        id='Projects'
        top='5%'
        bottom='5%'
        responsiveTop='20%'
        responsiveLeft='1rem'
        responsiveRight='1rem'
    >
        <Heading 
            as={motion.h4}
            variants={fadeInTopVariant}
            initial='hidden'
            whileInView='visible' 
            size='h4'
        >
            MY PROJECTS
        </Heading>

        <Heading 
            as={motion.h2}
            variants={fadeInTopVariant}
            initial='hidden'
            whileInView='visible' 
            size='h2'
        >
            What <BlueText>I have built</BlueText>
        </Heading>

        <Heading 
            as={motion.h4}
            variants={fadeInTopVariant}
            initial='hidden'
            whileInView='visible' 
            size='h4'
        >
            <BlueText>This site</BlueText> was built using ReactJS, Vite, Styled Components and Framer-Motion
        </Heading>

        {ProjectDetails.map((project) => (
            <PaddingContainer key={project.id} top='5rem' bottom='5rem'>
                <Project openMenu={openMenu} data={project} />
            </PaddingContainer>
        ))}
    </PaddingContainer>
  )
}

export default MyProjects