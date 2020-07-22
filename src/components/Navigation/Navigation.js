import React from 'react';

import './Navigation.scss';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const navLink =[
        {title:'Shop', path:"/shop"},
        {title:'Order Review', path:"/review"},
        {title:'Manage Inventory Here', path:"/inventory"}
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