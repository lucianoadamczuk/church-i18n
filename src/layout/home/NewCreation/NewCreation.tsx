import { v4 as uuidv4 } from 'uuid';
import { Trans, useTranslation } from 'react-i18next';
import './NewCreation.css';

export default function NewCreation() {
	const { t } = useTranslation();

	const boxes: string[] = t('newCreation.text', { returnObjects: true });
	return (
		<section className='NewCreation'>
			<article className='content'>
				<h3 className='title'>{t('newCreation.title')}</h3>
				<Trans className='subtitle' components={{ br: <br /> }}>
					{t('newCreation.subtitle')}
				</Trans>

				<div className='textContainer'>
					{boxes.map((item: string) => (
						<Trans
							key={uuidv4()}
							components={{
								paragraph: <p />,
								strong: <strong />,
								br: <br />,
								i: <i />,
							}}
						>
							{item}
						</Trans>
					))}
				</div>
			</article>
			<img src='/home/newCreature.jpg' alt='' className='image' />
		</section>
	);
}
