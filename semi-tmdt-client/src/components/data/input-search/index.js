import { useTranslation } from "react-i18next";
import { FiSearch } from "react-icons/fi";

const InputSearch = () => {
    const {t} = useTranslation();
    return (
        <div className='relative'>
            <input type="text" className=' w-[243px] bg-[#F5F5F5] outline-none py-2 pr-[12px] pl-[20px] text-[12px]' placeholder={t('inputsearch')} />
            <div className='absolute top-[50%] right-2 -translate-y-[60%]'>
                <FiSearch></FiSearch>
            </div>
        </div>
    );
};

export default InputSearch;