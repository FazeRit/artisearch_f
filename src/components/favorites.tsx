import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Favorite from '../ui/favorite';

const FavoritesList = () => {
  const mockFavorites = [
    {
      id: 1,
      socialImage: 'https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F68v3eqcbbq8bp03dz4u2.png',
      title: 'Learn JavaScript',
      description: 'Master the basics of JavaScript with this comprehensive guide.',
    },
    {
      id: 2,
      socialImage: 'https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F68v3eqcbbq8bp03dz4u2.png',
      title: 'CSS Grid vs Flexbox',
      description: 'Table of Contents     Mastering Backend Node.js Folder Structure: A Beginner’s Guide   Table...',
    },
    {
      id: 3,
      socialImage: 'https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F68v3eqcbbq8bp03dz4u2.png',
      title: 'Responsive Design Tips',
      description: 'Make your websites look great on any device with these tips.',
    },
  ];

  return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          gap: 2,
        }}
      >
        <Typography
            variant="h6"
            sx={{
                color: 'text.secondary',
            }}
        >
            Favorite articles
        </Typography>
        {mockFavorites.map((favorite) => (
          <Favorite key={favorite.id} {...favorite} />
        ))}
      </Box>
  );
};

export default FavoritesList;
