import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FavoritesList from './favorites';
import AuthForm from './Auth/authForm';

const Profile = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        bgcolor: 'background.paper',
        width: '30%',
        borderRadius: 2,
        boxShadow: 2,
      }}
    >
      <AuthForm />
      {/* <Typography
        variant="h4"
        sx={{
            m: 1
        }}
        >
        Profile
      </Typography>
      <Typography
        variant="h6"
        sx={{
            color: 'text.secondary',
        }}
    >
        User data
    </Typography>
    <FavoritesList /> */}
    </Box>
  );
};

export default Profile;
