import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import CustomSlider from "../ui/customSlider";


const Filters = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    const fetchTags = async () => {
      const backendTags = ["React", "JavaScript", "MUI", "Design", "Backend"];
      setTags(backendTags);
    };
    fetchTags();
  }, []);

  const handleTagClick = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

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
      <TextField
        sx={{
          width: "100%",
          mb: 3,
        }}
        placeholder="Search..."
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
      <CustomSlider 
        min={0}
        max={50}
        step={1}
        text="Max Time to Read"
      />
      <CustomSlider
        min={0}
        max={50}
        step={1}
        text="Max positive reaction count"
      />
      <Typography
        variant="h6"
        sx={{
          color: "text.primary",
          width: "100%",
          mb: 2,
        }}
      >
        Tags
      </Typography>
      <Stack
        direction="row"
        spacing={1}
        flexWrap="wrap"
        justifyContent="center"
        sx={{ gap: 1 }}
      >
        {tags.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            clickable
            onClick={() => handleTagClick(tag)}
            color={selectedTags.includes(tag) ? "primary" : "default"}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default Filters;
