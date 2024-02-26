import './CardEvent.css';

interface Props {
	image: string;
	alt: string;
	title: string;
	text: string;
	date: string;
}
export default function CardEvent({ image, alt, title, text, date }: Props) {
	return (
		<div className='CardEvent'>
			<img src={image} alt={alt} loading='lazy' className='image-desktop' />
			<div className='content'>
				<h5 className='title'> {title} </h5>
				<p className='description'>{text}</p>
				<img
					src={image}
					alt={alt}
					loading='lazy'
					className='image image-desktop'
				/>
				<p className='date'> {date} </p>
			</div>
		</div>
	);
}
