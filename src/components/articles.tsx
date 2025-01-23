import Box from '@mui/material/Box';
import { FC } from 'react';
import Card from '../ui/card';
import Typography from '@mui/material/Typography';
const ArticlesList: FC = () => {
  const mockArticles = [
    {
      id: 1,
      socialImage: 'https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F68v3eqcbbq8bp03dz4u2.png',
      title: 'React Best Practices',
      description: 'Discover the best practices to write clean and maintainable React code.',
      createdAt: '2025-01-22',
      positiveReactionsCount: 120,
      readingTimeMinutes: 5,
    },
    {
      id: 2,
      socialImage: 'https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F68v3eqcbbq8bp03dz4u2.png',
      title: 'TypeScript Tips',
      description: 'Table of Contents     Mastering Backend Node.js Folder Structure: A Beginner’s Guide   Table...',
      createdAt: '2025-01-21',
      positiveReactionsCount: 80,
      readingTimeMinutes: 8,
    },
    {
      id: 3,
      socialImage: 'https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F68v3eqcbbq8bp03dz4u2.png',
      title: 'UI/UX Design Trends 2025',
      description: 'Explore the latest trends in UI/UX design for modern applications.',
      createdAt: '2025-01-20',
      positiveReactionsCount: 95,
      readingTimeMinutes: 6,
    },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        bgcolor: 'background.paper',
        width: '50%',
        borderRadius: 2,
        boxShadow: 2,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          m: 1,
          fontWeight: 'bold',
        }}
        >
        Articles
      </Typography>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        gap: 0,
      }}>
        {mockArticles.map((article) => (
          <Card key={article.id} {...article} />
        ))}
      </Box>
    </Box>
  );
};

export default ArticlesList;
