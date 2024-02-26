import { useTranslation } from 'react-i18next';
import { Promotional } from '../../templates';

export default function Theology() {
	const { t } = useTranslation();

	return (
		<Promotional
			bgMobile='/home/theology-mobile.jpg'
			bgDesktop='/home/theology-desktop.jpg'
			title={t('theology.title')}
			verse={t('theology.verse')}
			text={t('theology.text')}
		/>
	);
}
