import React from 'react';
import ListNav from '../list-nav';
import TitleLogo from '../data/logo';
import GroupInputHome from '../input-home';


const NavBar = () => {
    return (
        <div className='flex w-full justify-around mb-7 mt-16'>
            <TitleLogo></TitleLogo>
            <ListNav></ListNav>
            <GroupInputHome></GroupInputHome>
        </div>
    );
};

export default NavBar;