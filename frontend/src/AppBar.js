import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Collapse from '@mui/material/Collapse';
import Alert from '@mui/material/Alert';
import NestedList from './List'
import './AppBar.css'

export default function ButtonAppBar() {

    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className='AppBar'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button 
            color="inherit"
            onClick={handleClick}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
      {/* <Alert onClose={() => {}}>This is a success alert — check it out!</Alert> */}
      <Collapse in={!open} timeout="auto" unmountOnExit>
        <NestedList />
      </Collapse>
    </Box>
  );
}
