import { useCallback, useEffect, useState } from 'react';
import './App.css';
import Jobs from './components/jobs/Jobs';

function App() {

	const [ jobs, setJobs ] = useState([]);

	const fetchJobs = useCallback(async () => {
		try {
			const resp = await fetch("http://localhost:8001/jobs");
			const data = await resp.json();
			console.log("fetchJobs data", data);
			setJobs(data);
		} catch ( e ) {
			console.log("fetchJobs e", e);
		}
	}, []);

	useEffect(() => {
		fetchJobs();
	}, []);

	return (
		<div className="App">
			<Jobs jobs={jobs}/>
		</div>
	);
}

export default App;
