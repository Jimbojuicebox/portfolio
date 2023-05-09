import React from 'react'
import { motion } from 'framer-motion'

import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer,
} from '../styles/Global.styled'

import {
    SkillsCardContainer,
    SkillsCard
} from '../styles/MySkills.styled'

import { Skills } from '../utils/Data'
import { fadeInLeftVariant, fadeInRightVariant } from '../utils/Variants'


const MySkills = ({ openMenu }) => {
  return (
    <PaddingContainer
        id='Skills'
        top='10%'
        bottom='10%'
        responsiveLeft='1rem'
        responsiveRight='1rem'        
    >
        <FlexContainer 
            responsiveFlex 
            fullWidthChild
            responsiveDirection='column-reverse'
        >

            {/* lefthand content */}
            <SkillsCardContainer
                as={motion.div}
                variants={fadeInLeftVariant}
                initial='hidden'
                whileInView='visible'
            >
                {Skills.map((skill) => (
                    <SkillsCard key={skill.id}>
                        <IconContainer 
                            display={ openMenu ? 'none' : 'visible'}
                            size='5rem' 
                            color='blue'
                        >
                            {skill.icon}
                        </IconContainer>
                        <Heading as='h4' size='h4'>
                            {skill.tech}
                        </Heading>
                    </SkillsCard>
                ))}
            </SkillsCardContainer>

            {/* righthand content */}
            <motion.div
                variants={fadeInRightVariant}
                initial='hidden'
                whileInView='visible'
            >
                <Heading as='h4' size='h4'>
                    MY SKILLS
                </Heading>

                <Heading as='h2' size='h2' top='0.5rem'>
                    What <BlueText>I can do</BlueText>
                </Heading>

                <ParaText top='2rem' bottom='1.5rem'>
                    My experience in building responsive and dynamic user interfaces using JavaScript 
                    and the ReactJS framework has allowed me to create engaging and interactive web applications.
                </ParaText>

                <ParaText bottom='1.5rem'>
                    I try to put an emphasis on scalability and easily maintainable applications. This allows the 
                    creation of efficient and sustainable code ready to adapt to the changing needs of a business.
                </ParaText>

                <ParaText bottom='1.5rem'>
                    NextJS recently became the official React framework. It's improved SEO, server side rendering 
                    and many other advanced features, when paired with MongoDb for data storage, allow for an 
                    incredibly powerful but also streamlined and easy to use tech stack.
                </ParaText>
            </motion.div>
        </FlexContainer>
    </PaddingContainer>
  )
}

export default MySkills