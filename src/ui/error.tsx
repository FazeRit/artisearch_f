import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { CustomErrorType } from '../utils/dto/index';

const CustomError: React.FC<CustomErrorType> = ({
    error,
    statusCode,
    message
}) => {
    return (
        <Stack
            spacing={2}
            direction="column"
            alignItems="center"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                m: 6,
                backgroundColor: "background.paper",
                borderRadius: 2,
                boxShadow: 3,
                width: "50%",
                p: 3,
                textAlign: "center",
            }}
        >
            <ReportProblemIcon color="error" fontSize="large" />
            <Typography variant="h6" color="error">
                {error || "Error"}
            </Typography>
            {statusCode && (
                <Typography variant="body1" color="text.secondary">
                    Status Code: {statusCode || 500}
                </Typography>
            )}
            <Typography variant="body2" color="text.secondary">
                {message || "Something went wrong. Please try again later."}
            </Typography>
        </Stack>
    );
};

export default CustomError;
