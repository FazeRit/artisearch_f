import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useAddFav } from '../hooks/useAddFav';

interface ArticleFooterProps {
    id: number,
    readingTimeMinutes: number;
    positiveReactionsCount: number;
    createdAt: string;
}

const ArticleFooter: React.FC<ArticleFooterProps> = ({
    id,
    readingTimeMinutes,
    positiveReactionsCount,
    createdAt,
}) => {
    const { mutate, isSuccess } = useAddFav();

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mt: 1,
                mx: 4,
                width: 460,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                }}
            >
                <AccessTimeIcon
                    fontSize="small"
                    sx={{
                        color: 'text.secondary',
                    }}
                />
                <Typography
                    variant="body1"
                    sx={{
                        color: 'text.secondary',
                        lineHeArticleFooteright: 1,
                    }}
                >
                    {readingTimeMinutes} min
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                }}
            >
                <ThumbUpAltIcon
                    fontSize="small"
                    sx={{
                        color: 'text.secondary',
                    }}
                />
                <Typography
                    variant="body1"
                    sx={{
                        color: 'text.secondary',
                        lineHeight: 1,
                    }}
                >
                    {positiveReactionsCount}
                </Typography>
            </Box>
            <Typography
                variant="body1"
                sx={{
                    color: 'text.secondary',
                    lineHeight: 1,
                }}
            >
                {createdAt}
            </Typography>
            <FavoriteBorderIcon
                fontSize="large"
                sx={{
                    color: isSuccess ? 'primary.main' : 'text.secondary',
                    cursor: 'pointer',
                }}
                onClick={() => mutate(id)}
            />
        </Box>
    );
};

export default ArticleFooter;
