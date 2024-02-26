import './Values.css';
export default function Values() {
	const data = [
		{
			title: 'Amor incondicional',
			text: 'Creemos en el poder transformador del amor incondicional. Nos esforzamos por ser una comunidad que refleje el amor de Cristo en todo lo que hacemos, acogiendo a todos con brazos abiertos y mostrando compasión y gracia a aquellos que nos rodean.',
		},
		{
			title: 'Crecimiento espiritual',
			text: '				Nos esforzamos por equipar y empoderar a cada miembro de nuestra comunidad para que florezca en su viaje espiritual y alcance su máximo potencial en Cristo.',
		},
		{
			title: 'Servicio compasivo',
			text: 'Nos inspira el ejemplo de Jesús de servir a los demás con humildad y compasión. Buscamos ser una comunidad que se preocupa por las necesidades prácticas y espirituales de aquellos dentro y fuera de nuestras puertas.',
		},
	];
	return (
		<section className='Values'>
			<h3 className='title'>Nuestros valores</h3>

			<article className='cardsContainer'>
				{data.map(({ title, text }) => (
					<div className='card'>
						<h5 className='title'> {title} </h5>
						<p> {text} </p>
					</div>
				))}
			</article>
		</section>
	);
}
