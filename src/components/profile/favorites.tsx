import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Favorite from "../../ui/favorite";
import { FC } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { useDeleteFav } from "../../hooks/useDeleteFav";
import Loading from "../../ui/loading";
import CustomError from "../../ui/error";
import { CustomErrorType } from "../../utils/dto";
import { FavoriteProps } from "../../utils/dto";

interface FavoritesListProps {
  data: FavoriteProps[];
}

const FavoritesList: FC<FavoritesListProps> = ({ data }) => {
  const { mutate, isError, isPending, error } = useDeleteFav();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        gap: 2,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "text.primary",
        }}
      >
        Favorite articles
      </Typography>
      {data.map((favorite) => (
        <>
          {!isPending && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 2,
              }}
            >
              <Favorite key={favorite.id} {...favorite} />
              <IconButton onClick={() => mutate(favorite.id)}>
                <DeleteIcon />
              </IconButton>
            </Box>
          )}
          {isError && error && (
            <CustomError
              message={(error as CustomErrorType).message || "Unknown error"}
              statusCode={(error as CustomErrorType).statusCode || 500}
              error={(error as CustomErrorType).error || "Unknown error"}
              name={(error as CustomErrorType).name || "Error"}
            />
          )}
          {isPending && <Loading />}
        </>
      ))}
    </Box>
  );
};

export default FavoritesList;
