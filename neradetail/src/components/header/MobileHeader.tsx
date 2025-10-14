import { ActionIcon, Box, Burger, Drawer, Flex, rem } from "@mantine/core";
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
        style={{ display: "block" }}
        hiddenFrom="sm"
      />
      <Drawer
        opened={opened}
        onClose={close}
        padding={0}
        size="100%"
        withCloseButton={false}
      >
        <Box style={{ position: "relative", height: "100vh" }}>
          {/* Close button top-right */}
          <ActionIcon
            onClick={close}
            size="xl"
            variant="filled"
            style={{ position: "absolute", top: rem(20), right: rem(20) }}
          >
            <IconX size={26} />
          </ActionIcon>

          {/* Centered links */}
          <Flex
            direction="column"
            align="center"
            justify="center"
            style={{ height: "100%" }}
            gap="2rem"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={close} // Close drawer on link click
                style={{
                  color: isActive(link.href)
                    ? "var(--mantine-color-blue-4)"
                    : "white",
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: "1.25rem",
                  transition: "color 150ms ease",
                }}
              >
                {link.label}
              </Link>
            ))}
          </Flex>

          <ActionIcon
            variant="filled"
            size="xl"
            onClick={toggleColorScheme}
            style={{ position: "absolute", bottom: rem(30), right: rem(30) }}
          >
            {dark ? <IconSun size={26} /> : <IconMoon size={26} />}
          </ActionIcon>
        </Box>
      </Drawer>
    </>
  );
};

export default MobileHeader;
