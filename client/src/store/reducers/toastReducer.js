import _ from 'lodash';

let initialState = {
    toasts: []
};

const ToastReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TOAST':
            let toasts = state.toasts;
            toasts.push(action.payload);

            state = {
                ...state,
                toasts
            };

            return state;
        case 'REMOVE_TOAST':
            let temp = state.toasts.filter((toast) => toast.id !== action.payload);
            state = {
                ...state,
                toasts: temp
            };

            return state;
        default:
            state = { ...state };
            break;
    }
    return state;
};

export default ToastReducer;
