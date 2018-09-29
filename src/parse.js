import findTokens from './findTokens';

const parse = (value, format='DD.MM.YYYY') => {
    if(!value || typeof value !== 'string') return null;
    if(!format || typeof format !== 'string') throw new Error('Format must be set');
    const values = {
        year: 1970, 
        month: 0, 
        day: 1, 
        hours: 0, 
        minutes: 0, 
        seconds: 0, 
        milliseconds: 0
    };
    const usedTokens = findTokens(format);
    // no token used
    if(!(Array.isArray(usedTokens) && usedTokens.length)) return null;
    // create regexp for replacement 
    const extractionPattern = usedTokens.reduce(
        (regexp, token) => regexp.replace(token.token, `(${token.pattern})`)
        , format
    );    
    const extractionRegexp = new RegExp('^'+extractionPattern+'$');
    // value doesn't match format
    if(!value.match(extractionRegexp)) return null;
    // extract values from a given string
    const dateComponents = extractionRegexp.exec(value);
    // fill date component values from a given string value
    usedTokens.forEach(
        (token, tokenIndex) => {
            const value=dateComponents[tokenIndex+1]/1;
            values[token.componentName]=token.componentName==='month'?value-1 : value;
        }
    );
    return new Date(Date.UTC(values.year, values.month, values.day, values.hours, values.minutes, values.seconds, values.milliseconds));
};
export default parse;