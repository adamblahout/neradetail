import { Image } from "@mantine/core";
import logo from "../../assets/Nera_detail_logo.png";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to={"/"}>
      <Image
        src={logo}
        alt="Logo"
        width={140}
        height={80}
        fit="contain"
        maw={180}
      />
    </Link>
  );
};

export default Logo;
