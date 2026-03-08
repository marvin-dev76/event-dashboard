import { Box, Container } from "@chakra-ui/react";
import { LuHeart } from "react-icons/lu";

function Footer() {
  return (
    <Box>
      <Container maxWidth="5xl" display="flex" alignItems="center" justifyContent="center" paddingY="8" gap="2">
        Made with <LuHeart color="red"/> by Marbin dev.
      </Container>
    </Box>
  );
}

export default Footer;
