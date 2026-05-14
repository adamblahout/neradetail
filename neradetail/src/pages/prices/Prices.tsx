"use client";

import {
  Box,
  Button,
  Card,
  Container,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconArrowRight } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const PricingPage = () => {
  const isMobile = useMediaQuery("(max-width: 48em)");
  return (
    <Container size="sm" py="6rem">
      <Stack align="center" gap="xl">
        <Stack gap="sm" maw={700}>
          <Title order={1} fz={{ base: "2.5rem", md: "3.5rem" }} fw={900}>
            Ceník služeb
          </Title>

          <Text c="dimmed" lh={1.8} fz="lg">
            Každé vozidlo vyžaduje individuální přístup. Finální cena se odvíjí
            od velikosti vozu, aktuálního stavu a rozsahu požadovaných služeb.
          </Text>
        </Stack>

        <Card shadow="xl" radius="2rem" p="3rem" withBorder maw={700} w="100%">
          <Stack gap="xl">
            <div>
              <Text tt="uppercase" fw={700} c="cyan" fz="sm" mb="0.5rem">
                Individuální nacenění
              </Text>

              <Title order={2} fw={800} mb="md">
                Každý detailing je jedinečný
              </Title>

              <Text c="dimmed" lh={1.8}>
                Před realizací společně vybereme vhodný rozsah detailingu a
                připravíme cenovou nabídku přesně podle potřeb vašeho vozidla.
              </Text>
            </div>

            <Box ta={isMobile ? "center" : "right"}>
              <Button
                size="lg"
                radius="xl"
                color="cyan"
                rightSection={<IconArrowRight size={18} />}
                component={Link}
                to="/contact"
              >
                Kontaktujte nás
              </Button>
            </Box>
          </Stack>
        </Card>
      </Stack>
    </Container>
  );
};

export default PricingPage;
