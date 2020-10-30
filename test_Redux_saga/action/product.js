export const SEARCH_PRODUCT = 'SEARCH_PRODUCT';
export const SEARCH_MONTH = 'SEARCH_MONTH';
export const SEARCH_TYPE = 'SEARCH_TYPE';

export const searchProduct = (name) => {
    return {
        type: SEARCH_PRODUCT,
        name,
    }
}
export const searchMonth = name => {
    return {
        type: SEARCH_MONTH,
        name,
    }
}
export const searchProduct = name => {
    return {
        type: SEARCH_TYPE,
        name,
    }
}
