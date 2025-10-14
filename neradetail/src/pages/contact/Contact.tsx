"use client";

import {
  Container,
  Title,
  Text,
  Card,
  Stack,
  Group,
  ThemeIcon,
  Anchor,
  Divider,
  Box,
  useMantineTheme,
  useMantineColorScheme,
  SimpleGrid,
} from "@mantine/core";
import { IconUser, IconMapPin, IconMail, IconPhone } from "@tabler/icons-react";
import { useRef } from "react";

function Contact() {
  const mapRef = useRef<HTMLDivElement>(null);
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  const openingHours = [
    {
      day: "Pondělí",
      hours: "08:00 – 12:00",
      break: "12:00 – 13:00",
      afternoon: "13:00 – 17:00",
    },
    {
      day: "Úterý",
      hours: "08:00 – 12:00",
      break: "12:00 – 13:00",
      afternoon: "13:00 – 17:00",
    },
    {
      day: "Středa",
      hours: "08:00 – 12:00",
      break: "12:00 – 13:00",
      afternoon: "13:00 – 17:00",
    },
    {
      day: "Čtvrtek",
      hours: "08:00 – 12:00",
      break: "12:00 – 13:00",
      afternoon: "13:00 – 17:00",
    },
    {
      day: "Pátek",
      hours: "08:00 – 12:00",
      break: "12:00 – 13:00",
      afternoon: "13:00 – 17:00",
    },
    { day: "Sobota", hours: "09:00 – 12:00", afternoon: "Zavřeno" },
    { day: "Neděle", hours: "Zavřeno", afternoon: "Zavřeno" },
  ];

  return (
    <Container size="lg" pt="xl">
      <Stack align="left" mb="3rem">
        <Title order={1} fz="3rem" fw={800}>
          Kontakt
        </Title>
        <Text c="dimmed" fz={"lg"}>
          Máte dotaz nebo si chcete domluvit termín? Neváhejte mě kontaktovat
          telefonicky nebo e-mailem.
        </Text>
      </Stack>

      <Card
        shadow="lg"
        radius="xl"
        p="xl"
        withBorder
        mb="3rem"
        style={{
          background:
            colorScheme === "dark"
              ? "linear-gradient(145deg, rgba(30,30,30,1) 0%, rgba(45,45,45,1) 100%)"
              : "linear-gradient(145deg, rgba(255,255,255,1) 0%, rgba(245,245,245,1) 100%)",
          transition: "all 0.3s ease",
        }}
      >
        <Stack align="center" gap="lg">
          <Title order={3} ta="center" fw={700}>
            Kontaktní informace
          </Title>
          <SimpleGrid
            cols={{ xs: 1, sm: 2 }}
            spacing="xl"
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
                  c="blue.5"
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
      </Card>

      <Box
        style={{
          width: "100%",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
        }}
      >
        <Title order={2} fz="2rem" fw={700} mb="md">
          Otevírací doba
        </Title>
        <Text c="dimmed" fz={"lg"} mb={"md"}>
          Vždy rádi pomůžeme. Níže najdete naše otevírací hodiny, abyste si
          mohli naplánovat návštěvu nebo nás kontaktovat během pracovní doby.
        </Text>
      </Box>

      <Box
        style={{
          width: "100%",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow:
            colorScheme === "dark"
              ? "0 4px 10px rgba(255,255,255,0.05)"
              : "0 4px 10px rgba(0,0,0,0.05)",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "separate",
            borderSpacing: "0",
          }}
        >
          <thead
            style={{
              backgroundColor:
                colorScheme === "dark"
                  ? theme.colors.dark[6]
                  : theme.colors.gray[0],
            }}
          >
            <tr>
              <th style={{ textAlign: "left", padding: "0.75rem 1rem" }}>
                Den
              </th>
              <th style={{ textAlign: "left" }}>Dopoledne</th>
              <th style={{ textAlign: "left" }}>Odpoledne</th>
            </tr>
          </thead>
          <tbody>
            {openingHours.map((item, index) => (
              <tr
                key={item.day}
                style={{
                  borderBottom:
                    colorScheme === "dark"
                      ? `1px solid ${theme.colors.dark[4]}`
                      : `1px solid ${theme.colors.gray[2]}`,
                  backgroundColor:
                    colorScheme === "dark"
                      ? index % 2 === 0
                        ? theme.colors.dark[7]
                        : theme.colors.dark[6]
                      : index % 2 === 0
                      ? theme.white
                      : theme.colors.gray[0],
                }}
              >
                <td style={{ padding: "0.75rem 1rem" }}>{item.day}</td>
                <td style={{ fontWeight: 600 }}>{item.hours}</td>
                <td style={{ fontWeight: 600 }}>
                  {item.afternoon && <Text>{item.afternoon}</Text>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>

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
