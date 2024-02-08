import AddIcon from '@mui/icons-material/Add';
import DateRangeIcon from '@mui/icons-material/DateRange';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography, styled } from '@mui/material';
import { React, useState } from 'react';

const StyleModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center'
})
const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom:'20px'
})
const Add = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <>
          <Tooltip title="Add" sx={{position:"fixed", bottom:20, left:{xs:"calc(50% - 25px)",md:30}}}>
            <Fab color='primary' aria-label="add">
              <AddIcon onClick={handleOpen}/>
            </Fab>
          </Tooltip>
          
        <StyleModal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box width={400} height={280} bgcolor={"background.default"} color={'text.primary'} p={3} borderRadius={5}>
                <Typography id="modal-modal-title" variant="h6" component="h2" color="gray" textAlign="center">
                    Create post
                </Typography>
					<UserBox>
					<Avatar sx={{ width: 30, height: 30 }} alt="Remy Sharp" src="https://mui.com/static/images/avatar/3-sm.jpeg" />
					<Typography fontWeight={500} variant='span'>John Doe</Typography>
				</UserBox>
				<TextField
					sx={{width:'100%'}}
					id="standard-multiline-static"
					label="Multiline"
					multiline
					rows={2}
					defaultValue="Whats on your mind?"
					variant="standard"
				/>
				<Stack direction="row" gap={1} mt={2} mb={2}>
						<EmojiEmotionsIcon color='primary'/>
						<VideoCameraBackIcon color='secondary'/>
						<ImageIcon color='success'/>
						<PersonAddIcon color='error'/>
				</Stack>
				<ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
					<Button >Post</Button>
					<Button sx={{ width:'100px'}} ><DateRangeIcon color='white'/></Button>
					
				</ButtonGroup>
            </Box>
        </StyleModal>
    </>
  )
}

export default Add