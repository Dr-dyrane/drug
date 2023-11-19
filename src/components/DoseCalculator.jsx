// DrugCalculator.jsx
import React from "react";
import Prescription from "./Prescription";
import diagnosesData from "../diagnoses.json";
import Select from "react-select";

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
		<div className="text-start min-h-screen text-blue-700 bg-slate-50 bg-cover p-4 z-30">
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
					value={diagnosesData.find(
						(diagnosis) => diagnosis.value === selectedDiagnosis
					)}
					onChange={handleDiagnosisChange}
					options={diagnosesData}
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
		</div>
	);
};

export default DoseCalculator;
