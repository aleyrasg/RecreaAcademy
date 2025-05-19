import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import { getUser, signOut } from '../Login/utils';

export default function UserAvatar() {
    const navigate = useNavigate();
    const [user, setUser] = useState({ email: '', name: '' });
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const getGoogleUser = async () => {
        const usr = await getUser();
        setUser(usr)
        console.log(usr)
    }

    const handleProfile = () => {
        handleClose()
    };
    const handleLogout = async () => {
        handleClose()
        await signOut();
        navigate('/')

    };

    useEffect(() => {
        getGoogleUser()
    }, []);


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