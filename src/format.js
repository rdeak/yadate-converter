import findTokens from './findTokens';

const format = (value, format='DD.MM.YYYY') => {
    if(!(value instanceof Date)) throw new Error(`value must be instance of Date, ${typeof Date} given`);
    const values = {
        year: value.getUTCFullYear(), 
        month: value.getUTCMonth()+1, 
        day: value.getUTCDate(), 
        hours: value.getUTCHours(), 
        minutes: value.getUTCMinutes(), 
        seconds: value.getUTCSeconds(), 
        milliseconds: value.getUTCMilliseconds()
    };
    const usedTokens = findTokens(format);
    // no token used
    if(!(Array.isArray(usedTokens) && usedTokens.length)) return null;
    // prepend output value
    const formatValue = (token, value) => {
        let formatedValue=value.toString();
        if(token === 'YY'){
            formatedValue = formatedValue.slice(-2);
        }
        else if(token.length===2 && formatedValue.length===1){
            formatedValue = `0${value}`;
        }
        return formatedValue;
    };
    // create regexp for replacement 
    const formatedDate = usedTokens.reduce(
        (formatedDate, token) => formatedDate.replace(token.token, formatValue(token.token, values[token.componentName]))
        , format
    );
    return formatedDate;
};
export default format;