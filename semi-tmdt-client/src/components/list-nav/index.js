import { useTranslation } from "react-i18next";
import { LinkList } from "../../configs/data/nav";
import { NavLink } from "react-router-dom";

const ListNav = () => {
    const { t } = useTranslation();
    return (
        <div className='flex gap-x-10 font-normal leading-6 translate-x-24'>
            {LinkList.map((item, index) => (
                <NavLink
                    to={item.to}
                    key={item.id}
                    className={({ isActive }) =>
                        isActive
                            ? "border border-b-[#534949] border-t-transparent border-r-transparent border-l-transparent pb-2 transition-all"
                            : ""
                    }>
                    {t(item.title)}
                </NavLink>
            ))}
        </div>
    );
};

export default ListNav;