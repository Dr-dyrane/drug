// Prescription.jsx
import React, { useState } from "react";
import { BsCheck, BsCopy } from "react-icons/bs";

const Prescription = ({ weight, age }) => {
	const [isCopied, setIsCopied] = useState(false);
	const calculateWeight = () => {
		if (weight) {
			return weight;
		} else if (age) {
			// Placeholder logic for calculating weight from age
			return 2 * age + 8;
		}
		return 0; // Default value if neither weight nor age is available
	};

	const y = calculateWeight();

	const calculateDose = (factor, weight) => {
		const dose = factor * weight;
		return dose.toFixed(2);
	  };

	const copyToClipboard = () => {
		const codeElement = document.getElementById('prescriptionCode');
		if (codeElement) {
		  const prescriptionText = codeElement.textContent;
	  
		  navigator.clipboard.writeText(prescriptionText).then(() => {
			setIsCopied(true);
			setTimeout(() => setIsCopied(false), 2000); // Reset copied state after 2 seconds
		  });
		}
	  };

	return (
		<div className="m-4">
			<h2 className="text-2xl font-bold mb-4">Prescription</h2>
			<pre className="pl-2 pr-8 py-2 bg-blue-500 text-white rounded-lg relative overflow-hidden">
				<button
					className="flex items-center text-white m-1 px-4 py-2 absolute top-0 right-0 text-xs sm:text-sm bg-blue-500 rounded-xl"
					onClick={copyToClipboard}
				>
					{isCopied ? (
						<BsCheck className="mr-2" />
					) : (
						<BsCopy className="mr-2" />
					)}
					{isCopied ? "Copied!" : "Copy"}
				</button>
				<code id="prescriptionCode">
					<ul className="list-disc pl-5 p-2 italic space-y-1 text-xs sm:text-sm overflow-x-scroll">
						<li className="">
							IM Artemether: {calculateDose(3.2, y)} mg (od for 3/7).
						</li>
						<li className="">
							IM Paracetamol: {calculateDose(15, y)} mg stat,
							then,
						</li>
						<li className="">
							Syrup Paracetamol: {calculateDose(15, y)} mg (tds
							for 3/7).
						</li>
						<li className="">
							Syrup Cefuroxime: {calculateDose(15, y)} mg (bd
							for 5/7), if not available give:
						</li>
						<li className="">
							Syrup Amoxicillin: {calculateDose(15, y)} mg (tds
							for 5/7).
						</li>
					</ul>
				</code>
			</pre>
		</div>
	);
};

export default Prescription;
