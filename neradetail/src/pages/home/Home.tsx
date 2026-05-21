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
import { GiCarSeat } from "react-icons/gi";
import { TbShieldHalf } from "react-icons/tb";
import { GiFogLight } from "react-icons/gi";
import { GiDroplets } from "react-icons/gi";
import { MdAir, MdAutoFixHigh } from "react-icons/md";
import { Link } from "react-router-dom";
import backgroundUrl from "../../assets/images/black-porsche.avif";

const HomePage = () => {
  const services = [
    {
      icon: <GiCarSeat />,
      title: "Čištění interiéru",
      desc: "Tepování sedaček, ošetření kůže a detailní úklid.",
    },
    {
      icon: <MdAutoFixHigh />,
      title: "Korekce a leštění laku",
      desc: "Obnova lesku, odstranění škrábanců a oxidace.",
    },
    {
      icon: <TbShieldHalf />,
      title: "Keramická ochrana",
      desc: "Dlouhodobá ochrana karoserie proti nečistotám.",
    },
    {
      icon: <GiDroplets />,
      title: "Aplikace vosku",
      desc: "Hloubková ochrana a vysoký lesk laku.",
    },
    {
      icon: <GiFogLight />,
      title: "Renovace světlometů",
      desc: "Zlepšení viditelnosti a vzhledu vozidla.",
    },
    {
      icon: <MdAir />,
      title: "Čištění klimatizace ozónem",
      desc: "Profesionální ozónové čištění klimatizace a interiéru pro odstranění bakterií, zápachu a dezinfekci vozu.",
    },
  ];

  return (
    <>
      <div
        style={{
          position: "relative",
          backgroundImage: `url(${backgroundUrl})`,
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
            Interiérové čístění a detailing vozidel
          </Title>
          <Text fz="lg" mb="2rem">
            Vaše auto si zaslouží tu nejlepší péči
          </Text>
          <Group justify="center">
            <Button size="lg" radius="xl" component={Link} to="/contact">
              Kontaktujte nás
            </Button>
          </Group>
        </div>
      </div>

      <Container size="lg" py="lg">
        <Stack align="center" mb="3rem">
          <Title order={2} fz="2.5rem" fw={800} ta="center">
            Péče o vaše vozidlo od A do Z
          </Title>
          <Text c="dimmed" ta="center" maw={700}>
            Provádíme detailing vozidel – osobních aut, dodávek i karavanů.
            Specializujeme se na čištění interiéru, leštění, voskování a
            aplikaci keramických ochran.
          </Text>
        </Stack>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="2rem">
          {services.map((service) => (
            <Card key={service.title} shadow="md" radius="lg" p="xl" withBorder>
              <Stack align="center" gap="sm">
                <ThemeIcon variant="light" size={60} radius="xl" color="blue">
                  <div style={{ fontSize: "2rem" }}>{service.icon}</div>
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
