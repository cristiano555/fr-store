import { SET_LANGUAGE, LangAction } from "../types";

export const setLanguage = (lang: string): LangAction => { 
    localStorage.setItem('language', lang)
    return {
        type: SET_LANGUAGE,
        payload: lang
    }
}