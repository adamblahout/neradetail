"use client";

import {
  Container,
  Title,
  Text,
  Button,
  SimpleGrid,
  Card,
  ThemeIcon,
  Stack,
  Group,
} from "@mantine/core";
import {
  IconDroplet,
  IconBrush,
  IconVacuumCleaner,
  IconShieldHalf,
  IconSun,
  IconTools,
  IconChevronDown,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./chevron.css";

const HomePage = () => {
  const services = [
    {
      icon: IconDroplet,
      title: "Ruční mytí vozidel",
      desc: "Šetrné a precizní mytí karoserie i kol.",
    },
    {
      icon: IconVacuumCleaner,
      title: "Čištění interiéru",
      desc: "Tepování sedaček, ošetření kůže a detailní úklid.",
    },
    {
      icon: IconBrush,
      title: "Korekce a leštění laku",
      desc: "Obnova lesku, odstranění škrábanců a oxidace.",
    },
    {
      icon: IconShieldHalf,
      title: "Keramická ochrana",
      desc: "Dlouhodobá ochrana karoserie proti nečistotám.",
    },
    {
      icon: IconSun,
      title: "Aplikace vosku",
      desc: "Hloubková ochrana a vysoký lesk laku.",
    },
    {
      icon: IconTools,
      title: "Renovace světlometů",
      desc: "Zlepšení viditelnosti a vzhledu vozidla.",
    },
  ];
  const [animateChevron, setAnimateChevron] = useState(true);

  useEffect(() => {
    const handleScroll = () => setAnimateChevron(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChevronClick = () => {
    setAnimateChevron(false);
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <>
      <div
        style={{
          position: "relative",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            borderRadius: "1rem",
            maxWidth: "900px",
            margin: "1rem",
            padding: "2rem 1rem",
            minWidth: "300px",
          }}
        >
          <Title order={1} fz="3.5rem" fw={900} mb="1rem">
            Profesionální ruční mytí a detailing vozidel
          </Title>
          <Text fz="lg" mb="2rem">
            Vaše auto si zaslouží tu nejlepší péči – od ručního mytí po
            keramickou ochranu.
          </Text>
          <Group justify="center">
            <Button
              size="lg"
              radius="xl"
              color="var(--mantine-color-cyan-6)"
              component={Link}
              to="/pricing"
            >
              Zobrazit ceník
            </Button>
            <Button
              size="lg"
              radius="xl"
              variant="white"
              color="dark"
              component={Link}
              to="/contact"
            >
              Kontaktujte nás
            </Button>
          </Group>
        </div>
      </div>
      <div
        onClick={handleChevronClick}
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          cursor: "pointer",
          animation: animateChevron ? "bounce 1s infinite" : "none",
        }}
      >
        <IconChevronDown size={48} stroke={2} />
      </div>

      <Container size="lg" py="5rem">
        <Stack align="center" mb="3rem">
          <Title order={2} fz="2.5rem" fw={800} ta="center">
            Péče o vaše vozidlo od A do Z
          </Title>
          <Text c="dimmed" ta="center" maw={700}>
            Provádíme kompletní ruční mytí a detailing vozidel – osobních aut,
            dodávek i karavanů. Specializujeme se na čištění interiéru, leštění,
            voskování a aplikaci keramických ochran.
          </Text>
        </Stack>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="2rem">
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
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 25px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              <Stack align="center" gap="sm">
                <ThemeIcon variant="light" size={60} radius="xl" color="blue">
                  <service.icon size={32} />
                </ThemeIcon>
                <Title order={3}>{service.title}</Title>
                <Text c="dimmed" ta="center" fz="sm">
                  {service.desc}
                </Text>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
};
export default HomePage;
