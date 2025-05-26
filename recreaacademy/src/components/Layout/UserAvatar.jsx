import { useState } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import { useGetUser } from '../../hooks/useGetUser';

export default function UserAvatar() {
    const { user } = useGetUser()
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Stack direction="row" spacing={2} justifyContent='end'>
            <Avatar
                sx={{ bgcolor: deepOrange[500] }}
                alt={user?.name}
                src="/broken-image.jpg"
                onClick={handleClick}
            >
            </Avatar>

            <Menu
                id="basic-menu"
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
            >

                {user?.email ?
                    (<>
                        <MenuItem>
                            <Link to="/mi-portafolio">
                                {user?.email}
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/logout">
                                Logout
                            </Link>
                        </MenuItem>
                    </>)

                    :
                    (<>
                        <MenuItem>
                            <Link to="/login">
                                Login
                            </Link>
                        </MenuItem>
                    </>)
                }
            </Menu>
        </Stack>
    );
}