import {
  Button,
  Center,
  Container,
  Stack,
  Text,
  Title,
  Paper,
} from "@mantine/core";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getIsLoggedIn } from "../../redux/slices/User";
import { IconLink } from "@tabler/icons-react";

const Home = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate(isLoggedIn ? "/url/shorten" : "/login");
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        background: "linear-gradient(135deg, #d9afd9 0%, #97d9e1 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container size="xs">
        <Paper
          radius="lg"
          p="xl"
          shadow="xl"
          style={{
            backdropFilter: "blur(20px)",
            background: "rgba(255, 255, 255, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            textAlign: "center",
          }}
        >
          <Stack align="center" spacing="md">
            <IconLink size={48} color="#ffffff" />
            <Title
              order={1}
              style={{
                color: "white",
                fontWeight: 700,
                fontSize: "2.5rem",
              }}
            >
              URL Shortener
            </Title>

            <Text size="md" style={{ color: "#f1f1f1" }}>
              Simplify your links with one click.
            </Text>

            <Button
              size="md"
              radius="xl"
              variant="gradient"
              gradient={{ from: "grape", to: "indigo" }}
              onClick={handleGetStarted}
            >
              Get Started
            </Button>
          </Stack>
        </Paper>
      </Container>
    </div>
  );
};

export default Home;
