// App.jsx
import React, { useState, useEffect } from "react";
import Prescription from "./Prescription";
import diagnosesData from "../diagnoses.json";
import Select from "react-select";
import Footer from "./Footer";

function App() {
	const [weight, setWeight] = useState("");
	const [age, setAge] = useState("");
	const [selectedDiagnosis, setSelectedDiagnosis] = useState("malariaChild"); // Renamed to avoid conflict
	const [showPrescription, setShowPrescription] = useState(false);

	const calculateWeightFromAge = (age) => {
		return 2 * age + 8;
	};

	const handleCalculate = () => {
		const calculatedWeight = weight
			? parseFloat(weight)
			: age
			? calculateWeightFromAge(parseFloat(age))
			: 0;

		if (!isNaN(calculatedWeight) && calculatedWeight > 0) {
			setShowPrescription(true);
		} else {
			setShowPrescription(false);
		}
	};

	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			handleCalculate();
		}
	};

	const handleAgeChange = (e) => {
		const newAge = parseFloat(e.target.value);

		if (!isNaN(newAge)) {
			setAge(newAge);
			setWeight("");
			handleCalculate();
		} else {
			setAge("");
			setShowPrescription(false);
		}
	};

	const handleDiagnosisChange = (selectedOption) => {
		setSelectedDiagnosis(selectedOption.value);
		setShowPrescription(false);
	};

	useEffect(() => {
		handleCalculate();
	}, [weight, age, selectedDiagnosis]);

	return (
		<>
			<div className="container mx-auto text-start min-h-screen text-blue-700 bg-slate-50 bg-cover p-4">
				<h1 className="text-4xl font-bold m-4">Dose Calculator</h1>

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
			<Footer />
		</>
	);
}

export default App;
