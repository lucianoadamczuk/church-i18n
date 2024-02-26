import { DoubleBox } from '../../templates';

export default function Schedule() {
	const text = [
		'Domingos: 9hs | 11hs | 19hs',
		'Miercoles: 17hs',
		'Sabados: 19hs',
	];
	return (
		<DoubleBox
			title='Horarios'
			text={text}
			image='/home/schedule.jpg'
			alt='Un grupo de personas levantando las manos'
		/>
	);
}
