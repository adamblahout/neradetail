"use client";

import {
  Anchor,
  Box,
  Card,
  Center,
  Container,
  Divider,
  Group,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import {
  IconMail,
  IconMapPin,
  IconMessageCircle,
  IconPhone,
  IconUser,
} from "@tabler/icons-react";
import { useRef } from "react";

function Contact() {
  const mapRef = useRef<HTMLDivElement>(null);

  return (
    <Container size="lg" pt="xl">
      <Stack align="left" mb="lg">
        <Title order={1} fz="2.5rem" fw={700}>
          Kontakt
        </Title>
        <Text c="dimmed" fz={"lg"}>
          Máte dotaz nebo si chcete domluvit termín? Neváhejte mě kontaktovat
          telefonicky nebo e-mailem.
        </Text>
      </Stack>

      <Card shadow="lg" radius="xl" p="xl" mb="lg" withBorder>
        <Center>
          <Stack align="center" gap="lg" justify="center">
            <SimpleGrid
              cols={{ xs: 1, sm: 2 }}
              spacing="100"
              verticalSpacing="xl"
              style={{ width: "100%", maxWidth: 700 }}
            >
              <Group wrap="nowrap" gap="md">
                <ThemeIcon size={50} radius="xl">
                  <IconUser size={24} />
                </ThemeIcon>
                <Box>
                  <Text fw={600} fz="lg">
                    Martin Bonaventura
                  </Text>
                  <Text c="dimmed" fz="sm">
                    Majitel
                  </Text>
                </Box>
              </Group>

              <Group wrap="nowrap" gap="md">
                <ThemeIcon size={50} radius="xl">
                  <IconMapPin size={24} />
                </ThemeIcon>
                <Box>
                  <Text fw={600} fz="lg">
                    Neratovice, Ostrovní 154
                  </Text>
                  <Anchor
                    component="button"
                    onClick={() =>
                      mapRef.current?.scrollIntoView({ behavior: "smooth" })
                    }
                    fz="sm"
                  >
                    Zobrazit na mapě
                  </Anchor>
                </Box>
              </Group>

              <Group wrap="nowrap" gap="md">
                <ThemeIcon size={50} radius="xl">
                  <IconMail size={24} />
                </ThemeIcon>
                <Box>
                  <Anchor
                    href="mailto:bonaventura.martin@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    fw={600}
                    fz="lg"
                  >
                    bonaventura.martin@gmail.com
                  </Anchor>
                  <Text c="dimmed" fz="sm">
                    Odpovídám obvykle do 24 hodin
                  </Text>
                </Box>
              </Group>

              <Group wrap="nowrap" gap="md">
                <ThemeIcon size={50} radius="xl">
                  <IconPhone size={24} />
                </ThemeIcon>
                <Box>
                  <Anchor href="tel:+420603162356" fw={600} fz="lg">
                    +420 603 162 356
                  </Anchor>
                  <Text c="dimmed" fz="sm">
                    Po–Pá 8:00–17:00
                  </Text>
                </Box>
              </Group>
            </SimpleGrid>
          </Stack>
        </Center>
      </Card>

      <Box>
        <Title order={2} fz="2.5rem" fw={700}>
          Otevírací doba
        </Title>
      </Box>

      <Card shadow="lg" radius="xl" p="xl" mb="lg" withBorder>
        <Center>
          <Stack align="center" gap="md" maw={700}>
            <ThemeIcon size={60} radius="xl" color="cyan">
              <IconMessageCircle size={28} />
            </ThemeIcon>

            <Title order={3} ta="center" fw={700} fz={"1.8rem"}>
              Individuální domluva
            </Title>

            <Text ta="center" lh={1.8}>
              Každé vozidlo i zakázka je specifická, proto vše plánujeme a
              naceňujeme individuálně na základě předchozí komunikace. Společně
              si upřesníme rozsah služeb a navrhneme ideální postup i termín
              realizace.
            </Text>
          </Stack>
        </Center>
      </Card>

      <Divider label="Kde mě najdete" labelPosition="center" my="xl" />

      <div
        ref={mapRef}
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "1rem",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          height: "450px",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2550.963929359634!2d14.521420612817627!3d50.2552579714369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470be993f8ad298f%3A0xf475b18610a7173d!2zUnXEjW7DrSBteXTDrSBhdXQgQm9uYXZlbnR1cmE!5e0!3m2!1scs!2scz!4v1760421757366!5m2!1scs!2scz"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Container>
  );
}

export default Contact;
