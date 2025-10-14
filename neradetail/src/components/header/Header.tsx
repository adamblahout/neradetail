"use client";

import { useMantineColorScheme, Flex } from "@mantine/core";

import DesktopHeader from "./DesktopHeader";
import Logo from "./Logo";
import MobileHeader from "./MobileHeader";

export interface HeaderProps {
  colorScheme: string;
  toggleColorScheme: () => void;
}

export function Header() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <header
      style={{
        backgroundColor: colorScheme === "dark" ? "#1a1a1a" : "#222",
        color: "white",
        boxShadow: "0 1px 3px rgba(0,0,0,0.25)",
        transition: "background-color 200ms ease",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <Flex
        align="center"
        justify="space-between"
        style={{ height: "100px" }}
        px={{ base: "1rem", sm: "2rem" }}
      >
        {/* Logo */}
        <Logo />

        {/* Desktop navigation */}
        <DesktopHeader
          colorScheme={colorScheme}
          toggleColorScheme={toggleColorScheme}
        />

        <MobileHeader
          colorScheme={colorScheme}
          toggleColorScheme={toggleColorScheme}
        />
      </Flex>

      {/* Mobile Drawer */}
    </header>
  );
}
