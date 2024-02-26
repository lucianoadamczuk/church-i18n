import './NewCreation.css';
export default function NewCreation() {
	const data = [
		'<p>En Cristo, eres <strong> adoptado </strong> como hijo de Dios <i>(Juan 1:12; Romanos 8:14-17)</i>. <br> Esto significa que tienes una relación personal con Dios como tu <strong> Padre amoroso </strong>.</p>',
		'<p>Has sido <strong>redimido</strong> del pecado y de la condenación por medio de su sacrificio en la cruz <i>(Efesios 1:7; Colosenses 1:13-14)</i>. <br> Eres <strong>perdonado y liberado</strong> del poder del pecado.</p>',
		'<p>Eres una <strong>nueva creación</strong>; lo viejo ha pasado, y lo nuevo ha llegado <i>(2 Corintios 5:17)</i>. <br> Esto implica un cambio <strong>radical</strong> en tu identidad y naturaleza espiritual.</p>',
		'<p>Eres <strong>justificado</strong> delante de Dios, es decir, declarado justo y sin culpa, por medio de tu fe en Él <i>(Romanos 3:21-26)</i>. <br> No eres justificado por tus obras, sino por la obra <strong>terminada</strong> de Cristo en la cruz.</p>',
		'<p>Eres <strong>amado incondicionalmente</strong> por Dios <i>(Romanos 8:38-39)</i>. <br> Tu valía y dignidad no dependen de tus acciones o logros, sino del amor eterno de Dios.</p>',
	];
	return (
		<section className='NewCreation'>
			<article className='content'>
				<h3 className='title'>Nueva criatura</h3>
				<strong className='subtitle'>
					¿Estás comenzando tu caminar en la fe? ¿Eres nuevo en la iglesia?{' '}
					<br />
					Queremos conocerte y ayudarte.
				</strong>

				<div
					className='textContainer'
					dangerouslySetInnerHTML={{ __html: data }}
				></div>
			</article>
			<img src='/home/newCreature.jpg' alt='' className='image' />
		</section>
	);
}
