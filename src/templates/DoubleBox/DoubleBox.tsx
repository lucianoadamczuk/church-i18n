import './DoubleBox.css';

interface Props {
	title: string;
	text: string[];
	image: string;
	alt: string;
	inverted?: boolean;
}

export default function DoubleBox({
	title,
	text,
	image,
	alt,
	inverted,
}: Props) {
	return (
		<section className='doubleBox'>
			<article className={`box-1 ${inverted && 'box-1-inverted'}`}>
				<h3> {title} </h3>

				{text.map((item) => (
					<p> {item} </p>
				))}
			</article>
			<img
				src={image}
				alt={alt}
				className={`box-2 ${inverted && 'box-2-inverted'}`}
			/>
		</section>
	);
}
