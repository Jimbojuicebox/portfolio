import React, { useState } from 'react'
import { motion } from 'framer-motion'

import {
    PaddingContainer,
    Heading,
    BlueText,
    FlexContainer,
    /* Button */
} from '../styles/Global.styled'

import { 
    ContactForm,
    FormInput,
    FormLabel,
    Confirmation,
    SendMe
} from '../styles/Footer.styled'

import { fadeInBottomVariant } from '../utils/Variants'


const Footer = ({ openMenu }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        let xhr = new XMLHttpRequest()
        xhr.open('POST', '../contact-form.php')
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                setSubmitted(true)
            }
        }
        xhr.send('name=' + name + '&email=' + email + '&message=' + message)
        
        setName('')
        setEmail('')
        setMessage('')
        setSubmitted(true)
    }

    return (
        <PaddingContainer
            id='Contact'
            top='5%'
            bottom='10%'
        >
            <Heading
                as={motion.h4}
                variants={fadeInBottomVariant}
                initial='hidden'
                whileInView='visible'
                size='h4'
                align='center'
            >
                MY CONTACT
            </Heading>

            <Heading
                as={motion.h2}
                variants={fadeInBottomVariant}
                initial='hidden'
                whileInView='visible'
                size='h2'
                align='center'
                top='0.5rem'
            >
                Contact <BlueText>Me Here</BlueText>
            </Heading>

            <PaddingContainer top='3rem'>
                <FlexContainer
                    as={motion.div}
                    variants={fadeInBottomVariant}
                    initial='hidden'
                    whileInView='visible' 
                    justify='center'
                >
                    <ContactForm onSubmit={onSubmit} display={ openMenu ? 'none' : 'visible'}>
                        <PaddingContainer bottom='2rem'>
                            <FormLabel>Name:</FormLabel>
                            <FormInput
                                type='text'
                                placeholder='Enter your name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </PaddingContainer>

                        <PaddingContainer bottom='2rem'>
                            <FormLabel>Email:</FormLabel>
                            <FormInput
                                type='email'
                                placeholder='Enter your email address'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </PaddingContainer>

                        <PaddingContainer bottom='2rem'>
                            <FormLabel>Message:</FormLabel>
                            <FormInput
                                as='textarea'
                                placeholder='Enter your message'
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </PaddingContainer>

                        <FlexContainer justify='center' responsiveFlex>

                            <Confirmation display={ submitted ? 'visible' : 'none'}>
                                Thank you for making contact! I'll be in touch soon.
                            </Confirmation>

                            <SendMe type='submit' value='Send Message' display={ submitted ? 'none' : 'visible'} />
                            {/* <Button onClick={onSubmit()}>Send Message</Button> */}
                            
                        </FlexContainer>
                    </ContactForm>
                </FlexContainer>
            </PaddingContainer>

        </PaddingContainer>
    )
}

export default Footer