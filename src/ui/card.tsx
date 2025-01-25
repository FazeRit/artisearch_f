import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import ArticleFooter from './cardFooter';
import Link from '@mui/material/Link';
interface CardProps {
    id: number;
    socialImage: string;
    title: string;
    description: string;
    createdAt: string;
    positiveReactionsCount: number;
    readingTimeMinutes: number;
    canonicalUrl: string;
}

const ArticleCard: FC<CardProps> = ({
    id,
    socialImage,
    title,
    description,
    createdAt,
    positiveReactionsCount,
    readingTimeMinutes,
    canonicalUrl,
}) => {
    return (
        <Link
            href={canonicalUrl}
            underline="none">
            <Card
                sx={{
                    width: '100%',
                    height: '78%',
                    bgcolor: 'background.paper',
                    boxShadow: 3,
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 0,
                }}
            >
                <CardMedia
                    title="Article Image"
                    image={socialImage}
                    sx={{
                        objectFit: 'contain',
                        width: 100,
                        height: 100,
                        m: 1,
                        borderRadius: 1,
                    }}
                />
                <CardContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        width: 500,
                        height: 150,
                        p: 1,
                        gap: 0,
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            color: 'text.primary',
                            fontWeight: 'bold',
                            lineHeight: 1.2,
                            height: 20,
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            mt: 1,
                            color: 'text.secondary',
                            lineHeight: 1.5,
                            height: 80
                        }}
                    >
                        {description}
                    </Typography>
                    <ArticleFooter
                        readingTimeMinutes={readingTimeMinutes}
                        positiveReactionsCount={positiveReactionsCount}
                        createdAt={createdAt}
                    />
                </CardContent>
            </Card>
        </Link>
    );
};

export default ArticleCard;
