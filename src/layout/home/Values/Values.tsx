import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import './Values.css';

interface Value {
	title: string;
	text: string;
}

export default function Values() {
	const { t } = useTranslation();

	const content: Value[] = t('values.content', { returnObjects: true });

	return (
		<section className='Values'>
			<h3 className='title'>{t('values.title')}</h3>

			<article className='cardsContainer'>
				{content.map((item) => (
					<div className='card' key={uuidv4()}>
						<h5 className='title'>{item.title}</h5>
						<p>{item.text}</p>
					</div>
				))}
			</article>
		</section>
	);
}
