import { Box, Flex, Heading, chakra, Button, Avatar } from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import {FaBars} from 'react-icons/fa'

export default function Header() {
    const [nav,setNav] = useState(false)
    return (
        <>
            <Head>
                <title>Portofolio</title>
                <meta name="description" content="App for look your score in that game include the leaderboard" />
                <link rel="icon" href="/bulet.svg" />
            </Head>
            <Flex justify="space-between" px={[5,7,9,12]} h='10vh' shadow='custom' bg='white' alignItems='center' position="relative">
                <Flex alignItems='center'>
                    <Avatar name='asep dera purnama' src="/poto.jpg" size='sm' style={{ cursor: 'pointer', marginRight:'17px' }} />
                    <Heading size='md' fontWeight='600'>Asep Dera Purnama</Heading>
                </Flex>
                <Flex justify="space-between" gap={14} display={['none','flex','flex','flex']} alignItems="center">
                    <Link href='#home'>
                        <a className='head-link'>Home</a>
                    </Link>
                    <Link href='#about'>
                        <a className='head-link'>About</a>
                    </Link>
                    <Link href='#projek'>
                        <a className='head-link'>Project</a>
                    </Link>
                </Flex>
                <Flex justify="start" gap={4}
                    display={nav == true ? 'flex' : 'none'} position="absolute"
                    top="100%" zIndex='999' bg='white' widht='100%' direction='column'
                    height='fit-content'
                    left='0' right='0' px='9' py='4'
                >
                    <Link href='#home'>
                        <a className='head-link'>Home</a>
                    </Link>
                    <Link href='#about'>
                        <a className='head-link'>About</a>
                    </Link>
                    <Link href='#projek'>
                        <a className='head-link'>Project</a>
                    </Link>
                </Flex>
                <Box cursor='pointer' display={['flex','none','none','none']} onClick={() => {setNav(!nav); console.log(nav)}}>
                    <FaBars/>
                </Box>
            </Flex>
        </>
    )
}