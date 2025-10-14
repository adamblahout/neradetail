"use client";

import {
  Card,
  Text,
  Title,
  SimpleGrid,
  ThemeIcon,
  Stack,
  Container,
} from "@mantine/core";
import {
  IconCar,
  IconTruckDelivery,
  IconTruck,
  IconBus,
  IconEngine,
  IconDroplet,
  IconBubble,
  IconMotorbike,
  IconArrowBigDown,
  IconBike,
} from "@tabler/icons-react";

const services = [
  {
    icon: IconCar,
    title: "Osobní",
    price: "199 Kč",
    description: "např. Škoda Octavia",
  },
  {
    icon: IconTruckDelivery,
    title: "Dodávka malá",
    price: "239 Kč",
    description: "např. VW Sharan",
  },
  {
    icon: IconTruck,
    title: "Dodávka střední",
    price: "259 Kč",
    description: "např. Mercedes Vito",
  },
  {
    icon: IconBus,
    title: "Dodávka maxi",
    price: "349 Kč",
    description: "např. Citroen Jumper",
  },
  {
    icon: IconEngine,
    title: "Mytí motoru",
    price: "249 Kč",
    description: "Čištění motorového prostoru",
  },
  {
    icon: IconDroplet,
    title: "Ostřik auta",
    price: "od 40 Kč",
    description: "Základní ostřik vozidla",
  },
  {
    icon: IconBubble,
    title: "Ostřik aktivní pěnou",
    price: "149 Kč",
    description: "Pěnové mytí pro hlubší čištění",
  },
  {
    icon: IconMotorbike,
    title: "Mytí motorky",
    price: "100 Kč",
    description: "Rychlé a šetrné mytí",
  },
  {
    icon: IconArrowBigDown,
    title: "Mytí spodku auta",
    price: "90 Kč",
    description: "Odstranění nečistot z podvozku",
  },
  {
    icon: IconBike,
    title: "Mytí jízdního kola",
    price: "50 Kč",
    description: "Pro cyklisty – rychlá očista",
  },
];

const PricingPage = () => {
  return (
    <Container size="lg" pt="xl">
      <Stack align="center" mb="3rem">
        <Title order={1} fz="3rem" fw={800} ta="center">
          Ceník
        </Title>
        <Text c="dimmed" ta="center" maw={600}>
          Kompletní nabídka ručního mytí vozidel a doplňkových služeb
        </Text>
      </Stack>

      <SimpleGrid
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing="2rem"
        verticalSpacing="2rem"
      >
        {services.map((service) => (
          <Card
            key={service.title}
            shadow="md"
            radius="lg"
            p="xl"
            withBorder
            style={{
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "";
            }}
          >
            <Stack align="center" gap="sm">
              <ThemeIcon variant="light" size={60} radius="xl">
                <service.icon size={32} />
              </ThemeIcon>
              <Title order={3}>{service.title}</Title>
              <Text fw={800} fz="xl" c="cyan">
                {service.price}
              </Text>
              <Text c="dimmed" ta="center" fz="sm">
                {service.description}
              </Text>
            </Stack>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default PricingPage;
