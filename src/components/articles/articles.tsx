import { FC } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { useArticle } from "../../hooks/useArticles";
import { setPage } from "../../store/filters/filtersSlicer";
import Card from "../../ui/card";
import Loading from "../../ui/loading";
import CustomError from "../../ui/error";
import Pagination from '@mui/material/Pagination';
import { ArticleDto } from "../../utils/dto";
import { format } from "date-fns";

const ArticlesList: FC = () => {
  const { articles, isError, isPending, isSuccess } = useArticle();

  const currentPage = useSelector((state: RootState) => state.filters.page);
  const dispatch = useDispatch();

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
        {isSuccess && (articles.articles || []).map((article: ArticleDto) => (
          <Card
            key={article.id}
            id={article.id}
            socialImage={article.socialImage}
            title={article.title}
            description={article.description}
            createdAt={format(new Date(article.createdAt), "MMMM dd, yyyy")}
            positiveReactionsCount={article.positiveReactionsCount}
            readingTimeMinutes={article.readingTimeMinutes}
            canonicalUrl={article.canonicalUrl}
          />
        ))}
        <Pagination
          sx={{
            m: 4,
          }}
          count={Math.ceil(articles?.total / 10)}
          page={currentPage}
          onChange={(_, page) => dispatch(setPage(page))}
        />
      </Box>
    </Box>
  );
};

export default ArticlesList;
