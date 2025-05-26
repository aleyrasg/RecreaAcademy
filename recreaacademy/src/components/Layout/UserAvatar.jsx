import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Avatar,
  Menu,
  Button,
  MenuList,
  MenuItem,
  IconButton,
} from "@mui/material";
import { useGetUser } from '../../hooks/useGetUser';

export default function UserAvatar() {
  const { user } = useGetUser();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div justify="flex-end" mb={4}>
      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)}>
        <Button
          as={IconButton}
          icon={
            <Avatar name={user?.name || 'Usuario'} size="sm" />
          }
          variant="ghost"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <MenuList>
          {user?.email ? (
            <>
              <MenuItem as={RouterLink} to="/mi-portafolio">
                {user.email}
              </MenuItem>
              <MenuItem as={RouterLink} to="/logout">
                Logout
              </MenuItem>
            </>
          ) : (
            <MenuItem as={RouterLink} to="/login">
              Login
            </MenuItem>
          )}
        </MenuList>
      </Menu>
    </div>
  );
}