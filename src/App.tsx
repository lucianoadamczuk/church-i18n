import { Suspense } from 'react';
import './App.css';
import { Footer, Loader, Navbar } from './layout/shared';
import { Home } from './pages';

function App() {
	return (
		<Suspense fallback={<Loader />}>
			<Navbar />
			<Home />
			<Footer />
		</Suspense>
	);
}

export default App;
