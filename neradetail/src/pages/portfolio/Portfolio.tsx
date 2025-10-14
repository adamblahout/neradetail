import { useState } from "react";
import {
  Container,
  Title,
  SimpleGrid,
  Image,
  Box,
  Text,
  useMantineColorScheme,
  Stack,
} from "@mantine/core";

const interiorImages = import.meta.glob(
  "../../assets/images/interior/*.{jpg,png,jpeg}",
  { eager: true, import: "default" }
) as Record<string, string>;

const exteriorImages = import.meta.glob(
  "../../assets/images/exterior/*.{jpg,png,jpeg}",
  { eager: true, import: "default" }
) as Record<string, string>;

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { colorScheme } = useMantineColorScheme();

  const openImage = (src: string) => setSelectedImage(src);
  const closeImage = () => setSelectedImage(null);

  const renderImages = (images: Record<string, string>) =>
    Object.values(images).map((src) => (
      <Image
        key={src}
        src={src}
        alt="Gallery Image"
        height={250}
        fit="cover"
        radius="md"
        style={{
          cursor: "pointer",
          transition: "transform 0.3s, box-shadow 0.3s",
        }}
        onClick={() => openImage(src)}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />
    ));

  return (
    <Container size="xl" py="xl">
      <Box mb="xl">
        <Title order={1} fz="h1" fw={800} mb="md">
          Naše Galerie
        </Title>
        <Text c="dimmed" fz="lg" mb="sm">
          Prohlédněte si naše realizace čištění interiérů a exteriérů automobilů
          a nechte se inspirovat proměnami, které dokážeme vytvořit. Každé
          vozidlo má svůj příběh — my mu pomáháme znovu zazářit. dokonalosti.
        </Text>
      </Box>

      <Stack mb="xl">
        <Title order={2} fz="h2" fw={700}>
          Interiéry
        </Title>
        <SimpleGrid cols={{ xs: 2, md: 3 }} spacing="lg">
          {renderImages(interiorImages)}
        </SimpleGrid>
      </Stack>

      <Stack>
        <Title order={2} fz="h2" fw={700}>
          Exteriéry
        </Title>
        <SimpleGrid cols={{ xs: 2, md: 3 }} spacing="lg">
          {renderImages(exteriorImages)}
        </SimpleGrid>
      </Stack>

      {selectedImage && (
        <Box
          onClick={closeImage}
          style={{
            position: "fixed",
            inset: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            cursor: "zoom-out",
            padding: "2rem",
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
        >
          <Image
            src={selectedImage}
            alt="Enlarged"
            radius="md"
            fit="contain"
            style={{
              maxHeight: "90vh",
              maxWidth: "90%",
              backgroundColor: colorScheme === "dark" ? "#1a1a1a" : "#fff",
              boxShadow: "0 15px 40px rgba(0,0,0,0.6)",
            }}
          />
        </Box>
      )}
    </Container>
  );
};

export default Portfolio;
