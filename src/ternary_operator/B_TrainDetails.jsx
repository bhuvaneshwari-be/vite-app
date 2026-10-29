import { useState } from "react";

export default function B_PassengerDetails({
    passengers,
    setPassengers,
    availableSeats
}) {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");

    const addPassenger = () => {
        if (name.trim() === "" || age === "" ||
            Number(age) < 1 || Number(age) > 120 ||
            gender === "") {
            alert("Enter valid passenger details");
        }
        else if (availableSeats <= 0) {
            alert("No seats available");
        }
        else {
            setPassengers([
                ...passengers,
                { name: name, age: age, gender: gender }
            ]);

            setName("");
            setAge("");
            setGender("");
        }
    };

    return (
        <div className="card p-3 mt-3">
            <h5>Passenger Details</h5>

            <input
                className="form-control mb-2"
                placeholder="Passenger Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                className="form-control mb-2"
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />

            <select
                className="form-select mb-3"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
            >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select>

            <button
                className="btn btn-primary"
                onClick={addPassenger}
                disabled={availableSeats <= 0}
            >
                Add Passenger
            </button>

            <h6 className="mt-3">Passenger List</h6>

            {passengers.map((p, index) => (
                <p key={index}>
                    {index + 1}. {p.name} | {p.age} years | {p.gender}
                </p>
            ))}
        </div>
    );
}