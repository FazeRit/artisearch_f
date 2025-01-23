import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

interface FavoriteProps {
    id: number;
    socialImage: string;
    title: string;
    description: string;
}

const Favorite: FC<FavoriteProps> = ({
    id,
    socialImage,
    title,
    description,
}) => {
    return (
        <Card
                sx={{
                    width: '90%',
                    height: 60,
                    bgcolor: 'background.paper',
                    boxShadow: 3,
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 0,
                }}
            >
                <CardMedia
                    title={'Article Image'}
                    image={socialImage}
                    sx={{
                        width: 40,
                        height: 40,
                        m: 1,
                        borderRadius: 1,
                    }}
                />
                <CardContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        width: '86%',
                        m: 0,
                        p: 1,
                    }}
                >
                    <Typography
                        variant="body2"
                        sx={{
                            color: 'text.primary',
                            fontWeight: 'bold',
                            lineHeight: 1.2,
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