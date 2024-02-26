import { CarouselPagination } from '../../../components';

export default function NextEvents() {
	const data = [
		{
			image: '/home/worship.jpg',
			alt: '',
			title: 'Noche de Alabanza',
			text: 'Únete a nosotros para una noche llena de música, adoración y exaltación del nombre de Dios. Será un tiempo especial para elevar nuestros corazones en gratitud y alabanza por todo lo que Él ha hecho por nosotros.',
			date: '3 de marzo de 2024',
		},
		{
			image: '/home/camp.jpg',
			alt: '',
			title: 'Campamento dejovenes',
			text: ' ¡Atención! Están invitados al campamento Más que vencedores llena de diversión, música, juegos y reflexión espiritual. Será una excelente oportunidad para fortalecer amistades y crecer en comunidad.',
			date: '18 de marzo - 28 de marzo',
		},
		{
			image: '/home/matrimony.jpg',
			alt: '',
			title: 'Encuentro de matrimonios',
			text: 'Para parejas comprometidas y casadas, este taller ofrece herramientas prácticas y consejos basados en principios bíblicos para fortalecer la relación matrimonial. Ven y aprende cómo construir un matrimonio sólido y duradero.',
			date: '10 de junio',
		},
	];

	return (
		<section>
			<CarouselPagination data={data} />
		</section>
	);
}
