import { useEffect, useState } from "react";
import { io } from "socket.io-client";

function App() {
	const [socket, setSocket] = useState<any>(null);

	useEffect(() => {
		setSocket(io("http://localhost:4040"));
	}, []);

	useEffect(() => {
		if (!socket) return;
	}, [socket]);

	return <div className="App">Hello world</div>;
}

export default App;
