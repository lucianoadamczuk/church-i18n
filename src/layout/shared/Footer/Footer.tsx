import { v4 as uuidv4 } from 'uuid';
import './Footer.css';

const data = {
	main: {
		text: 'Un lugar donde el amor de Dios se manifieste en acción, donde las personas encuentren consuelo, fortaleza y orientación en su viaje de fe, y donde se promueva la unidad, la compasión y la justicia en el mundo.',
	},
	content: [
		{ title: 'Conectar', links: ['Leaders', 'Get involved', 'Contact'] },
		{ title: 'Recursos', links: ['Podcasts', 'Series', 'Help'] },
		{
			title: 'Redes sociales',
			links: ['Facebook', 'Instagram', 'Twitter', 'YouTube', 'Spotify'],
		},
		{ title: 'Otros', links: ['Privacy', 'Terms', 'News', 'Give'] },
	],
	end: '© 2024 - 2026 CasaDelPadre.com. All Rights Reserved.',
};
export default function Footer() {
	return (
		<footer>
			<section className='linksContainer'>
				<article>
					<p className='text'> {data.main.text} </p>
				</article>

				{data.content.map((item) => (
					<article key={uuidv4()}>
						<h6 className='title'> {item.title} </h6>
						{item.links.map((link) => (
							<p key={uuidv4()} className='link'>
								{link}
							</p>
						))}
					</article>
				))}
			</section>

			<section className='end'>
				<h6> {data.end} </h6>
			</section>
		</footer>
	);
}
