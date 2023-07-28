import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';

import { Slide, toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import { MdTipsAndUpdates } from 'react-icons/md';

// import Toast from './toast.js';

const ToastProvider = (props) => {
    const { toast_notification } = useSelector((state) => state.GlobalReducer);
    const [notifications_stack, setNotificationsStack] = useState([]);

    let limit = 1;
    if (window.innerWidth < 750) {
        limit = 1
    }

    useEffect(() => {
        if (toast_notification) {
            let notTemp = [...notifications_stack];

            // clear notifications if new toast in queue
            if (notifications_stack.length > 0) {
                notifications_stack.forEach((n) => {
                    toast.dismiss(n.id);
                });
            }

            toast.clearWaitingQueue();

            // if limit is reached, pop the first toast
            // if (notifications_stack.length == limit) {
            //     toast.dismiss(notifications_stack[0].id);
            //     notTemp.shift();
            // }

            notTemp.push(toast_notification);
            setNotificationsStack(notTemp);

            let toast_position = toast.POSITION.TOP_RIGHT;
            if (window.innerWidth < 767) {
                toast_position = toast.POSITION.TOP_CENTER;
            }

            switch (toast_notification.type) {
                case 'success':
                    toast.success(toast_notification.message, {
                        // toastId: toast_notification.id,
                        icon: ({ theme, type }) => <MdTipsAndUpdates />,
                        position: toast_position,
                        onClose: () => removeToast(toast_notification.id),
                        transition: Slide
                    });

                    break;

                case 'error':
                    toast.error(toast_notification.message, {
                        toastId: toast_notification.id,
                        position: toast_position,
                        onClose: () => removeToast(toast_notification.id),
                        transition: Slide
                    });
                    break;

                case 'warning':
                    toast.warning(toast_notification.message, {
                        toastId: toast_notification.id,
                        position: toast_position,
                        onClose: () => removeToast(toast_notification.id),
                        transition: Slide
                    });
                    break;
            }
        }
    }, [toast_notification]);

    const removeToast = (id) => {
        let notTemp = [...notifications_stack];
        notTemp = _.remove(notTemp, (n) => {
            return n.id == id;
        });

        setNotificationsStack(notTemp);
    }

    return <ToastContainer hideProgressBar autoClose={7500} limit={limit} />
}

export default ToastProvider;