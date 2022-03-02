import React, { useState, useCallback, useRef, useEffect, FC } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'

import { HeaderElement, MenuLanguage, MenuMain } from './Header.styles'
import { translate } from './../../i18n'
import { RootState } from './../../redux-store/index'
import { setLanguage } from './../../redux-store/actions/LangAction'

interface HeaderProps {
    fixed?: boolean,
    transparent?: boolean
}

const Header: FC<HeaderProps> = () => {

    const { language } = useSelector((state: RootState) => state.language )
    const [showDropdown, setShowDropdown] = useState(false);
    const dispatch = useDispatch();
    const dropdownEl = useRef<HTMLUListElement>(null);

    const handleClickOutside = useCallback((e) => {
        if(showDropdown && e.target.closest('.dropdown') !== dropdownEl.current){
            setShowDropdown(false);
        }
    }, [showDropdown, setShowDropdown, dropdownEl] );

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    }, [handleClickOutside]) 


    const chooseLanguageHandler = (value: string) => {
        setShowDropdown(false);
        dispatch(setLanguage(value));
    }
    
    return (
        <HeaderElement>
            <img className='logo' src="./images/logo.jpg" alt="das"/>
            <MenuMain>
                <ul>
                    <li><NavLink to="/about">{translate('About Us', language)}</NavLink></li>
                    <li><NavLink to="/offer">{translate('Offer', language)}</NavLink></li>
                    <li><NavLink to="/contact">{translate('Contact', language)}</NavLink></li>
                    <li><NavLink to="/b2b">{translate('B2B', language)}</NavLink></li>
                </ul>
            </MenuMain>
            <MenuLanguage>
                <p className="selected" onClick={() => setShowDropdown(true)}>{language}</p>
                    {showDropdown && <ul className="dropdown" ref={dropdownEl}>
                        <li onClick={() => chooseLanguageHandler("EN")}>EN</li>
                        <li onClick={() => chooseLanguageHandler("PL")}>PL</li>
                    </ul>
                }
            </MenuLanguage>
        </HeaderElement>
    )
}

export default Header;