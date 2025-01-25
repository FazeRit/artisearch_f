import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Header from "./components/header";
import Filters from "./components/articles/filters";
import ArticlesList from "./components/articles/articles";
import Profile from "./components/profile/profile";

function App() {
  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        m: 0,
        bgcolor: "background.default",
        p: 2,
      }}
    >
      <Header />
      <Box
        sx={{
          mx: "5%",
          display: "flex",
          flexDirection: "row",
          width: "90%",
          gap: 2,
          mt: 2,
        }}
      >
        <Filters />
        <ArticlesList />
        <Profile />
      </Box>
    </Container>
  );
}

export default App;
