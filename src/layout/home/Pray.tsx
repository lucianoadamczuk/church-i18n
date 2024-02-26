import { useTranslation } from 'react-i18next';
import { Promotional } from '../../templates';

export default function Pray() {
	const { t } = useTranslation();
	return (
		<Promotional
			bgMobile='/home/pray-mobile.jpg'
			bgDesktop='/home/pray-desktop.jpg'
			title={t('pray.title')}
			verse={t('pray.verse')}
			text={t('pray.text')}
		/>
	);
}
