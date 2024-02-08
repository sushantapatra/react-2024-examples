import HomeWorkIcon from '@mui/icons-material/HomeWork';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material';
import React, { useState } from 'react';
const StyledToolbar = styled(Toolbar)({
  display:'flex',
  justifyContent:'space-between'
})
const Search = styled('div')(({theme}) =>({
	backgroundColor:'white',
	padding:'0 10px',
	borderRadius:theme.shape.borderRadius,
	width:'50%',
}))
const Icons = styled(Box)(({theme}) =>({
	display:'none',
	gap:'20px',
	alignItems:'center',
	[theme.breakpoints.up('sm')]:{
		display:'flex'
	}
}))
const UserBox = styled(Box)(({theme}) =>({
	display:'flex',
	gap:'10px',
	alignItems:'center',
	[theme.breakpoints.up('sm')]:{
		display:'none'
	}
}))
const Navbarmenu = () => {
	const [open, setOpen] = useState(false)
	return (
		<AppBar position='sticky'>
			<StyledToolbar>
				<HomeWorkIcon sx={{ display:{xs:'block', sm:'none'}}}/>
				<Typography variant='h6' sx={{ display:{xs:'none', sm:'block'}}}>MUI</Typography>
				<Search><InputBase placeholder='search...'/></Search>
				<Icons >
					<Badge badgeContent={4} color="error">
						<MailIcon color="action" />
					</Badge>
					<Badge badgeContent={2} color="error">
						<NotificationsIcon color="action" />
					</Badge>
					<Avatar sx={{width:30, height:30}} alt="Remy Sharp"  src="https://mui.com/static/images/avatar/3-sm.jpeg" onClick={(e)=>setOpen(true)}/>
				</Icons>
				<UserBox onClick={(e)	=>setOpen(true)}>
					<Avatar sx={{width:30, height:30}} alt="Remy Sharp"  src="https://mui.com/static/images/avatar/3-sm.jpeg"  />
					<Typography variant='span'>Jon Doe</Typography>
				</UserBox>
			</StyledToolbar>
			<Menu
				id="demo-positioned-menu"
				aria-labelledby="demo-positioned-button"
				open={open}
				onClose={(e)=>setOpen(false)}
				anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
				}}
				transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
				}}
			>
			<MenuItem >Profile</MenuItem>
			<MenuItem >My account</MenuItem>
			<MenuItem >Logout</MenuItem>
		</Menu>
			
		</AppBar>
	)
}

export default Navbarmenu
