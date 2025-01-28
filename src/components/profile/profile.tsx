import React from "react";
import Box from "@mui/material/Box";
import FavoritesList from "./favorites";
import AuthForm from "../auth/authForm";
import useAuth from "../../hooks/useAuth";
import Loading from "../../ui/loading";

const Profile = () => {
  const { user, isPending, isError } = useAuth();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: "background.paper",
        width: "30%",
        borderRadius: 2,
        boxShadow: 2,
        padding: 1,
      }}
    >
      {isPending && !isError && <Loading />}
      {isError && <AuthForm />}
      {!isError && !isPending && user && (
        <FavoritesList
          data={user.favorites.map((fav: any) => ({
            id: fav.article.id,
            socialImage: fav.article.socialImage || "",
            title: fav.article.title,
            description: fav.article.description,
            canonicalUrl: fav.article.canonicalUrl,
          }))}
        />
      )}
    </Box>
  );
};

export default Profile;
