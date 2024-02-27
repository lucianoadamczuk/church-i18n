import { useTranslation } from 'react-i18next';
import './index.css';
import { useEffect } from 'react';

export default function Navbar() {
	const { t, i18n } = useTranslation();

	const languages: Array<{ value: string; text: string }> = t(
		'navbar.languages',
		{ returnObjects: true }
	);

	useEffect(() => {
		document.title = t('navbar.title');
	}, [t]);

	return (
		<nav className='navbar'>
			<h5 className='title'> {t('navbar.title')} </h5>
			<select
				className='select'
				onChange={(e) => i18n.changeLanguage(e.target.value)}
			>
				{languages?.map(({ value, text }) => (
					<option value={value}> {text} </option>
				))}
			</select>
		</nav>
	);
}
