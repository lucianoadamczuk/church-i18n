import { useTranslation } from 'react-i18next';
import './index.css';

export default function Header() {
	const { t } = useTranslation();
	return (
		<header>
			<div className='container'>
				<h2> {t('header.subtitle')} </h2>
				<h1> {t('header.title')} </h1>
				<p> {t('header.text')} </p>
			</div>
			<video
				autoPlay
				muted
				loop
				src='/home/header-mobile.mp4'
				className='video-mobile'
			></video>
			<video
				autoPlay
				muted
				loop
				src='/home/header-desktop.mp4'
				className='video-desktop'
			></video>
		</header>
	);
}
