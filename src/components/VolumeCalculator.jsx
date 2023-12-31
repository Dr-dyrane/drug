import React, { useState, useEffect } from "react";

const VolumeCalculator = () => {
	const [weight, setWeight] = useState("");
	const [age, setAge] = useState("");
	const [dosePerKg, setDosePerKg] = useState("");
	const [dose, setDose] = useState("");
	const [drugStrength, setDrugStrength] = useState("");
	const [drugVolume, setDrugVolume] = useState("");
	const [calculatedVolume, setCalculatedVolume] = useState(null);

	// Calculate dose based on weight/age and dose per kg
	useEffect(() => {
		if ((weight || age) && dosePerKg) {
			const calculatedWeight = weight ? weight : 2 * age + 8;
			const calculatedDose = dosePerKg * calculatedWeight;
			setDose(calculatedDose.toString());
		} else {
			setDose("");
		}
	}, [weight, age, dosePerKg]);

	// Calculate volume whenever dependent inputs change
	useEffect(() => {
		const calculatedWeight = weight ? weight : 2 * age + 8;

		if (dose && drugStrength && drugVolume) {
			const calculatedDose = parseFloat(dose);
			const calculatedVolume =
				(calculatedDose / parseFloat(drugStrength)) * parseFloat(drugVolume);

			setCalculatedVolume(calculatedVolume.toFixed(1));
		} else {
			setCalculatedVolume(null);
		}
	}, [weight, age, dose, dosePerKg, drugStrength, drugVolume]);

	return (
		<div className="bg-blue-50 text-blue-700 p-4 min-h-screen">
			<h2 className="text-4xl font-bold m-4 mt-20">Volume Calculator</h2>
			<div className="flex flex-row">
				<div className="p-4 text-sm w-full">
					<label className="block font-medium">Weight</label>
					<div className="flex text-center justify-center items-center">
						<input
							type="number"
							className="p-2.5 mt-2 border border-blue-600 rounded-l-xl w-full text-blue-700"
							value={weight}
							onChange={(e) => {
								setWeight(e.target.value);
								if (e.target.value === "") {
									setAge(""); // Reset age when weight is being changed
								}
							}}
						/>
						<span className="rounded-r-xl border border-blue-600 p-2.5 mt-2 font-semibold bg-blue-600 text-slate-50">
							kg
						</span>
					</div>
				</div>
				<div className="flex flex-col justify-center items-center pt-6 font-semibold">
					<span className="text-blue-600">or</span>
				</div>
				<div className="p-4 text-sm w-full">
					<label className="block font-medium">Age</label>
					<div className="flex text-center justify-center items-center">
						<input
							type="number"
							className="p-2.5 mt-2 border border-blue-600 rounded-l-xl w-full text-blue-700"
							value={age}
							onChange={(e) => {
								setAge(e.target.value);
								if (e.target.value !== "") {
									setWeight((2 * e.target.value + 8).toString());
								}
							}}
						/>
						<span className="rounded-r-xl border border-blue-600 p-2.5 mt-2 font-semibold bg-blue-600 text-slate-50">
							years
						</span>
					</div>
				</div>
			</div>

			<div className="p-4 text-sm">
				<label className="block font-medium">Dose per kg (mg/kg)</label>
				<input
					type="number"
					className="p-2.5 mt-2 border rounded-xl w-full text-blue-700"
					value={dosePerKg}
					onChange={(e) => setDosePerKg(e.target.value)}
				/>
			</div>

			<div className="p-4 text-sm">
				<label className="block font-medium">
					Dose (mg) <span className="text-red-500">*</span>
				</label>
				<input
					type="number"
					className="p-2.5 mt-2 border rounded-xl w-full text-blue-700"
					value={dose}
					onChange={(e) => setDose(e.target.value)}
				/>
			</div>

			<div className="p-4 text-sm">
				<label className="block font-medium">
					Drug Strength (mg) <span className="text-red-500">*</span>
				</label>
				<input
					type="number"
					className="p-2.5 mt-2 border rounded-xl w-full text-blue-700"
					value={drugStrength}
					onChange={(e) => setDrugStrength(e.target.value)}
				/>
			</div>

			<div className="p-4 text-sm">
				<label className="block font-medium">
					Drug Volume (ml) <span className="text-red-500">*</span>
				</label>
				<input
					type="number"
					className="p-2.5 mt-2 border rounded-xl w-full text-blue-700"
					value={drugVolume}
					onChange={(e) => setDrugVolume(e.target.value)}
				/>
			</div>
			{/* The button is no longer needed, as volume is calculated automatically */}
			{/* <div className="m-4">
					<button
						className="text-white font-bold bg-blue-700 p-3 w-full rounded-xl"
						onClick={calculateVolume}
					>
						Calculate Volume
					</button>
				</div> */}

			{calculatedVolume !== null && (
				<div className="m-4 mt-6 text-center bg-slate-50 p-4 italic rounded-xl">
					<p className="text-lg font-bold">
						{calculatedVolume} {calculatedVolume > 1 ? "mls" : "ml"}
					</p>
				</div>
			)}
		</div>
	);
};

export default VolumeCalculator;
