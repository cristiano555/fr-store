import en from './en.json';
import pl from './pl.json';

export const translate = (key: string, language: string): string => {
    let langData: {[key: string]: string} = {};

    if(language === "EN"){
        langData = en;
    }else if(language === "PL"){
        langData = pl;
    }

    return langData[key];
}

export default translate