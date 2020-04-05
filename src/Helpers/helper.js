export const clean = str => {
    if(str.includes('&amp;')) {
        return str.replace(/&amp;/gi, `&`);
    } else if (str.includes('&#39;')) {
        return str.replace(/&#39;/gi, `'`)
    } else if (str.includes('&quot;')) {
        return str.replace(/&quot;/g, '\\"');
    } 
    return str;
}
