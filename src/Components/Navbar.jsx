import React from 'react';
import { Box, Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box bg="green" py='4' pos={'sticky'} top={'0'} zIndex={'1000'}>
      <Flex justifyContent={'space-between'} alignItems={'center'} m={'auto'} maxW={'1280px'} px={5} py={0}>
      <Flex gap={'15px'} justifyContent={'center'} >
       
      </Flex>

      <Flex justifyContent={'space-between'} gap={5} >
          <Link as={RouterLink}  to={'/'} color="white"  fontSize="lg"> 
            Home
          </Link>
          <Link as={RouterLink} to={'/leaderboard'} color="white"  fontSize="lg">
              Leaderboard
          </Link>
      </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
