import React, { useEffect, useState } from "react";
import "./App.css";
import API from "./utils/API";

function App() {
	const [reservations, setReservations] = useState<any[]>([]);
	console.log(reservations);

	useEffect(() => {
		API.getAll("reservations")
			.then((res) => setReservations(res.data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="App">
			<h1>Reservations</h1>
			<ul>
				{reservations.map((reservation) => (
					<li key={reservation._id}>
						<p>
							Unidad: {reservation.unit} - Precio: {reservation.unitPrice}
						</p>
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
