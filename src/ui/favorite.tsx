import { FC } from 'react';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { FavoriteProps } from '../utils/dto/index';

const Favorite: FC<FavoriteProps> = ({
    id,
    socialImage,
    title,
    description,
    canonicalUrl,
}) => {
    return (
        <Card
            sx={{
                width: '100%',
                bgcolor: 'background.paper',
                boxShadow: 3,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 2,
                p: 1,
            }}
        >
            <Link
                href={canonicalUrl}
                underline="none"
                sx={{
                    width: 40,
                    height: 40,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <CardMedia
                    component="img"
                    title="Article Image"
                    image={socialImage}
                    sx={{
                        width: 40,
                        height: 40,
                        borderRadius: 1,
                    }}
                />
            </Link>
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    width: 'calc(100% - 56px)',
                    p: 0,
                }}
            >
                <Typography
                    variant="body2"
                    sx={{
                        color: 'text.primary',
                        fontWeight: 'bold',
                        lineHeight: 1.2,
                        mb: 0.5,
                    }}
                >
                    {title}
                </Typography>
                <Typography
                    variant="caption"
                    sx={{
                        color: 'text.secondary',
                        lineHeight: 1.5,
                    }}
                >
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Favorite;
