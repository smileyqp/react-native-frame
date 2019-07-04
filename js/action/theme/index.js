import Types from '../types';

export function onThemeChange(theme){
    return {type:Types.THEME_CHANGE,theme:theme}
}