import React, {
    createContext,
    useContext,
    useRef,
    useEffect,
    useState,
} from 'react'

import { useSelector, useDispatch } from 'react-redux';

import io from 'socket.io-client'

export const SocketContext = createContext()

export const SocketProvider = ({ children, store }) => {
    let dispatch = useDispatch();

    const [isConnected, setConnected] = useState(false);

    // var host = window.location.protocol + "//" + window.location.host;
    var host = window.location.origin;
    const socketUrl = process.env.NODE_ENV === 'production' ? host : 'http://localhost:9456';
    let socket = null;

    const handleOnMessage = message => {
        dispatch({ type: 'UPDATE_PARSE_LIABILITIES', payload: message });
    }

    const handleEligibilityDecision = (data) => {
        dispatch({ type: 'UPDATE_APPLICATION_DTI_DECISION', payload: data });
    }

    const handleRefinanceRatesDecision = (data) => {
        dispatch({ type: 'FETCHED_REFINANCE_RATES', payload: data });
    }

    useEffect(() => {
        if (!isConnected) {
            socket = io(socketUrl, {
                // transports: ['websocket'],
                autoConnect: true
            })

            socket.on('connect', () => {
                console.info(`Successfully connected at ${socketUrl} with connection id ${socket.id}`);
                dispatch({ type: 'UPDATE_DATA', payload: { _socket_id: socket.id } });
                setConnected(true)
            })

            socket.on('disconnect', () => {
                console.info(`Successfully disconnected`)
                setConnected(false)
            })

            socket.on('error', err => {
                console.log('Socket Error:', err.message)
            });

            socket.on('ApplicationMessage', handleOnMessage);

            socket.on('ELIGIBILITY_DECISION', handleEligibilityDecision);

            socket.on('FETCHED_RATES', handleRefinanceRatesDecision);
        }

        return () => {
            if (socket && socket.connected) {
                socket.disconnect()
            }
        }
    }, [])

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}

export const useSocket = () => useContext(SocketContext);