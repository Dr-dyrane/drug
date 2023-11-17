// Prescription.jsx
import React from "react";

const Prescription = ({ weight, age }) => {
	const calculateWeight = () => {
		if (weight) {
			return weight;
		} else if (age) {
			// Placeholder logic for calculating weight from age
			return 2 * age + 8;
		}
		return 0; // Default value if neither weight nor age is available
	};

	const calculateArtemetherDose = () => {
		const dose = 3.2 * calculateWeight();
		return dose; // Given daily for 3 days
	};

	const calculateParacetamolDose = () => {
		const dose = 15 * calculateWeight(); // Three times daily for 3 days
		return dose;
	};

	const calculateAmoxicillinDose = () => {
		const dose = 15 * calculateWeight(); // Three times daily for 5 days
		return dose;
	};

	const calculateCefuroximeDose = () => {
		const dose = 15 * calculateWeight(); // Three times daily for 5 days
		return dose;
	};

	return (
		<div className="m-4">
			<h2 className="text-2xl font-bold mb-4">Prescription</h2>
      <ul className="list-disc pl-5 p-2 italic space-y-1">
        <li className="">
          IM Artemether: {calculateArtemetherDose().toFixed(2)} mg ( od for 3/7 ).
        </li>
        <li className="">
          IM Paracetamol: {calculateParacetamolDose().toFixed(2)} mg stat, then,
        </li>
        <li className="">
          Syrup Paracetamol: {calculateParacetamolDose().toFixed(2)} mg ( tds for 3/7 ).
        </li>
        <li className="">
          Syrup Cefuroxime: {calculateCefuroximeDose().toFixed(2)} mg (bd for 5/7), if not available give:
        </li>
        <li className="">
          Syrup Amoxicillin: {calculateAmoxicillinDose().toFixed(2)} mg (tds for 5/7).
        </li>
      </ul>
		</div>
	);
};

export default Prescription;
