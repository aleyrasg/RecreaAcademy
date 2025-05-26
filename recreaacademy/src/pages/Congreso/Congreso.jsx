import React from 'react';
import {
  Box,
  Heading,
  Text,
  Flex,
  Stack,
  Tag,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Icon,
  VStack,
  HStack,
  Button,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import Layout from '../../components/Layout/Layout';

function Congreso() {
  return (
    <Layout>
      <Box px={{ base: 4, md: 12 }} py={8}>
        <Heading color="red.500" mb={4}>Congreso</Heading>

        {/* Línea del tiempo */}
        <Flex align="center" justify="space-between" mb={8}>
          {['2018', '2019', '2020', '2021', '2022', '2023', '2024'].map((year, i) => (
            <VStack key={year} spacing={2}>
              {year === '2022' && (
                <Icon viewBox="0 0 200 200" color="red.500">
                  <path fill="currentColor" d="M100 50 L150 100 L100 150 L50 100 Z" />
                </Icon>
              )}
              <Box h="2" w="2" bg="gray.300" borderRadius="full" />
              <Text fontSize="sm">{year}</Text>
            </VStack>
          ))}
        </Flex>

        {/* Filtros */}
        <HStack spacing={4} mb={8}>
          <Tag size="lg" variant="solid" colorScheme="blue">IA</Tag>
          <Tag size="lg" variant="solid" colorScheme="green">Gamificación</Tag>
          <Tag size="lg" variant="solid" colorScheme="red">Neuroeducación</Tag>
        </HStack>

        {/* Buscador */}
        <InputGroup mb={8} maxW="300px">
          <Input placeholder="Buscar" />
          <InputRightElement>
            <SearchIcon color="gray.500" />
          </InputRightElement>
        </InputGroup>

        <Flex direction={{ base: 'column', md: 'row' }} gap={8}>
          {/* Videos y tarjetas */}
          <Box flex="2">
            <Stack spacing={6}>
              <Box bg="gray.50" p={4} borderRadius="md" boxShadow="sm">
                <Text fontWeight="bold" color="red.500">Edición 2022</Text>
                <Image
                  src="https://via.placeholder.com/300x150?text=Video+Ponente"
                  alt="Edición 2022"
                  borderRadius="md"
                  my={2}
                />
                <Text fontWeight="semibold">Edición 2022 - IA en el Aula</Text>
              </Box>

              <Box bg="gray.100" p={4} borderRadius="md">
                <Text fontWeight="semibold">Edición 2023</Text>
                <Image
                  src="https://via.placeholder.com/300x150?text=Edicion+2023"
                  alt="Edición 2023"
                  borderRadius="md"
                  mt={2}
                />
              </Box>
            </Stack>
          </Box>

          {/* Ponente destacado */}
          <Box flex="1" bg="gray.100" p={6} borderRadius="md" boxShadow="md">
            <Heading as="h3" size="md" mb={4}>Ponente destacado</Heading>
            <Image
              src="https://via.placeholder.com/150x150?text=Ponente"
              alt="Bárbara Gómez"
              borderRadius="full"
              mb={4}
            />
            <Text fontWeight="bold">Bárbara Gómez</Text>
            <Text fontSize="sm" mb={4}>
              “La tecnología debe servir como un puente hacia una educación más inclusiva.”
            </Text>
            <Button colorScheme="red" size="sm">Ver su charla</Button>
          </Box>
        </Flex>
      </Box>
    </Layout>
  );
}

export default Congreso;
