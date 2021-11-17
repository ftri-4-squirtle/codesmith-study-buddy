import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import FilterListIcon from '@mui/icons-material/FilterList';
import AccountCircle from '@mui/icons-material/AccountCircle';
import styles from './Navbar.module.css';
// import { display } from '@mui/system';

export default function Navbar() {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const isMenuOpen = Boolean(anchorEl);

	const handleProfileMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	const menuId = 'primary-search-account-menu';
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			id={menuId}
			keepMounted
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			open={isMenuOpen}
			onClose={handleMenuClose}
			className={styles.accountModal}
			sx={{ '& .MuiMenu-paper': { height: 'auto', width: '100px' } }}
		>
			<Link to='/myaccount' className={styles.links}>
				<MenuItem onClick={handleMenuClose}>My account</MenuItem>
			</Link>
			<MenuItem onClick={handleMenuClose}>Logout</MenuItem>
		</Menu>
	);

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar>
					<Link to='/home' className={styles.links}>
						<Typography variant='h6' noWrap component='div' sx={{ display: { xs: 'none', sm: 'block' } }}>
							CS Study Buddy
						</Typography>
					</Link>
					<Box sx={{ flexGrow: 1 }} />
					<Box sx={{ display: { xs: 'none', md: 'flex' }, width: '150px' }} className={styles.iconContainer}>
						<Link to='/createpost' className={styles.links}>
							<IconButton size='large' aria-label='add new post' color='inherit' sx={{ m: 2 }}>
								<Badge badgeContent={0} color='error'>
									<ControlPointIcon style={{ fontSize: 35 }} />
								</Badge>
							</IconButton>
						</Link>
						<IconButton size='large' aria-label='filter' color='inherit' sx={{ m: 2 }}>
							<Badge badgeContent={0} color='error'>
								<FilterListIcon style={{ fontSize: 35 }} />
							</Badge>
						</IconButton>
						<IconButton size='large' edge='end' aria-label='account of current user' aria-controls={menuId} aria-haspopup='true' onClick={handleProfileMenuOpen} color='inherit' sx={{ m: 2 }}>
							<AccountCircle style={{ fontSize: 35 }} />
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>
			{renderMenu}
		</Box>
	);
}
