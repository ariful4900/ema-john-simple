import React from 'react';

import './Navigation.scss';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const navLink =[
        {title:'Shop', path:"/"},
        {title:'Order Review', path:"/order"},
        {title:'Manage Inventory Here', path:"/manage"}
    ];
    return (
        <nav>
            {
                navLink.map((menu, key)=><Link key={key} to={menu.path}>{menu.title}</Link>)
            }
        </nav>
    );
};

export default Navigation;