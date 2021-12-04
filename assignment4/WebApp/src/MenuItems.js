import { FaTools, FaSignInAlt, FaUser } from "react-icons/fa";

export const MenuItems = [
    {
        icon: <FaTools/>,
        title: 'Tools',
        url: '/App',
        cName: 'nav-links'
    },
    {
        icon: <FaUser/>,
        title: 'Profile',
        url: '/User',
        cName: 'nav-links'
    },
    {   
        icon: <FaSignInAlt/>,
        title: 'Login/Signup',
        url: '/',
        cName: 'nav-links'
    }
]