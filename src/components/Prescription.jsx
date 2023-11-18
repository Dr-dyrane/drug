import React, { useState } from "react";
import { BsCheck, BsCopy } from "react-icons/bs";
import diagnosesData from "../diagnoses.json";

const Prescription = ({ diagnosis, weight, age }) => {
	const [isCopied, setIsCopied] = useState(false);

	const calculateWeight = () => {
		if (weight) {
			return weight;
		} else if (age) {
			return 2 * age + 8;
		}
		return 0;
	};

	const calculateDose = (factor, weight, maxDose) => {
		// Check if factor is an object (for ACT drug)
		if (typeof factor === "object") {
			// Determine the appropriate factor based on weight
			if (weight >= 35) {
				return factor.weight35;
			} else if (weight >= 25) {
				return factor.weight25;
			} else if (weight >= 15) {
				return factor.weight15;
			} else {
				return factor.weight5;
			}
		}

		let dose = factor * weight;
		if (dose > maxDose) {
			dose = maxDose;
		}
		return dose.toFixed(0);
	};

	const copyToClipboard = () => {
		const codeElement = document.getElementById("prescriptionCode");
		if (codeElement) {
			const prescriptionText = codeElement.textContent;
			navigator.clipboard.writeText(prescriptionText).then(() => {
				setIsCopied(true);
				setTimeout(() => setIsCopied(false), 2000);
			});
		}
	};

	const renderPrescription = () => {
		const drugs =
			diagnosesData.find((item) => item.value === diagnosis)?.drugs || [];
		return drugs.map((drug, index) => (
			<li key={index}>
				{`${drug.form} ${drug.name}: ${calculateDose(
					drug.factor,
					calculateWeight(),
					drug.max
				)} ${drug.unit} ${drug.frequency} for ${drug.duration}`}
			</li>
		));
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
						{renderPrescription()}
					</ul>
				</code>
			</pre>
		</div>
	);
};

export default Prescription;
