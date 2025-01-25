import { ChangeEvent } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../../store/filters/filtersSlicer";
import { RootState } from '../../store/store';

const SearchBar= () => {
  const dispatch = useDispatch();

  const query = useSelector((state: RootState) => state.filters.q);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuery(event.target.value));
  }

  return (
    <TextField
      sx={{
        width: "100%",
        mb: 3,
      }}
      placeholder="Search..."
      value={query}
      onChange={handleSearch}
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
  );
};

export default SearchBar;
