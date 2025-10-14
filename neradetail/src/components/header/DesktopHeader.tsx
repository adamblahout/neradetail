import { ActionIcon, Group, rem } from "@mantine/core";
import { navLinks } from "./navLinks.template";
import { Link, useLocation } from "react-router-dom";
import { IconMoon, IconSun } from "@tabler/icons-react";
import type { HeaderProps } from "./Header";

const DesktopHeader = ({ colorScheme, toggleColorScheme }: HeaderProps) => {
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;
  return (
    <>
      <Group visibleFrom="sm">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            style={{
              color: isActive(link.href)
                ? "var(--mantine-color-cyan-6)"
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

        <ActionIcon
          variant="subtle"
          size="xl"
          onClick={toggleColorScheme}
          aria-label="Toggle color scheme"
          style={{ color: "white" }}
        >
          {colorScheme === "dark" ? (
            <IconSun style={{ width: rem(26), height: rem(26) }} />
          ) : (
            <IconMoon style={{ width: rem(26), height: rem(26) }} />
          )}
        </ActionIcon>
      </Group>
    </>
  );
};

export default DesktopHeader;
