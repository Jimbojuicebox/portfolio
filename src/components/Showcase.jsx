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
    ShowcaseImageCard, 
    ShowcaseParticleContainer, 
    Particle,
} from '../styles/Showcase.styled'

import { BsLinkedin, BsDiscord, BsGithub } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'

import ShowcaseImg from '../assets/showcase-img.png'
import BackgroundImg from '../assets/react.svg'
import { fadeInLeftVariant, fadeInRightVariant } from '../utils/Variants'


const Showcase = ({ openMenu }) => {
  return (
    <PaddingContainer
        id='Home'
        left='3%'
        right='10%'
        top='18%'
        bottom='10%'
        responsiveLeft='1rem'
        responsiveRight='1rem'
        responsiveTop='8rem'
    >
        <FlexContainer align='center' fullWidthChild>
            {/* lefthand content */}
            <motion.div
                /* initial={{x: -50, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{type: 'tween', duration: 1}} */
                variants={fadeInLeftVariant}
                initial='hidden'
                whileInView='visible'
            >
                <Heading as='h4' size='h4'>Hello!</Heading>

                <Heading 
                    as='h2' 
                    size='h2' 
                    top='0.5rem' 
                    bottom='1rem'
                >
                    I'm <BlueText>James Foreman</BlueText>
                </Heading>

                <Heading as='h3' size='h3'>
                    I'm a <BlueText>Frontend Developer</BlueText>
                </Heading>

                <ParaText as='p' top='2rem' bottom='4rem'>
                    Based in the south of the UK. I'm a front-end developer with experience 
                    creating and designing user-friendly websites and web applications using 
                    ReactJS, JavaScript and supporting frameworks/plugins.
                </ParaText>

                {/* social icon links */}
                <FlexContainer gap='30px' responsiveFlex>
                    <IconContainer 
                        display={ openMenu ? 'none' : 'visible'}
                        href='https://www.linkedin.com/in/jamesaforeman/' 
                        target='_blank' 
                        color='white' 
                        size='1.8rem'
                    >
                        <BsLinkedin />
                    </IconContainer>

                    <IconContainer 
                        display={ openMenu ? 'none' : 'visible'}
                        href='https://discordapp.com/users/227534938793050112'
                        target='_blank'
                        color='white'
                        size='1.8rem'
                    >
                        <BsDiscord />
                    </IconContainer>

                    <IconContainer
                        display={ openMenu ? 'none' : 'visible'} 
                        href='https://github.com/Jimbojuicebox?tab=repositories' 
                        target='_blank' 
                        color='white' 
                        size='1.8rem'
                    >
                        <BsGithub />
                    </IconContainer>

                    <IconContainer 
                        display={ openMenu ? 'none' : 'visible'}
                        href='mailto:jamesaforeman@hotmail.com' 
                        target='_blank' 
                        color='white' 
                        size='1.8rem'
                    >
                        <FiMail />
                    </IconContainer>
                </FlexContainer>
            </motion.div>

            {/* righthand content */}
            <FlexContainer 
                as={motion.div}
                variants={fadeInRightVariant}
                initial='hidden'
                whileInView='visible'
                justify='flex-end'    
            >
                <ShowcaseParticleContainer>
                    <ShowcaseImageCard>
                        <img src={ShowcaseImg} alt='showcase' />
                    </ShowcaseImageCard>

                    <Particle
                        as={motion.img}
                        animate={{
                            x: [0, 100, 0],
                            rotate: 360,
                            scale: [1, 0.5, 1]
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                        }}
                        src={BackgroundImg}
                        alt='particle'
                        top='-80px'
                        left='20px'
                        rotate='60deg'
                    />

                    <Particle
                        as={motion.img}
                        animate={{
                            y: [0, 100, 0],
                            rotate: 360,
                            scale: [1, 0.8, 1]
                        }}
                        transition={{
                            duration: 18,
                            repeat: Infinity,
                        }}
                        src={BackgroundImg}
                        alt='particle'
                        top='50px'
                        right='-70px'
                        rotate='0deg'
                    />

                    <Particle
                        as={motion.img}
                        animate={{
                            y: [0, -100, 0],
                            rotate: 360,
                            scale: [1, 0.9, 1]
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                        }}
                        src={BackgroundImg}
                        alt='particle'
                        bottom='10px'
                        left='-70px'
                        rotate='50deg'
                    />
                </ShowcaseParticleContainer>
            </FlexContainer>
        </FlexContainer>
    </PaddingContainer>
  )
}

export default Showcase