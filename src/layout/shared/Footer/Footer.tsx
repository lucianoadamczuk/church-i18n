import { v4 as uuidv4 } from 'uuid';
import './Footer.css';
import { useTranslation } from 'react-i18next';

export default function Footer() {
	const { t } = useTranslation();
	const boxes: Array<{ title: string; items: string[] }> = t('footer.boxes', {
		returnObjects: true,
	});
	return (
		<footer>
			<section className='linksContainer'>
				<article>
					<p className='text'> {t('footer.text')} </p>
				</article>

				{boxes.map(({ title, items }) => (
					<article key={uuidv4()}>
						<h6 className='title'> {title} </h6>
						{items.map((item) => (
							<p key={uuidv4()} className='link'>
								{' '}
								{item}{' '}
							</p>
						))}
					</article>
				))}
			</section>

			<section className='end'>
				<h6> {t('footer.end')} </h6>
			</section>
		</footer>
	);
}
