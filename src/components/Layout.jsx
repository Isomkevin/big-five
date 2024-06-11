// components/Layout.js
import {
  Box,
  Container,
  Flex,
  Spacer,
  VStack,
  Heading,
  Text,
} from '@chakra-ui/react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <Flex direction="column" minH="100vh" w="auto">
      <Box position="fixed" top={0} left={0} right={0} zIndex={10}>
        <Navbar />
      </Box>
      <Box pt="64px" flex="1">
        <Container bg="gray.200" maxW="container.md">
          <VStack spacing={0.5} align="stretch">
            {children}
          </VStack>
        </Container>
      </Box>
      <Footer />
    </Flex>
  );
};

export default Layout;

// components/Header.jsx
export const Header = () => (
  <Box bg="teal.500" color="white" p={4}>
    <Heading size="lg">Big5</Heading>
  </Box>
);

// components/Footer.jsx
export const Footer = () => (
  <Box bg="teal.500" color="white" p={4} mt="auto">
    <Text>&copy; {new Date().getFullYear()} Big5. All rights reserved.</Text>
  </Box>
);

