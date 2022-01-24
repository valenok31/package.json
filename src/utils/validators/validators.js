export const required = value => {
    if (value) return undefined;
    return "Field is required";
}
export const maxLength30 = value => {
    if (value && value.length>30) return "Max length is 30 simbol";
    return undefined;
}
export const maxLengthCreator = (maxLength) => (value) => {
    if (value && value.length>maxLength) return `Max length is ${maxLength} simbol`;
    return undefined;
}
export const minLengthCreator = (minLength) => (value) => {
    if (value && value.length<minLength) return `Min length is ${minLength} simbol`;
    return undefined;
}