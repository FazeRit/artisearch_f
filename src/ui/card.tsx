import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import ArticleFooter from './cardFooter';

interface CardProps {
    id: number;
    socialImage: string;
    title: string;
    description: string;
    createdAt: string;
    positiveReactionsCount: number;
    readingTimeMinutes: number;
}

const ArticleCard: FC<CardProps> = ({
    id,
    socialImage,
    title,
    description,
    createdAt,
    positiveReactionsCount,
    readingTimeMinutes,
}) => {
    return (
        <Card
            sx={{
                width: '90%',
                height: 120,
                m: 1,
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
                    width: '80%',
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
    );
};

export default ArticleCard;
