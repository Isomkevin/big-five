import React from 'react';
import { Box, Flex, Heading, Text, Button, Stack, HStack, VStack, Input, Textarea, Link } from '@chakra-ui/react';
import { ChatIcon, PhoneIcon, InfoIcon, SearchIcon } from '@chakra-ui/icons';
import { Menu, MenuButton, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const HelplinePage = () => {
  return (
    <Box>
      {/* Header */}
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="blue.500" color="white">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'-.1rem'}>
            Tourist Helpline
          </Heading>
        </Flex>
        <HStack spacing={5}>
          <Link href="#">Home</Link>
          <Link href="#">Report Incident</Link>
          <Link href="#">Contacts</Link>
          <Link href="#">FAQ</Link>
          <Menu as="div" className="relative">
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Language
            </MenuButton>
            <Transition
              as={React.Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
                <MenuItem>
                  {({ focus }) => (
                    <Link href="#" className={`${focus ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700`}>
                      English
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ focus }) => (
                    <Link href="#" className={`${focus ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700`}>
                      Spanish
                    </Link>
                  )}
                </MenuItem>
              </MenuItems>
            </Transition>
          </Menu>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box bg="blue.100" p={10} textAlign="center">
        <Heading>Welcome to Tourist Helpline</Heading>
        <Text mt={4}>Get the help you need quickly and easily</Text>
        <HStack mt={6} spacing={5} justify="center">
          <Button colorScheme="blue" variant="solid">Report an Incident</Button>
          <Button colorScheme="green" variant="solid">Get Help Now</Button>
        </HStack>
      </Box>

      {/* Main Content */}
      <Box p={5}>
        <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="start">
          {/* Emergency Contacts */}
          <VStack align="start" spacing={4} flex="1" p={5}>
            <Heading size="md">Emergency Contacts</Heading>
            <HStack>
              <PhoneIcon />
              <Text>Local Police: 123-456-7890</Text>
            </HStack>
            <HStack>
              <PhoneIcon />
              <Text>Ambulance: 098-765-4321</Text>
            </HStack>
          </VStack>

          {/* Medical Assistance */}
          <VStack align="start" spacing={4} flex="1" p={5}>
            <Heading size="md">Medical Assistance</Heading>
            <HStack>
              <InfoIcon />
              <Text>Hospital Nearby</Text>
            </HStack>
            <HStack>
              <InfoIcon />
              <Text>Local Clinic</Text>
            </HStack>
          </VStack>

          {/* FAQ */}
          <VStack align="start" spacing={4} flex="1" p={5}>
            <Heading size="md">FAQ</Heading>
            <HStack>
              <SearchIcon />
              <Text>Common Questions</Text>
            </HStack>
          </VStack>
        </Flex>

        {/* Live Chat Support */}
        <Box mt={10} textAlign="center">
          <Button leftIcon={<ChatIcon />} colorScheme="blue" variant="solid" size="lg">
            Start Chat
          </Button>
        </Box>

        {/* Incident Reporting Form */}
        <Box mt={10}>
          <Heading size="lg" mb={5}>Report an Incident</Heading>
          <Stack spacing={3}>
            <Input placeholder="Your Name" />
            <Input placeholder="Your Email" />
            <Textarea placeholder="Describe the Incident" />
            <Button colorScheme="blue" variant="solid">Submit Report</Button>
          </Stack>
        </Box>

        {/* Legal Assistance */}
        <Box mt={10}>
          <Heading size="lg" mb={5}>Legal Assistance</Heading>
          <Text>If you need legal assistance, please contact our support team.</Text>
        </Box>
      </Box>

      {/* Footer */}
      <Box bg="blue.500" color="white" p={5} mt={10}>
        <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
          <Text>&copy; 2024 Tourist Helpline</Text>
          <HStack spacing={5}>
            <Link href="#">Quick Links</Link>
            <Link href="#">Contact Info</Link>
            <Link href="#">Privacy Policy</Link>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default HelplinePage;