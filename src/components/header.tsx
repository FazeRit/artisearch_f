import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { change } from '../state/theme/themeSlicer';

const Header = () =>{
    const theme = useSelector((state: RootState) => state.theme.value);
    const dispatch = useDispatch();

    return <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '80%',
            }}>
            <Typography
                variant='h3'
                sx={{
                    color: "text.primary"
                }}
            >
            Arti Search
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                }}
            >
              <IconButton>
                  {theme === 'light'?
                    <LightModeIcon
                        onClick={() => dispatch(change())}
                        sx={{
                            color: "text.primary" 
                        }}
                        fontSize='large'
                    />
                    :
                    <DarkModeIcon
                        onClick={() => dispatch(change())}
                        sx={{
                            color: "text.primary"
                        }}
                        fontSize='large'
                    />
                  }
              </IconButton>
            </Box>
        </Box>
        <Divider
            sx={{
                display: 'flex',
                backgroundColor: "primary.main",
                height: 2,
                mt: 1,
                width: '90%'
        }}/>
    </Box>
}

export default Header;