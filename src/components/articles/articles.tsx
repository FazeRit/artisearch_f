
import { FC } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useArticle } from "../../hooks/useArticles";
import Card from "../../ui/card";
import Loading from "../../ui/loading";
import CustomError from "../../ui/error";

const ArticlesList: FC = () => {
  const { articles, isError, isPending, isSuccess } = useArticle();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: "background.paper",
        width: "50%",
        borderRadius: 2,
        boxShadow: 2,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          m: 1,
          fontWeight: "bold",
        }}
      >
        Articles
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          gap: 0,
        }}
      >
        {isPending && <Loading />}
        {isError && (
          <CustomError
            message="Failed to fetch articles"
            statusCode={500}
            error="Internal Server Error"
            name="Error"
          />
        )}
        {isSuccess && (articles || []).map((article) => (
          <Card
            key={article.id}
            id={article.id}
            socialImage={article.socialImage}
            title={article.title}
            description={article.description}
            createdAt={article.createdAt}
            positiveReactionsCount={article.positiveReactionsCount}
            readingTimeMinutes={article.readingTimeMinutes}
            canonicalUrl={article.canonicalUrl}
            />
        ))}
      </Box>
    </Box>
  );
};

export default ArticlesList;
