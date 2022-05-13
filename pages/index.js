import { Box, Flex, Heading, chakra, Button } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getCookie from '../util/GetCookie'

export default function Home() {
  axios.defaults.withCredentials = true
  getCookie
  const [formInput,setFormInput] = useState({})
  const input = {
    h: "37px", fontWeight:'semibold', bgColor: "transparent", borderBottom: ".8px solid #EEECC9", outline: '0', p: '0 8px', color: '#EEECC9', _placeholder: {color: '#EEECC9'}
  }
  const inputValue = e => {
    e.persist()
    setFormInput(pervState => ({
      ...pervState,
      [e.target.name]: e.target.value,
    }))
  }
  const kirim = e => {
    if (formInput.length == 0) {
      alert('isi dulu form nya'); return false
    }
    axios.post(`http://localhost:8000/api/login`, formInput).then(res => {
      if (res.data.error) console.log(res.data.error)

      localStorage.setItem('login_token', res.data.tokenLogin)
      localStorage.setItem('user', JSON.stringify(res.data.data))
      window.location.href = '/leaderboard'
    })
  }
  return (
    <div className={styles.container} style={{ height: '100vh',display:'flex',justifyContent:'center',alignItems:'center' }}>
      <Head>
        <title>That Game Leaderboard | Login</title>
        <meta name="description" content="App for look your score in that game include the leaderboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex w={['400px','400px','1000px','1000px']} height="550px" borderRadius="19px" overflow="hidden">
        <Flex w={["100%","100%","650px","650px"]} bgColor="#121122" direction='column'>
          <Flex justifyContent="center" alignItems="center" my="12">
            <Image src='/tameng.jpg' alt='icon aplikasi' height='100px' width='100px' ></Image>
          </Flex>
          <Box>
            <Heading size='lg' color='secondary' fontWeight="medium" textAlign="center">Sign In</Heading>
            <Flex direction='column' p="20px 45px">
              <chakra.input sx={input} autoComplete="off" placeholder='Email' name='email' onChange={e => inputValue(e)}/>
              <chakra.input my="8" sx={input} placeholder='Password' type="password" name='password' onChange={e => inputValue(e)}/>
              <Button bgColor="accent" color="secondary" _hover={{bgColor: "#272329",transition: '.3s'}} _focus={{outline:"0"}} onClick={e => kirim(e)}>Sign In</Button>
            </Flex>
          </Box>
        </Flex>
        <Box display={['none', 'none', 'flex', 'flex']} flexShrink="0" w="350px" position="relative" justifyContent="center" alignItems="center">
          <Box position="absolute" zIndex="9" color="secondary">
            <Heading size="lg" textAlign="center" mb="3">Disini</Heading>
            <Heading fontWeight="light" size="lg" textAlign="center">Tambahin kata kata apa ya yang bagus</Heading>
          </Box>
          <Image src='/bg.jpg' width='350px' height="550px" alt='Gambar bagus' ></Image>
        </Box>
      </Flex>
    </div>
  )
}
