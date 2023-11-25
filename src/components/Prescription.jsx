import React, { useState } from "react";
import { BsCheck, BsCopy } from "react-icons/bs";
import diagnosisData from "../diagnosis.json";

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

	const getACTFactor = (weight) => {
		if (weight >= 35) {
			return 480;
		} else if (weight >= 25) {
			return 360;
		} else if (weight >= 15) {
			return 240;
		} else {
			return 120;
		}
	};

	const getZincFactor = (weight) => {
		if (weight <= 7) {
			return 10;
		} else {
			return 20;
		}
	};

	const getORSFactor = (weight) => {
		if (weight < 10) {
			return 75;
		} else if (weight >= 10 && weight <= 28) {
			return 150;
		} else {
			return 300;
		}
	};

	const calculateDose = (factor, weight, maxDose) => {
		if (factor === "ACTFactor") {
			return getACTFactor(calculateWeight());
		} else if (factor === "ZincFactor") {
			return getZincFactor(calculateWeight());
		} else if (factor === "ORSFactor") {
			return getORSFactor(calculateWeight());
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
			diagnosisData.find((item) => item.value === diagnosis)?.drugs || [];
		return drugs.map((drug, index) => (
			<li key={index}>
				{`${drug.form} ${drug.name} ${calculateDose(
					drug.factor,
					calculateWeight(),
					drug.max
				)} ${drug.unit} ${drug.frequency ? `${drug.frequency} -` : ""} ${
					drug.duration
				}`}
			</li>
		));
	};

	return (
		<div className="m-4">
			<h2 className="text-2xl font-bold mb-4">Prescription</h2>
			<pre className="pl-2 pr-4 py-2 bg-blue-500 text-white rounded-2xl relative overflow-hidden shadow-md">
				<button
					className="flex items-center text-white mt-1 px-4 py-2 absolute top-0 right-0 text-xs sm:text-sm bg-blue-500 rounded-xl font-bold"
					onClick={copyToClipboard}
				>
					{isCopied ? (
						<BsCheck className="mr-2" />
					) : (
						<BsCopy className="mr-2" />
					)}
					{isCopied ? "Copied!" : "Copy"}
					<span className="flex h-2 w-2 right-1.5 top-1.5 absolute">
						<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-100 opacity-75"></span>
						<span className="relative inline-flex rounded-full h-2 w-2 bg-sky-100"></span>
					</span>
				</button>
				<code id="prescriptionCode">
					<ul className="list-disc pl-5 p-2 italic space-y-1 text-xs sm:text-sm overflow-x-scroll sm:overflow-x-hidden">
						{renderPrescription()}
					</ul>
				</code>
			</pre>
		</div>
	);
};

export default Prescription;
