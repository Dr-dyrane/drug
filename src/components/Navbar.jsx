// Navbar.jsx
import React from "react";

const Navbar = ({ scrollToHero, scrollToDose, scrollToVolume }) => {
	return (
		<nav className="bg-blue-700 text-white p-4 py-3.5 flex justify-between items-center sticky top-0 z-50">
			<div
				className="flex flex-row items-center justify-center text-center hover:text-blue-100"
				onClick={scrollToHero}
			>
				<div className="h-8 w-8 rounded-full bg-blue-400 animate-spin hover:animate-pulse">
					<img src="/dddc.png" alt="Your Logo" className="h-8" />
				</div>
				<span className="ml-2 font-black">Dyrane DDC</span>
			</div>
			<div className="flex space-x-4 font-bold">
				<button
					className="hover:text-blue-200 hover:border-b-2 border-blue-200"
					onClick={scrollToDose}
				>
					Dose
				</button>
				<button
					className="hover:text-blue-100 hover:border-b-2 border-blue-200"
					onClick={scrollToVolume}
				>
					Volume
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
