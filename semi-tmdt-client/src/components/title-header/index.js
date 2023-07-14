
import { useTranslation } from "react-i18next";
import LanguageDropdown from "../select-languages";




const TitleHead = () => {
    const { t } = useTranslation();
    return (
        <div className='w-full h-[48px] bg-black text-white relative text-[14px]'>
            <div className='absolute gap-x-2  top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]'>
                <div className='leading-[21px] font-normal cursor-default'>{t('title')}
                    <span className='font-semibold leading-6 underline ml-3 cursor-pointer'>{t('shopnow')}</span>
                </div>
            </div>
            <div className=' centerAll absolute right-14 top-[50%] -translate-y-[50%] gap-x-1 transition-all cursor-pointer' >
                <LanguageDropdown></LanguageDropdown>
            </div>
        </div>
    );
};

export default TitleHead;