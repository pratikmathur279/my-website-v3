import React, { useState, useEffect } from "react";

const ReactIcons = ({ icon, background, size, color }) => {
	const [iconModule, setIconModule] = useState(null);

	useEffect(() => {
		let module;
		let name = icon;
		let el = name.substr(0, 2).toLowerCase();

		switch (el) {
			case "fa":
				module = import("react-icons/fa");
				break;
			case "md":
				module = import("react-icons/md");
				break;
			case "io":
				module = import("react-icons/io");
				break;
			case "ti":
				module = import("react-icons/ti");
				break;
			case "go":
				module = import("react-icons/go");
				break;
			case "fi":
				module = import("react-icons/fi");
				break;
			case "gi":
				module = import("react-icons/gi");
				break;
			case "wi":
				module = import("react-icons/wi");
				break;
			case "di":
				module = import("react-icons/di");
				break;
			case "ai":
				module = import("react-icons/ai");
				break;
			case "bs":
				module = import("react-icons/bs");
				break;
			case "fc":
				module = import("react-icons/fc");
				break;
			case "gr":
				module = import("react-icons/gr");
				break;
			case "ri":
				module = import("react-icons/ri");
				break;
			case "bi":
				module = import("react-icons/ri");
				break;
			case "hi":
				module = import("react-icons/ri");
				break;
			case "im":
				module = import("react-icons/ri");
				break;
			case "io5":
				module = import("react-icons/ri");
				break;
			case "si":
				module = import("react-icons/ri");
				break;
			case "vsc":
				module = import("react-icons/ri");
				break;
			case "cg":
				module = import("react-icons/ri");
				break;
			case "sl":
				module = import("react-icons/sl");
				break;
		}

		module.then((icons) => {
			setIconModule(icons);
		});
	}, [icon]);

	if (iconModule) {
		const CustomTag = iconModule[icon];
		return <CustomTag id="CustomTag" size={size} color={color} />;
	}
};

export default ReactIcons;
