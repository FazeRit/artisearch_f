
import { FC } from 'react';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import ArticleFooter from './cardFooter';

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
        <Card
            sx={{
                width: '90%',
                height: '100%',
                bgcolor: 'background.paper',
                boxShadow: 3,
                m: 1,
                display: 'flex',
                flexDirection: 'row',
                gap: 0,
            }}
        >
            <Link
                sx={{
                    textDecoration: 'none',
                    color: 'text.primary',
                    width: 100,
                    height: 100,
                    display: 'flex',
                    m: 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                href={canonicalUrl}
                underline="none"
            >
                <CardMedia
                    title="Article Image"
                    image={socialImage}
                    sx={{
                        objectFit: 'contain',
                        width: 100,
                        height: 100,
                        borderRadius: 1,
                    }}
                />
            </Link>
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    width: 500,
                    height: 140,
                    p: 2,
                    gap: 0,
                }}
            >
                <Typography
                    variant="body1"
                    sx={{
                        color: 'text.primary',
                        fontWeight: 'bold',
                        lineHeight: 1.2,
                        height: 30,
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
                        height: 80,
                    }}
                >
                {description}
                </Typography>
                <ArticleFooter
                    id={id}
                    readingTimeMinutes={readingTimeMinutes}
                    positiveReactionsCount={positiveReactionsCount}
                    createdAt={createdAt}
                />
            </CardContent>
        </Card>
    );
};

export default ArticleCard;
