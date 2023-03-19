import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Message } from "./stories/Message";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<Message mode={"success"} label="Success" />
			<Message mode={"error"} label="Error" />
			<Message mode={"warning"} label="Warning" />
		</div>
	);
}

export default App;
