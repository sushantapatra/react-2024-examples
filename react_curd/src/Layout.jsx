
import { ThemeProvider } from '@emotion/react';
import { Box, Stack, createTheme } from '@mui/material';
import { useState } from 'react';
import { Outlet } from "react-router-dom";

import Add from './components/mui/Add';
import Navbarmenu from './components/mui/Navbarmenu';
import Sidebar from './components/mui/Sidebar';
const Layout = () => {
    const [mode, setMode] = useState("light") 
	const darkTheme = createTheme({
		palette: {
			mode:mode
		}
	})
    return (
        <>
        
            <ThemeProvider theme={darkTheme}>
                <Box bgcolor={"background.default"} color={'text.primary'}>
                    {/* Navbar */}
                    <Navbarmenu/>
                    <Stack direction={"row"} spacing={2} justifyContent={'space-evenly'}>
                        <Sidebar setMode={setMode} mode={mode} />
                        <Outlet />
                    </Stack>
                    <Add/>
                </Box>
            </ThemeProvider>
        </>
    );
};
export default Layout;
