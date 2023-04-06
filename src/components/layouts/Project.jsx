import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'

import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    Button,
    IconContainer,
} from '../../styles/Global.styled'

import {
    TechStackCard,
    ProjectImage,
    ProjectImageContainer
} from '../../styles/MyProject.styled'

import { fadeInLeftVariant, fadeInRightVariant } from '../../utils/Variants'


const Project = ({ data, openMenu }) => {
  return (
    <FlexContainer 
        direction={data.reverse ? 'row-reverse' : undefined}
        fullWidthChild
    >

        {/* lefthand content */}
        <motion.div
            variants={data.reverse ? fadeInRightVariant : fadeInLeftVariant}
            initial='hidden'
            whileInView='visible'
        >
            <FlexContainer align='center' gap='1rem'>
                <Heading as='h3' size='h3' bottom='1rem'>
                    {data.project_name}
                </Heading>

                <IconContainer
                    display={ openMenu ? 'none' : 'visible'} 
                    href={data.github} 
                    target='_blank' 
                    color='blue' 
                    size='2rem'
                >
                    <FaGithub />
                </IconContainer>
            </FlexContainer>

            <PaddingContainer top='1rem'>
                <FlexContainer gap='1.5rem'>
                    {data.tech_stack.map((tech) => (
                        <TechStackCard key={tech}>{tech}</TechStackCard>
                    ))}
                </FlexContainer>
            </PaddingContainer>

            <ParaText top='1.5rem' bottom='2rem'>
                {data.project_desc}
            </ParaText>

            <Button 
                display={ openMenu ? 'none' : 'inline-block'}
                href={data.project_url} 
                target='_blank'
            >
                Visit Live Site
            </Button>
        </motion.div>

        {/* righthand content */}
        <ProjectImageContainer
            as={motion.div}
            variants={data.reverse ? fadeInLeftVariant : fadeInRightVariant}
            initial='hidden'
            whileInView='visible' 
            justify={data.reverse ? 'flex-start' : 'flex-end'}
        >
            <ProjectImage 
                src={data.project_img} 
                alt={data.project_name} 
            />
        </ProjectImageContainer>
    </FlexContainer>
  )
}

export default Project