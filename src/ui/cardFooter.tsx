import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

interface ArticleFooterProps {
    readingTimeMinutes: number;
    positiveReactionsCount: number;
    createdAt: string;
}

const ArticleFooter: React.FC<ArticleFooterProps> = ({
    readingTimeMinutes,
    positiveReactionsCount,
    createdAt,
}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                mb: 2,
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
            <FavoriteBorderIcon fontSize="large" />
        </Box>
    );
};

export default ArticleFooter;
