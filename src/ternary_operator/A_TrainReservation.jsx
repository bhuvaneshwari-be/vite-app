import { useState } from "react";
import B_PassengerDetails from "./B_TrainDetails";

export default function A_TrainReservation() {

    const [train, setTrain] = useState({
        name: "Chennai Express",
        travelClass: "SL",
        seats: 3,
        fare: 350
    });

    const [passengers, setPassengers] = useState([]);

    return (
        <div className="container mt-4">
            <h3 className="text-center text-primary">
                Train Ticket Reservation
            </h3>

            <div className="card p-3 mt-3">
                <h5>{train.name}</h5>

                <label>Select Class:</label>
                <select
                    className="form-select"
                    value={train.travelClass}
                    onChange={(e) => {
                        const selectedClass = e.target.value;

                        setTrain({
                            name: train.name,
                            travelClass: selectedClass,
                            seats: selectedClass === "2A" ? 0 : 3,
                            fare: selectedClass === "SL" ? 350 : 850
                        });
                    }}
                >
                    <option value="SL">Sleeper (SL)</option>
                    <option value="3A">AC 3 Tier (3A)</option>
                    <option value="2A">AC 2 Tier (2A)</option>
                </select>

                <p className="mt-3">
                    Available Seats: {train.seats - passengers.length}
                </p>

                <p>Fare per Passenger: ₹{train.fare}</p>

                <p>
                    Status:{" "}
                    {train.seats - passengers.length > 0
                        ? "Seats Available"
                        : "Not Available"}
                </p>
            </div>

            <B_PassengerDetails
                passengers={passengers}
                setPassengers={setPassengers}
                availableSeats={train.seats - passengers.length}
            />

            <div className="card p-3 mt-3">
                <h5>Booking Summary</h5>
                <p>Total Passengers: {passengers.length}</p>
                <p>Total Fare: ₹{passengers.length * train.fare}</p>

                <p>
                    Booking Status:{" "}
                    {passengers.length > 0
                        ? "Booking Details Added"
                        : "No Passengers Added"}
                </p>
            </div>
        </div>
    );
}