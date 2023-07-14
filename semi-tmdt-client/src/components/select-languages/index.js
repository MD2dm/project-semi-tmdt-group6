import VI from "../../assets/image/VN.png"
import EN from "../../assets/image/EN.png"
import i18n from "../../configs/i18n";


const LanguageDropdown = () => {
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }
    return (
        <>
            {i18n.language === 'vi' && <button onClick={() => changeLanguage('en')}>
                <img src={VI} alt="" className="style laguage" />
            </button>}
            {i18n.language === 'en' && <button onClick={() => changeLanguage('vi')}>
                <img src={EN} alt="" className="style laguage" />

            </button>}
        </>
    );
};

export default LanguageDropdown;


