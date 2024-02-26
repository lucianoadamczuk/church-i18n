import { useTranslation } from 'react-i18next';
import { DoubleBox } from '../../templates';

export default function Schedule() {
	const { t } = useTranslation();

	return (
		<DoubleBox
			image='/home/schedule.jpg'
			title={t('schedule.title')}
			text={t('schedule.text', { returnObjects: true }) as string[]}
			alt={t('schedule.alt')}
		/>
	);
}
