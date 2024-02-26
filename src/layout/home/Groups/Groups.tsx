import './Groups.css';
export default function Groups() {
	const data = [
		{ title: 'Grupo de jovenes', image: '/home/youngs.jpg', alt: '' },
		{ title: 'Grupo de hombres', image: '/home/men.jpg', alt: '' },
		{ title: 'Grupo de mujeres', image: '/home/women.jpg', alt: '' },
	];
	return (
		<section className='Groups'>
			{data.map(({ title, image, alt }) => (
				<article className='box'>
					<div className='container'>
						<h5 className='title'> {title} </h5>
					</div>
					<img src={image} alt={alt} className='image' loading='lazy' />
				</article>
			))}

			<div className='box'>
				<div className='container'>
					<h4>¡Unete ahora!</h4>
				</div>
			</div>
		</section>
	);
}
