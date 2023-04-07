import React from 'react'
import {Box, IconButton, useTheme} from '@mui/material';
import {useContext} from 'react';
import {ColorModeContext, tokens} from '../../theme';
import {ThemeProvider } from "@mui/material/styles";
import InputBase from '@mui/material/InputBase';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';


const NavAdmin = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* searchbar */}
      <Box display="flex" backgroundColor={colors.primary[500]} borderRadius="3px">
        <InputBase sx={{ml: 2, flex: 1}} placeholder="search" />
          <IconButton type="button" sx={{ p:1 }}>
              <SearchIcon />
          </IconButton>
      </Box>
      {/* icons */}
      <Box display="flex" justifyContent="flex-end">
      <ThemeProvider theme={theme}>
        <IconButton onClick={colorMode.toggleColorMode}>
        {theme.palette.mode && theme.palette.mode === 'dark' ? (
          <DarkModeOutlinedIcon />
        ) : (
          <LightModeOutlinedIcon />
        )}

        </IconButton>
      </ThemeProvider>

      <IconButton>
      <NotificationsOutlinedIcon />
      </IconButton>

      <IconButton>
      <SettingsOutlinedIcon />
      </IconButton>

      <IconButton>
      <PersonOutlineIcon />
      </IconButton>
      </Box>
    </Box>
  )
}

export default NavAdmin