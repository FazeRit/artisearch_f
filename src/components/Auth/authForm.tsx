import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { useState } from 'react';
import SignIn from './signin';
import SignUp from './signup';

const AuthForm = () => {
    const [value, setValue] = useState<number>(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor='secondary'
                indicatorColor="secondary"
                aria-label="auth tabs"
            >
                <Tab label="Sign Up" />
                <Tab label="Sign In" />
            </Tabs>

            {value === 0 && <SignUp />}
            {value === 1 && <SignIn />}
        </>
    );
};

export default AuthForm;
