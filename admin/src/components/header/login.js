import Man from "../images/man.png"
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useContext, useState } from "react";
import { Mycontext } from "../../App";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const context = useContext(Mycontext);
    const history = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        console.log('hello')
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const logout = () => {
        localStorage.clear();
        history("/signin");

    }
    return (
        <>
            <Tooltip title="user information">
                <div className="userlogin  d-flex align-items-center gap-2 p-2" onClick={handleClick}>
                    <button className="menu2 user-initials">
                        {context?.user.username.charAt(0)}
                    </button>
                    <div className="d-flex flex-column">
                        <span><h3 className="m-0">{context?.user.username}</h3></span>
                        <span className="idinfo">{context?.user.email}</span>

                    </div>
                </div>

            </Tooltip>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{
                    paper: {
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleClose}>
                    Profile
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    My account
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    Add another account
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    Settings
                </MenuItem>
                <MenuItem onClick={() => {
                    handleClose();
                    logout();
                }}>
                    Logout
                </MenuItem>
            </Menu>
        </>
    )
}

export default Login;