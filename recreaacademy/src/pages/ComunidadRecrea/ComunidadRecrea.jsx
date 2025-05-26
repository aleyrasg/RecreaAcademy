import React from 'react';
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Icon,
  Input,
  List,
  ListItem,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FiVolume2, FiSpeaker, FiMessageCircle, FiClipboard } from 'react-icons/fi';
import Layout from '../../components/Layout/Layout';

const conversaciones = [
  {
    icon: '🎉',
    titulo: '¡Bienvenidas y bienvenidos a Comunidad Recrea!',
    autor: 'Sofía Castellanos',
    hace: 'hace 2 hrs',
    respuestas: 32,
  },
  {
    icon: '☕',
    titulo: '¿Qué te inspira a seguir enseñando?',
    autor: 'Alejandra Sánchez',
    hace: 'hace 2 días',
    respuestas: 30,
  },
  {
    icon: '🛠️',
    titulo: 'Herramientas digitales que realmente te han funcionado',
    autor: 'Luis Castañeda',
    hace: 'hace 2 días',
    respuestas: 22,
  },
];

export default function ComunidadRecrea() {
  return (
    <Layout>
      <Flex height="100vh">
        {/* Contenido principal */}
        <Box flex="1" p="6" bg="gray.50" overflowY="auto">
          <Heading as="h1" size="lg" color="pink.500" mb="4">
            Comunidad Recrea
          </Heading>

          <Flex justify="space-between" align="center" mb="4">
            <Text fontSize="xl" fontWeight="semibold">
              General
            </Text>
            <Input placeholder="Buscar" width="200px" size="sm" />
          </Flex>

          <Button colorScheme="pink" mb="6">
            + Nueva Conversación
          </Button>

          <Stack spacing={4}>
            {conversaciones.map((conv, index) => (
              <Box key={index} bg="white" p="4" borderRadius="md" boxShadow="sm">
                <Text fontWeight="bold" fontSize="md">
                  {conv.icon} {conv.titulo}
                </Text>
                <Text fontSize="sm" color="gray.600" mt="1">
                  {conv.autor} — {conv.hace} — {conv.respuestas} Respuestas
                </Text>
              </Box>
            ))}
          </Stack>
        </Box>

        {/* Sidebar derecho */}
        <Box w="240px" bg="white" borderLeft="1px solid" borderColor="gray.200" pt="20" px="4">
          <Stack spacing={4}>
            <SidebarItem icon={FiVolume2} label="General" />
            <SidebarItem icon={FiSpeaker} label="Anuncios Oficiales" />
            <SidebarItem icon={FiMessageCircle} label="Charla Docente" />
            <SidebarItem icon={FiClipboard} label="Convocatorias" />
          </Stack>
        </Box>
      </Flex>
    </Layout>
  );
}

function SidebarItem({ icon, label }) {
  return (
    <Flex align="center" p="2" borderRadius="md" _hover={{ bg: 'gray.100', cursor: 'pointer' }}>
      <Icon as={icon} mr="3" />
      <Text fontWeight="medium">{label}</Text>
    </Flex>
  );
}
