import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { listMenuUser } from '..';

const UserList = () => {
    const { t } = useTranslation();

    return (
        <>
            {listMenuUser.map((item, index) => (
                <NavLink to={item.to} key={item.index} className='flex  px-4 py-5 hover:bg-blue-400 gap-x-3'>
                    <div className='setIcon'>{item.icon}</div>
                    <div className='text-[14px]'>{t(item.name)}</div>
                </NavLink>
            ))}
        </>
    );
};
export default UserList;