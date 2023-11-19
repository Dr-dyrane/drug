// VolumeCalculator.jsx

import React, { useState } from "react";

const VolumeCalculator = () => {
	const [weight, setWeight] = useState("");
	const [dosePerKg, setDosePerKg] = useState("");
	const [dose, setDose] = useState("");
	const [drugStrength, setDrugStrength] = useState("");
	const [drugVolume, setDrugVolume] = useState("");
	const [calculatedVolume, setCalculatedVolume] = useState(null);

	const calculateWeight = () => {
		if (weight) {
			return weight;
		}
		return 0;
	};

	const calculateVolume = () => {
		const calculatedWeight = calculateWeight();

		if (dose && drugStrength && drugVolume) {
			const calculatedDose = dosePerKg
				? dosePerKg * calculatedWeight
				: parseFloat(dose);
			const calculatedVolume =
				(calculatedDose / parseFloat(drugStrength)) * parseFloat(drugVolume);

			setCalculatedVolume(calculatedVolume.toFixed(1));
		} else {
			setCalculatedVolume(null);
		}
	};

	return (
		<div className="snap-mandatory snap-y" style={{ scrollSnapType: 'mandatory' }}>
			<div className="bg-blue-100 text-blue-700 p-4 min-h-screen" style={{ scrollSnapAlign: 'start' }}>
				<h2 className="text-4xl font-bold m-4">Volume Calculator</h2>

				<div className="p-4 text-sm">
					<label className="block font-medium">
						Weight (kg) <span className="text-red-500">*</span>
					</label>
					<input
						type="number"
						className="p-2.5 mt-2 border rounded-xl w-full text-blue-700"
						value={weight}
						onChange={(e) => setWeight(e.target.value)}
					/>
				</div>

				<div className="p-4 text-sm">
					<label className="block font-medium">
						Dose per kg (mg/kg) <span className="text-red-500">*</span>
					</label>
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

				<div className="m-4">
					<button
						className="text-white font-bold bg-blue-700 p-3 w-full rounded-xl"
						onClick={calculateVolume}
					>
						Calculate Volume
					</button>
				</div>

				{calculatedVolume !== null && (
					<div className="m-4 mt-6 text-center bg-slate-50 p-4 italic rounded-xl">
						<p className="text-lg font-bold">
							{calculatedVolume} { calculatedVolume > 1 ? "mls" : "ml"}
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default VolumeCalculator;
