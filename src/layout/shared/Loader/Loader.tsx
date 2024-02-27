import { Oval } from 'react-loader-spinner';
import './Loader.css';
export default function Loader() {
	return (
		<section className='Loader'>
			<Oval color='var(--primary-dark' secondaryColor='var(--primary-medium)' />
		</section>
	);
}
