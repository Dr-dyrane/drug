// DrugCalculator.jsx
import React from "react";
import Prescription from "./Prescription";
import diagnosisData from "../diagnosis.json";
import Select from "react-select";
import { FcGoogle } from "react-icons/fc";

const DoseCalculator = ({
	weight,
	setWeight,
	age,
	setAge,
	selectedDiagnosis,
	setSelectedDiagnosis,
	showPrescription,
	setShowPrescription,
	handleCalculate,
	handleKeyPress,
	handleAgeChange,
	handleDiagnosisChange,
}) => {
	return (
		<div className="text-start min-h-screen text-blue-700 bg-slate-50 bg-cover p-4 z-30 relative">
			<h1 className="text-4xl font-bold p-4 mt-20">Dose Calculator</h1>
			<div className="w-full p-4">
				<label className="block text-sm font-medium text-blue-600">
					Weight (kg)
				</label>
				<input
					type="number"
					className="p-2 mt-2 border rounded-lg w-full"
					value={weight}
					onChange={(e) => setWeight(e.target.value)}
					onKeyPress={handleKeyPress}
				/>
			</div>
			<div className="w-full p-4">
				<label className="block text-sm font-medium text-blue-600">
					Age (years)
				</label>
				<input
					type="number"
					className="p-2 mt-2 border rounded-lg w-full"
					value={age}
					onChange={handleAgeChange}
					onKeyPress={handleKeyPress}
				/>
			</div>
			<div className="w-full p-4">
				<label className="block text-sm font-medium text-blue-600">
					Diagnosis
				</label>
				<Select
					className="mt-2 text-sm rounded-lg w-full"
					value={diagnosisData.find(
						(diagnosis) => diagnosis.value === selectedDiagnosis
					)}
					onChange={handleDiagnosisChange}
					options={diagnosisData}
					getOptionLabel={(diagnosis) => diagnosis.label}
					getOptionValue={(diagnosis) => diagnosis.value}
				/>
			</div>
			{showPrescription && (
				<Prescription
					diagnosis={selectedDiagnosis}
					weight={parseFloat(weight)}
					age={parseFloat(age)}
				/>
			)}

			{/* Link to Google Form */}
			<div className="absolute bottom-0 right-0 p-4 text-sm whitespace-nowrap">
				<a
					href="https://forms.gle/8bkUv14C5iaetG81A"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center text-blue-500 italic"
				>
					<span>Contribute by filling out this Google Form</span>
					<FcGoogle className="ml-2" />
				</a>
			</div>
		</div>
	);
};

export default DoseCalculator;
