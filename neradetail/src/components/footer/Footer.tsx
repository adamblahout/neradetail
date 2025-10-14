import { Text, Center, Divider } from "@mantine/core";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Center component="footer">
        <Text size="sm" c="dimmed" p={"xl"}>
          © {currentYear} Adam Blahout. All rights reserved.
        </Text>
      </Center>
    </>
  );
}

export default Footer;
