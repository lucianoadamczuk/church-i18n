import { useTranslation } from 'react-i18next';
import { CarouselPagination } from '../../../components';

export default function NextEvents() {
	const { t } = useTranslation();

	const data: Array<{
		image: string;
		alt: string;
		title: string;
		text: string;
		date: string;
	}> = t('nextEvents', { returnObjects: true });

	return <section>{<CarouselPagination data={data} />}</section>;
}
