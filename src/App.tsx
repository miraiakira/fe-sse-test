import { useEffect } from "react";

function App() {
	useEffect(() => {
		const eventSource = new EventSource("http://localhost:3700/stream3");
		eventSource.onmessage = ({ data }) => {
			console.log("New message", JSON.parse(data));
		};
	}, []);

	return <div>hello</div>;
}

export default App;
