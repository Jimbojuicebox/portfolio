import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GiHamburgerMenu } from 'react-icons/gi'

import {
    PaddingContainer,
    FlexContainer,
    Container,
    BlueText
} from '../styles/Global.styled'

import {
    NavbarContainer,
    Logo,
    MenuIcon
} from '../styles/Navbar.styled'

import { theme } from '../utils/Theme'
import NavMenu from './layouts/NavMenu'


const Navbar = ({ openMenu, setOpenMenu }) => {
  /* const [openMenu, setOpenMenu] = useState(false) */
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    const onScroll = () => {
        window.pageYOffset > 50 ? setSticky(true) : setSticky(false)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  },[])

  return (
    <NavbarContainer bgColor={ sticky ? theme.colors.primary : 'transparent'}>
        <PaddingContainer
            top='1.2rem'
            bottom='1.2rem'
            responsiveLeft='1rem'
            responsiveRight='1rem'
        >
            <Container>
                <FlexContainer justify='space-between' responsiveFlex>

                    {/* lefthand logo */}
                    <Logo>
                        console.log<BlueText size='1.7rem'>(Dev)</BlueText>
                    </Logo>

                    {/* righthand menu */}
                    <MenuIcon
                        as={motion.a}
                        whileHover={{scale: 1.2}}
                        onClick={() => { setOpenMenu(true) }}
                    >
                        <GiHamburgerMenu />
                    </MenuIcon>

                </FlexContainer>
            </Container>

            <AnimatePresence>
                {openMenu && <NavMenu setOpenMenu={setOpenMenu} />}
            </AnimatePresence>
            
        </PaddingContainer>
    </NavbarContainer>
  )
}

export default Navbar