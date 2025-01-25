
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

const Loading = () => {
    return (
        <Stack
            spacing={2}
            direction={"column"}
            alignItems={"center"}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                m: 6,
                backgroundColor: "background.paper",
                borderRadius: 2,
                boxShadow: 3,
                width: 200,
                height: 200,
            }}
        >
            <CircularProgress color="secondary" />
            <Typography variant={"h6"}>Loading...</Typography>
        </Stack>
    );
};

export default Loading;