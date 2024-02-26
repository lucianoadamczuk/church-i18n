import './App.css';
import { Footer, Navbar } from './layout/shared';
import { Home } from './pages';

function App() {
	return (
		<>
			<Navbar />
			<Home />
			<Footer />
		</>
	);
}

export default App;
