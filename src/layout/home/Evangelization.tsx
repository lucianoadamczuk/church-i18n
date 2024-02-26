import { useTranslation } from 'react-i18next';
import { Promotional } from '../../templates';

export default function Evangelization() {
	const { t } = useTranslation();
	return (
		<Promotional
			bgMobile='/home/evangelization-mobile.jpg'
			bgDesktop='/home/evangelization-desktop.jpg'
			title={t('evangelization.title')}
			verse={t('evangelization.verse')}
			text={t('evangelization.text')}
		/>
	);
}
