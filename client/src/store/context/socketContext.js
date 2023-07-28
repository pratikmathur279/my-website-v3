import React, {
	createContext,
	useContext,
	useRef,
	useEffect,
	useState,
} from "react";

import { useSelector, useDispatch } from "react-redux";

import io from "socket.io-client";

export const SocketContext = createContext();

export const SocketProvider = ({ children, store }) => {
	let dispatch = useDispatch();

	const [isConnected, setConnected] = useState(false);

	// var host = window.location.protocol + "//" + window.location.host;
	var host = window.location.origin;
	const socketUrl =
		process.env.NODE_ENV === "production" ? host : "http://localhost:3010";
	let socket = null;

	useEffect(() => {
		if (!isConnected) {
			socket = io(socketUrl, {
				// transports: ['websocket'],
				autoConnect: true,
			});

			socket.on("connect", () => {
				console.info(
					`Successfully connected at ${socketUrl} with connection id ${socket.id}`
				);

				setConnected(true);
			});

			socket.on("disconnect", () => {
				console.info(`Successfully disconnected`);
				setConnected(false);
			});

			socket.on("error", (err) => {
				console.log("Socket Error:", err.message);
			});
		}

		return () => {
			if (socket && socket.connected) {
				socket.disconnect();
			}
		};
	}, []);

	return (
		<SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
	);
};

export const useSocket = () => useContext(SocketContext);
