export const CHANGE_INFO = 'CHANGE_INFO';

export const createChangeInfoAction = (info, value) => {
    return {
        type: CHANGE_INFO,
        info,
        value,
    }
}
