import { Box, Container, Flex, Heading, Button } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import type { ReactNode } from "react";
import { LuLayoutDashboard } from "react-icons/lu";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isOnList = location.pathname === "/";

  return (
    <Box minH="100vh">
      <Box as="nav">
        <Container maxW="5xl" py="8">
          <Flex justify="space-between" align="center">
            <Heading
              size="lg"
              lineHeight="3"
              cursor="pointer"
              onClick={() => navigate("/")}
              display="flex"
              alignItems="center"
              gap="2"
            >
              Event Dashboard <LuLayoutDashboard />
            </Heading>

            {isOnList && (
              <Button onClick={() => navigate("/events/new")} variant="surface">
                New Event
              </Button>
            )}
          </Flex>
        </Container>
      </Box>

      <Container maxW="5xl" py="8">
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
