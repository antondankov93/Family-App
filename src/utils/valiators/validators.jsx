import React from 'react'

export const requiredField = (value) => {
    if(value) return undefined;
    return 'Field is required';
}

export const maxLengthCreator = (maxLength) => (value) => {
    if(value.length > maxLength) return `max Length is ${maxLength} symbols`;
    return undefined;
}
