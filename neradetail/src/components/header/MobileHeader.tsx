import { ActionIcon, Burger, Drawer, Flex, rem } from "@mantine/core";
import { IconMoon, IconSun, IconX } from "@tabler/icons-react";
import { navLinks } from "./navLinks.template";
import { Link, useLocation } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import type { HeaderProps } from "./Header";

const MobileHeader = ({ colorScheme, toggleColorScheme }: HeaderProps) => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const dark = colorScheme === "dark";
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      <Burger
        opened={opened}
        onClick={toggle}
        size="lg"
        color="white"
        hiddenFrom="sm"
      />

      <Drawer
        opened={opened}
        onClose={close}
        padding="xl"
        size="100%"
        withCloseButton={false}
        styles={{
          body: {
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            overflow: "hidden",
          },
        }}
      >
        {/* Close button */}
        <ActionIcon
          onClick={close}
          size="xl"
          variant="subtle"
          style={{ position: "absolute", top: rem(20), right: rem(20) }}
        >
          <IconX size={26} />
        </ActionIcon>

        {/* Navigation */}
        <Flex
          direction="column"
          align="center"
          gap="xl"
          style={{ textAlign: "center" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={close}
              style={{
                color: isActive(link.href)
                  ? "var(--mantine-color-cyan-6)"
                  : dark
                    ? "white"
                    : "#1a1a1a",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "1.4rem",
              }}
            >
              {link.label}
            </Link>
          ))}
        </Flex>

        {/* Theme toggle moved up (no cyan button, subtle icon) */}
        <ActionIcon
          variant="filled"
          size="xl"
          onClick={toggleColorScheme}
          style={{
            position: "absolute",
            bottom: rem(20),
            right: rem(20),
            backgroundColor: "var(--mantine-color-cyan-6)",
            color: "white",
            boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
          }}
        >
          {dark ? <IconSun size={22} /> : <IconMoon size={22} />}
        </ActionIcon>
      </Drawer>
    </>
  );
};

export default MobileHeader;
