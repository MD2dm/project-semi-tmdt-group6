import { useEffect, useRef, useState } from "react";
import InputSearch from "../data/input-search";
import { FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import UserList from "../../configs/data/user/user-list";


const GroupInputHome = () => {
    const [on, setOn] = useState(false);
    const userRef = useRef(null);

    const handleOn = () => {
        setOn(!on);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (userRef.current && !userRef.current.contains(event.target)) {
                setOn(false)
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className='flex gap-x-5'>
            <div className='flex'>
                <div className='relative'>
                    <InputSearch></InputSearch>
                </div>
            </div>
            <div className='centerAll gap-x-5 setIcon'>
                <FiHeart></FiHeart>
                <NavLink to="/cart" className={({ isActive }) =>
                    isActive
                        ? "p-[6px] rounded-full text-white bg-red-600 transition-all"
                        : ""
                }>
                    <FiShoppingCart></FiShoppingCart>
                </NavLink>
                <div className='relative' ref={userRef}>
                    <FiUser onClick={handleOn}></FiUser>
                    <div className='bg-gradient-to-br from-gray-900 via-gray-900 to-gray-700 text-white w-[213px] absolute right-0 top-10 z-10'>
                        {on && <UserList></UserList>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupInputHome;