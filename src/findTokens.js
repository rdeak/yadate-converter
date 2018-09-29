const tokens = {
    'year': {
        'YYYY': '[12][0-9][0-9][0-9]',
        'YY': '[0-9]{2}',
        'Y': '[0-9]{2}|[12][0-9][0-9][0-9]',
    },
    'month': {
        'MM': '0[1-9]|1[[012]',
        'M': '0?[1-9]|1[012]'
    },
    'day': {
        'DD': '[0-2][0-9]|3[01]',
        'D': '[1-9]|[0-2][0-9]|3[01]'
    },
    'hours': {
        'HH': '[0-1][0-9]|2[0-3]',
        'H': '[1-9]|[01][1-9]|2[0-3]',
    },
    'minutes': {
        'mm': '[0-5][0-9]',
        'm': '[0-9]|[0-5][0-9]',
    },
    'seconds': {
        'ss': '[0-5][0-9]',
        's': '[0-9]|[0-5][0-9]',
    },
    'milliseconds': {
        'SSS': '[0-9]{3}',
        'SS': '[0-9]{2}',
        'S': '[0-9]{1,3}',
    }
};

/**
 * Finds all tokens used in a given format
 * @param {*} format 
 */
const findTokens = (format) =>
    Object.keys(tokens)
        // find used tokens
        .map(
            componentName => {
                const usedToken = Object.keys(tokens[componentName])
                    // token with longest length first
                    .sort(
                        (a, b)=> a.length < b.length
                    )
                    // find first matching token
                    .find(
                        (token)=> new RegExp(token).test(format)
                    );
                if(usedToken){
                    return {token: usedToken, pattern: tokens[componentName][usedToken], componentName};
                } else {
                    return null;
                }
            }
        )
        // remove unmatched components
        .filter(token => token !== null)
        // sort by order of appearance in formt string
        .sort((a, b) => format.search(a.token) > format.search(b.token));

export default findTokens;