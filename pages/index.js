import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Header from '../component/Header'

export default function Home() {
  return (
    <>
      <Header />
      <Box overflow='hidden' className='box'>
        <Flex h='78vh' py={17} px={[7,8,12,24]} justify={['center','center','space-between','space-between']} align='center' className='bg-gambar' id='home' position='relative'>
          <Box position='absolute'
            w='640px' h='640px'
            backgroundImage='radial-gradient(50% 50% at 50% 50%,#aDcBF6 0,hsla(0,0%,100%,0) 100%)'
            top='-190px' left='-320px' opacity='.3' zIndex={1}></Box>
          <Box position='absolute' zIndex='9' className='ic icon-bulet' top='320px' right='80px'></Box>
          <Box position='absolute' zIndex='9' className='ic icon-bulet' top='10px' right='450px'></Box>
          <Box position='absolute' zIndex='9' className='ic icon-bulet' top='190px' left='30px'></Box>
          <Box position='absolute' zIndex='9' className='ic icon-bulet' top='240px' left='730px'></Box>
          <Box position='absolute' zIndex='9' className='ic icon-segitiga' bottom='40px' left='530px'></Box>
          <Flex direction='column' top='160px' maxW='100%' zIndex={2}>
            <Heading size='md' mb='4'><Text display='inline' color={['blue','blue','#9A8DEF','#9A8DEF']}>Hello, </Text><span>Saya Asep Dera Purnama</span></Heading>
            <Heading size='2xl'>Mahasiswa UICI</Heading>
            <Text mt={34} fontWeight='600'>Mahasiswa baru Universitas Insan Cita Indonesia di prodi Informatika
              yang bergabung di tahun 2022.</Text>
          </Flex>
          <Flex w='100%' alignItems='center' justify='end' display={['none','none','flex','flex']}>
            <Image src='./logo-iuci.png' maxH='400px' maxW='370px' minH='100px' minW='70px'/>
          </Flex>
        </Flex>
        <Flex id='about' px={[4,8,12,24]} py={[16,20,22,32]} justify="space-between" position='relative'>
          <Box position='absolute' zIndex='9' className='ic icon-cincin' top='320px' right='480px'></Box>
          <Box position='absolute' zIndex='9' className='ic icon-belah-ketupat' bottom='320px' left='480px'></Box>
          <Box position='absolute' zIndex='9' className='ic icon-bulet' top='320px' left='40px'></Box>
          <Box position='absolute'
              w='640px' h='640px'
              backgroundImage='radial-gradient(50% 50% at 50% 50%,#aDcBF6 0,hsla(0,0%,100%,0) 100%)'
              top='-190px' right='-320px' opacity='.3' zIndex={1}></Box>
          <Flex w='100%' alignItems='center' justify='start' display={['none','none','block','block']}>
            <Image src='./programmer.svg' h='300px' w='400px' minH='70px' minW='150px'/>
          </Flex>
          <Flex w='100%' direction='column' align='flex-end' px={[5,3,2,0]}>
            <Heading fontSize={['0.9rem','1rem','1.15rem','1.25rem']} color="#9A8DEF">Mengenal</Heading>
            <Heading fontSize={['1.3rem','1.5rem','1.6rem','1.875rem']}>Tentang Saya</Heading>
            <Text mt={['20px','24px','28px','34px']} fontWeight='600' textAlign='end' fontSize={['11px','13px','14px','16px']}>Hello nama saya Asep Dera Purnama lahir dan beralamat di Bandung, Jawa Barat.
              Saat ini saya bekerja sebagai front end developer di Reacteev dengan sehari-hari selalu berinteraksi dengan HTML, CSS, Javascript, dan Laravel.</Text>
          </Flex>
        </Flex>
        <Flex id='projek' px={[4,8,12,24]} py={22} justify="center" direction='column' position='relative'>
          <Box position='absolute'
            w='640px' h='640px'
            backgroundImage='radial-gradient(50% 50% at 50% 50%,#aDcBF6 0,hsla(0,0%,100%,0) 100%)'
            top='-190px' left='-320px' opacity='.3' zIndex={1}></Box>
          <Box>
            <Heading color="#9A8DEF" textAlign='center' textShadow='dark-lg'>Project</Heading>
            <Text fontWeight='600' textAlign='center'>Project Yang Dikerjakan</Text>
          </Box>
          <Flex mt={9}>
            <Flex w='100%' direction='column' align='flex-start'>
              <Heading size='md' color="#9A8DEF" fontSize={['0.9rem','1rem','1.15rem','1.25rem']}>Design Grafis</Heading>
              <Heading fontSize={['1.3rem','1.5rem','1.6rem','1.875rem']}>Kartu Nama</Heading>
              <Text mt={['20px','24px','28px','34px']} fontWeight='600' textAlign='start' fontSize={['11px','13px','14px','16px']}>Kartu nama sederhana yang saya buat dengan aplikasi Photoshop
                untuk memenuhi tugas Design Grafis.</Text>
            </Flex>
            <Flex w='100%' justify='end'>
              <Image src='./custom card.png' h='200px' w='400px' className='gambar-animate' minH='100px' minW='200px'/>
            </Flex>
          </Flex>
          <Flex mt='28' position='relative'>
            <Box position='absolute'
              w='640px' h='640px'
              backgroundImage='radial-gradient(50% 50% at 50% 50%,#aDcBF6 0,hsla(0,0%,100%,0) 100%)'
              top='-190px' right='-320px' opacity='.3' zIndex={1}></Box>
            <Flex w='100%' justify='start'>
              <Image src='./poster.svg' w={['150px','250px','300px','350px']} h='400px' className='gambar-animate'/>
            </Flex>
            <Flex w='100%' direction='column' align='flex-end' mt='7'>
              <Heading size='md' color="#9A8DEF" fontSize={['0.9rem','1rem','1.15rem','1.25rem']} textAlign='end'>Design Grafis</Heading>
              <Heading fontSize={['1.3rem','1.5rem','1.6rem','1.875rem']}>Poster</Heading>
              <Text mt={['20px','24px','28px','34px']} fontWeight='600' textAlign='end' fontSize={['11px','13px','14px','16px']}>Poster dengan tema undangan mengikuti perlombaan membuat AI yang dibuat dengan aplikasi Adobe XD
                untuk memenuhi tugas Design Grafis.</Text>
            </Flex>
          </Flex>
          <Flex mt='28'>
            <Flex w='100%' direction='column' align='flex-start'>
              <Heading size='md' color="#9A8DEF" fontSize={['0.9rem','1rem','1.15rem','1.25rem']}>Video Content Creation</Heading>
              <Heading fontSize={['1.3rem','1.5rem','1.6rem','1.875rem']}>Video Profil</Heading>
              <Text mt={['20px','24px','28px','34px']} fontWeight='600' textAlign='start' fontSize={['11px','13px','14px','16px']}>Kartu nama sederhana yang saya buat dengan aplikasi Photoshop
                untuk memenuhi tugas Design Grafis.</Text>
            </Flex>
            <Flex w='100%' alignItems='center' justify='end'>
              <Image src='./custom card.png' h='200px' w='400px' className='gambar-animate' minH='70px' minW='120px'/>
            </Flex>
          </Flex>
          <Flex mt='28' position='relative'>
            <Box position='absolute'
              w='640px' h='640px'
              backgroundImage='radial-gradient(50% 50% at 50% 50%,#aDcBF6 0,hsla(0,0%,100%,0) 100%)'
              top='-190px' right='-320px' opacity='.3' zIndex={1}></Box>
            <Flex w='100%' alignItems='center' justify='start' minH='100px' minW='200px'>
              <iframe width="100%" height='200px' src="https://www.youtube.com/embed/q8EG0LVlHCk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Flex>
            <Flex w='100%' direction='column' align='flex-end' px={4}>
              <Heading size='md' color="#9A8DEF" fontSize={['0.9rem','1rem','1.15rem','1.25rem']}>Animation</Heading>
              <Heading fontSize={['1.3rem','1.5rem','1.6rem','1.875rem']}>2D</Heading>
              <Text mt={['20px','24px','28px','34px']} fontWeight='600' textAlign='end' fontSize={['11px','13px','14px','16px']}>Animasi 2 dimensi dengan tema tata surya yang dibuat di Adobe After Effects untuk memenuhi tugas animasi.</Text>
            </Flex>
          </Flex>
          <Flex mt='28'>
            <Flex w='50%' direction='column' align='flex-start' px={4}>
              <Heading size='md' color="#9A8DEF" fontSize={['0.9rem','1rem','1.15rem','1.25rem']}>Animation</Heading>
              <Heading fontSize={['1.3rem','1.5rem','1.6rem','1.875rem']}>3D</Heading>
              <Text mt={['20px','24px','28px','34px']} fontWeight='600' textAlign='start' fontSize={['11px','13px','14px','16px']}>Animasi 3 dimensi yang juga bertemakan tata surya yang dibuat di aplikasi Blender untuk memenuhi tugas animasi.</Text>
            </Flex>
            <Flex w='50%' alignItems='center' justify='end' minH='100px' minW='200px'>
              <iframe width="100%" height="200px" src="https://www.youtube.com/embed/xaQjTJCVmCM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Flex>
          </Flex>
          <Flex mt='28' position='relative'>
            <Box position='absolute'
              w='640px' h='640px'
              backgroundImage='radial-gradient(50% 50% at 50% 50%,#aDcBF6 0,hsla(0,0%,100%,0) 100%)'
              top='-190px' right='-320px' opacity='.3' zIndex={1}></Box>
            <Flex w='100%' alignItems='center' justify='start'>
              <Image src='./poster.svg' w='300px' className='gambar-animate'/>
            </Flex>
            <Flex w='100%' direction='column' align='flex-end' mt='7'>
              <Heading size='md' color="#9A8DEF" fontSize={['0.9rem','1rem','1.15rem','1.25rem']}>Streaming</Heading>
              <Heading fontSize={['1.3rem','1.5rem','1.6rem','1.875rem']}>Podcast</Heading>
              <Text mt={['20px','24px','28px','34px']} fontWeight='600' textAlign='end' fontSize={['11px','13px','14px','16px']}>Poster dengan tema undangan mengikuti perlombaan membuat AI yang dibuat dengan aplikasi Adobe XD
                untuk memenuhi tugas Design Grafis.</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex w='100%' px='5' py={['10','12','14','16']} justify='center' direction='column' className='alat' mt='40'>
          <Heading fontSize={['1rem','1.15rem','1.35rem','1.5rem']} textAlign='center' color='white'>Aplikasi yang dipakai</Heading>
          <Flex justify='space-evenly' mt='7'>
            <Image src='./adobe-photoshop.svg' h={['25px','35px','65px','75px']}/>
            <Image src='./adobe-xd.svg' h={['25px','35px','65px','75px']}/>
            <Image src='./after-effects.svg' h={['25px','35px','65px','75px']}/>
            <Image src='./blender.svg' h={['25px','35px','65px','75px']}/>
            <Image src='./premiere-cc.svg' h={['25px','35px','65px','75px']}/>
            <Image src='./obs.svg' h={['25px','35px','65px','75px']}/>
            <Image src='./vscode.svg' h={['25px','35px','65px','75px']}/>
          </Flex>
        </Flex>
      </Box>
      <Flex justify='center' p='6' shadow='custom' bg='white' mt='9'>
        Build by Asep Dera Purnama 2022
      </Flex>
    </>
  )
}
