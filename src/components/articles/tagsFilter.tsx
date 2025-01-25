import { useState, FC, ChangeEvent } from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import Chip from "@mui/material/Chip";
import Loading from "../../ui/loading";
import CustomError from "../../ui/error";
import useTags from "../../hooks/useTags";
import { TagDto } from "../../utils/dto";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { setSelectedTags, setPage } from "../../store/filters/filtersSlicer";

const ITEMS_PER_PAGE = 15;

const TagFilter: FC = () => {
  const dispatch = useDispatch();

  const selectedTags = useSelector((state: RootState) => state.filters.tags);
  const currentPage = useSelector((state: RootState) => state.filters.page);

  const { tags, isPending, isError } = useTags();

  const paginatedTags = tags.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleTagClick = (tag: string) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];
    dispatch(setSelectedTags(newTags));
  };

  const handlePageChange = (_: ChangeEvent<unknown>, value: number) => {
    dispatch(setPage(value));
  };

  return (
    <>
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
        sx={{
          gap: 1,
          maxHeight: "200px",
          overflowY: "auto",
        }}
      >
        {isPending && <Loading />}
        {isError && (
          <CustomError
            message="Failed to fetch tags"
            statusCode={500}
            error="Internal Server Error"
            name="Error"
          />
        )}
        {paginatedTags.map((tag: TagDto) => (
          <Chip
            key={tag.id}
            label={tag.name}
            clickable
            onClick={() => handleTagClick(tag.name)}
            color={selectedTags.includes(tag.name) ? "primary" : "default"}
          />
        ))}
      </Stack>
      <Pagination
        count={Math.ceil(tags.length / ITEMS_PER_PAGE)}
        page={currentPage}
        onChange={handlePageChange}
        sx={{ mt: 2 }}
      />
    </>
  );
};

export default TagFilter;
