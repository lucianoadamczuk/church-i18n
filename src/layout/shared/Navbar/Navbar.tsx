import { useTranslation } from 'react-i18next';
import './index.css';
import { useState } from 'react';
export default function Navbar() {
	const { i18n } = useTranslation();
	const [language, setLanguage] = useState('holis');
	return (
		<nav className='navbar'>
			<h5>Church</h5>
			<select
				name=''
				id=''
				onChange={(e) => (
					i18n.changeLanguage(e.target.value), setLanguage(e.target.value)
				)}
			>
				<option value='es'>Spanish</option>
				<option value='en'>English</option>
				<option value='ru'>Russian</option>
			</select>
			<p> {language} </p>
		</nav>
	);
}
