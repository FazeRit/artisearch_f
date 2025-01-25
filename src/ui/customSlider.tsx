import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

interface CustomSliderProps {
  min: number;
  max: number;
  step: number;
  text: string;
  value: number;
  onChange: (event: Event, newValue: number | number[]) => void;
}

const CustomSlider = ({
  min,
  max,
  step,
  text,
  value,
  onChange
}: CustomSliderProps) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        variant="h6"
        sx={{
          color: "text.primary",
          width: "100%",
          mb: 1,
        }}
      >
        {text}
      </Typography>
      <Slider
        min={min}
        color={'secondary'}
        step={step}
        max={max}
        sx={{ width: "100%", mb: 3 }}
        value={value}
        onChange={onChange}
        valueLabelDisplay="auto"
      />
    </Box>
  );
};

export default CustomSlider;
