import {FaTools, FaUser, FaHeart} from "react-icons/fa";

export const MenuItems = [
    {
        icon: <FaTools />,
        title: 'Tools',
        url: '/App',
        cName: 'nav-links'
    },
    {
        icon: <FaUser />,
        title: 'Profile',
        url: '/User',
        cName: 'nav-links'
    },
    {
        icon: <FaHeart />,
        title: 'Favourites',
        url: '/Profile',
        cName: 'nav-links'
    }
]
