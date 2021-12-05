import {FaTools, FaUsers, FaUserCircle} from "react-icons/fa";

export const MenuItems = [
    {
        icon: <FaTools />,
        title: 'Tools',
        url: '/App',
        cName: 'nav-links'
    },
    {
        icon: <FaUsers />,
        title: 'Profile',
        url: '/User',
        cName: 'nav-links'
    },
    {
        icon: <FaUserCircle />,
        title: 'Favourites',
        url: '/Profile',
        cName: 'nav-links'
    }
]
