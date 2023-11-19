// App.jsx
import React, { useState, useEffect, useRef } from "react";
import Prescription from "./Prescription";
import diagnosesData from "../diagnoses.json";
import Select from "react-select";
import Footer from "./Footer";
import VolumeCalculator from "./VolumeCalculator";
import { FaAngleDoubleDown } from "react-icons/fa";

function App() {
	const [weight, setWeight] = useState("");
	const [age, setAge] = useState("");
	const [selectedDiagnosis, setSelectedDiagnosis] = useState(
		"moderateMalaria&UrtiChild"
	); // Renamed to avoid conflict
	const [showPrescription, setShowPrescription] = useState(false);
	const doseRef = useRef(null);
	const volumeRef = useRef(null);
	const heroRef = useRef(null);

	const scrollToDose = () => {
		doseRef.current.scrollIntoView({ behavior: "smooth" });
	};

	const scrollToVolume = () => {
		volumeRef.current.scrollIntoView({ behavior: "smooth" });
	};

	const scrollToHero = () => {
		heroRef.current.scrollIntoView({ behavior: "smooth" });
	};

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
			if (e.target.value !== "") {
				setWeight((2 * e.target.value + 8).toString());
			}
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
			{/* Navbar */}
			<nav className="bg-blue-700 text-white p-4 flex justify-between items-center sticky top-0 z-50">
				{/* Logo */}
				<div
					className="flex flex-row items-center justify-center text-center"
					onClick={scrollToHero}
				>
					<img src="/dddc.png" alt="Your Logo" className="h-8 animate-spin" />
					<span className="ml-2 text-lg font-bold">Dyrane DDC</span>
				</div>
				{/* Navigation Links */}
				<div className="flex space-x-4 font-bold">
					<button onClick={scrollToDose}>Dose</button>
					<button onClick={scrollToVolume}>Volume</button>
				</div>
			</nav>
			{/* Hero Section */}
			<div
				className="h-screen text-center p-4 bg-blue-600 text-white flex items-center justify-start flex-col z-40"
				ref={heroRef}
			>
				<img src="/dddc.png" alt="Your Logo" className="h-50 animate-spin mt-20" />
				<h1 className="text-4xl font-bold mb-4">Welcome to Dyrane's DDC</h1>
				<p className="text-lg font-semibold">
					Your one-stop solution for accurate drug dosage calculations.
				</p>
				<FaAngleDoubleDown
					size={80}
					className="m-8 animate-bounce"
					onClick={scrollToDose}
				/>
			</div>
			{/* Dose Calculator Section */}
			<div
				className="container mx-auto text-start min-h-screen text-blue-700 bg-slate-50 bg-cover p-4 z-30"
				ref={doseRef}
			>
				<h1 className="text-4xl font-bold m-4 mt-20">Dose Calculator</h1>

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
			{/* Volume Calculator Section */}
			<div className="z-20" ref={volumeRef}>
				<VolumeCalculator />
			</div>
			{/* Footer */}
			<div className="z-10">
				<Footer />
			</div>
		</>
	);
}

export default App;
