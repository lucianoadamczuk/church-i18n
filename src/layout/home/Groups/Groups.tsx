import { useTranslation } from 'react-i18next';
import './Groups.css';

export default function Groups() {
	const { t } = useTranslation();

	const images = ['/home/youngs.jpg', '/home/men.jpg', '/home/women.jpg'];

	const boxes: Array<{ title: string; alt: string }> = t('groups.boxes', {
		returnObjects: true,
	});

	return (
		<section className='Groups'>
			{boxes.map(
				({ title, alt }: { title: string; alt: string }, index: number) => (
					<article className='box' key={index}>
						<div className='container'>
							<h5 className='title'>{title}</h5>
						</div>
						<img
							src={images[index]}
							alt={alt}
							className='image'
							loading='lazy'
						/>
					</article>
				)
			)}

			<div className='box'>
				<div className='container'>
					<h4>{t('groups.text')}</h4>
				</div>
			</div>
		</section>
	);
}
