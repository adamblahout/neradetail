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
} from "@mantine/core";
import { IconUser, IconMapPin, IconMail, IconPhone } from "@tabler/icons-react";

function Contact() {
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  const openingHours = [
    { day: "Monday", hours: "09:00 - 18:00" },
    { day: "Tuesday", hours: "09:00 - 18:00" },
    { day: "Wednesday", hours: "09:00 - 18:00" },
    { day: "Thursday", hours: "09:00 - 18:00" },
    { day: "Friday", hours: "09:00 - 17:00" },
    { day: "Saturday", hours: "Closed" },
    { day: "Sunday", hours: "Closed" },
  ];

  return (
    <Container size="lg" pt="xl">
      <Stack align="left" mb="3rem">
        <Title order={1} fz="3rem" fw={800}>
          Kontakt
        </Title>
        <Text c="dimmed" fz={"lg"} maw={600}>
          Máte dotaz nebo si chcete domluvit termín? Neváhejte mě kontaktovat
          telefonicky nebo e-mailem. Sídlím v Neratovicích a rád vám pomohu s
          péčí o vaše vozidlo.
        </Text>
      </Stack>

      <Card shadow="md" radius="lg" p="xl" withBorder mb="3rem">
        <Stack gap="md">
          <Group align="center">
            <ThemeIcon variant="light" size={40} radius="xl">
              <IconUser size={22} />
            </ThemeIcon>
            <Text fw={600}>Martin Bonaventura</Text>
          </Group>

          <Group align="center">
            <ThemeIcon variant="light" size={40} radius="xl">
              <IconMapPin size={22} />
            </ThemeIcon>
            <Text fw={500}>Neratovice, Ostrovní 154</Text>
          </Group>

          <Group align="center">
            <ThemeIcon variant="light" size={40} radius="xl">
              <IconMail size={22} />
            </ThemeIcon>
            <Anchor
              href="mailto:bonaventura.martin@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              bonaventura.martin@gmail.com
            </Anchor>
          </Group>

          <Group align="center">
            <ThemeIcon variant="light" size={40} radius="xl">
              <IconPhone size={22} />
            </ThemeIcon>
            <Anchor href="tel:+420603162356">+420 603 162 356</Anchor>
          </Group>
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
              <th style={{ textAlign: "left", padding: "0.75rem 1rem" }}>
                Hodiny
              </th>
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
                <td style={{ padding: "0.75rem 1rem", fontWeight: 600 }}>
                  {item.hours}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>

      <Divider label="Kde mě najdete" labelPosition="center" my="xl" />

      <div
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
