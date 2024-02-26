import { Suspense } from 'react';
import { DoubleBox } from '../../templates';
import { useTranslation } from 'react-i18next';

export default function About() {
	const { t } = useTranslation();
	return (
		<Suspense>
			<DoubleBox
				title={t('about.title')}
				text={t('about.text')}
				alt={t('about.alt')}
				image='/home/about.jpg'
				inverted
			/>
		</Suspense>
	);
}
