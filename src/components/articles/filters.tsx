import Box from "@mui/material/Box";
import Sliders from "./filterSliders";
import SearchBar from "./searchBar";
import TagFilter from "./tagsFilter";

const Filters = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: "background.paper",
        p: 3,
        width: "24%",
        borderRadius: 2,
        boxShadow: 2,
      }}
    >
      <SearchBar />
      <Sliders />
      <TagFilter />
    </Box>
  );
};

export default Filters;
