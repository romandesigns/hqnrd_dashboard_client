import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { addNumbers, substractNumbers } from "./store/slices/mathOperation";
import { useAppDispatch, useAppSelector } from "./store/app/hooks";

function App() {
	const [socket, setSocket] = useState<any>(null);

	useEffect(() => {
		setSocket(io("http://localhost:4040"));
	}, []);

	useEffect(() => {
		if (!socket) return;
	}, [socket]);

	const dispatch = useAppDispatch();
	const { value } = useAppSelector((state) => state.mathOperation);

	return (
		<div className="App">
			<div>{value}</div>
			<button onClick={() => dispatch(addNumbers())}>+</button>
			<button onClick={() => dispatch(substractNumbers())}>-</button>
		</div>
	);
}

export default App;
