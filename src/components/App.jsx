// App.jsx
import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import DoseCalculator from "./DoseCalculator";
import Footer from "./Footer";
import VolumeCalculator from "./VolumeCalculator";

function App() {
	const [weight, setWeight] = useState("");
	const [age, setAge] = useState("");
	const [selectedDiagnosis, setSelectedDiagnosis] = useState(
		"moderateMalaria&UrtiChild"
	);
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
			{/* NavBar */}
			<Navbar
				scrollToHero={scrollToHero}
				scrollToDose={scrollToDose}
				scrollToVolume={scrollToVolume}
			/>
			{/* Hero Section */}
			<div ref={heroRef}>
				<HeroSection scrollToDose={scrollToDose} />
			</div>
			{/* Dose Calculator Section */}
			<div ref={doseRef}>
				<DoseCalculator
					weight={weight}
					setWeight={setWeight}
					age={age}
					setAge={setAge}
					selectedDiagnosis={selectedDiagnosis}
					setSelectedDiagnosis={setSelectedDiagnosis}
					showPrescription={showPrescription}
					setShowPrescription={setShowPrescription}
					handleCalculate={handleCalculate}
					handleKeyPress={handleKeyPress}
					handleAgeChange={handleAgeChange}
					handleDiagnosisChange={handleDiagnosisChange}
				/>
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
