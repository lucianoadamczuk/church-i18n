import { DoubleBox } from '../../templates';

export default function About() {
	const text = [
		'En La Iglesia del Padre, nos enorgullece ser un lugar donde las personas pueden encontrar consuelo, comunidad y un profundo sentido de conexión espiritual. Tenemos un compromiso a cultivar un ambiente de amor, compasión y aceptación, donde cada individuo sea valorado y apoyado en este viaje que es vivir.',
	];
	return (
		<DoubleBox
			title='Acerca de nosotros'
			text={text}
			image='/home/about.jpg'
			alt='Un hombre viendo el horizonte'
			inverted
		/>
	);
}
