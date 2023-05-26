import { useState } from 'react';
import styles from './LandingFaq.module.css';
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';
import Accordion from 'react-bootstrap/Accordion';

const questions = [
	{
		question: 'What is Netflix?',
		answer: [
			'Netflix is a streaming service that allows users to enjoy a wide selection of award-winning movies, series, shows, anime and documentaries through thousands of internet-connected devices',
			"You can watch all you want, wherever you are - ad-free and for one monthly fee. We add new titles every week, so there's always something interesting to watch.",
		],
	},
	{
		question: 'How much Netflix cost?',
		answer: [
			'Watch Netflix on your smartphone, tablet, smart TV, laptop or other playback device for one flat monthly fee. We have plans ranging from PLN 29 to PLN 60 per month. No extra costs and no contracts.',
		],
	},
	{
		question: 'Where can I watch?',
		answer: [
			'Watch where and when you want. Sign in with your netflix.com account details on a computer or other Internet-enabled device with the Netflix app installed, such as a smart TV, smartphone, tablet, media player, or game console.',
			'You can also download your favorite shows on iOS or Android mobile devices and on devices with the Windows 10 app. You can watch downloaded titles while away from home, without an internet connection. Enjoy Netflix wherever you want.',
		],
	},
	{
		question: 'How to unsubscribe?',
		answer: [
			'Netflix does not impose anything. No unnecessary contracts or obligations. You can easily cancel your online membership in just two clicks. We dont charge cancellation fees, so you can start and cancel your membership at any time.',
		],
	},
	{
		question: 'What can I watch on Netflix?',
		answer: [
			'Netflix offers an extensive library of feature films and documentaries, series, shows, anime, award-winning Netflix Originals, and more. Watch whenever you want.',
		],
	},
	{
		question: 'Is Netflix suitable for children?',
		answer: [
			'As part of your Netflix membership, you get access to a special section for kids. Young viewers can watch movies, series and programs designed just for them, and parents have control over everything.',
			"Children's profiles are protected by a parental control PIN that prevents access to content that exceeds certain age ratings, and also allows you to block specific titles.",
		],
	},
];
export const LandingFaq = () => {
	const [activeItem, setActiveItem] = useState(null);

	const handleItemClick = (index) => {
		setActiveItem(activeItem === index ? null : index);
	};
	return (
		<>
			<h2 className={styles.title}>Frequently asked questions</h2>
			<div className={styles.accordion}>
				{/*<Accordion>*/}
				{/*	{questions.map((item, index) => (*/}
				{/*		<Accordion.Item eventKey={index} key={index}>*/}
				{/*			<Accordion.Header>{item.question}</Accordion.Header>*/}
				{/*			<Accordion.Body>{item.answer}</Accordion.Body>*/}
				{/*		</Accordion.Item>*/}
				{/*	))}*/}
				{/*</Accordion>*/}
				<div
					className={`accordion accordion-flush ${styles.color}`}
					id="accordionFlushExample"
				>
					{questions.map((item, index) => (
						<div className={`accordion-item ${styles.panel}`} key={index}>
							<h2 className={`accordion-header ${styles.paneltitle}`}>
								<button
									className={`accordion-button collapsed ${styles.trigger}`}
									type="button"
									data-bs-toggle="collapse"
									data-bs-target={`#fluch-colapse${index}`}
									aria-expanded="false"
									aria-controls="flush-collapseOne"
								>
									<span>{item.question}</span>
									{activeItem === index ? (
										<AiOutlineClose className={styles.plusicon} />
									) : (
										<AiOutlinePlus className={styles.plusicon} />
									)}
								</button>
							</h2>
							<div
								id={`fluch-colapse${index}`}
								className="accordion-collapse collapse"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									{item.answer.map((item, index) => (
										<p key={index}>{item}</p>
									))}
								</div>
							</div>
						</div>
					))}
					{/*{questions.map((item, index) => (*/}
					{/*	<div className={styles.panel} key={index}>*/}
					{/*		<h2 className={`accordion-header ${styles.paneltitle}`}>*/}
					{/*			<button*/}
					{/*				className={`accordion-button collapsed ${styles.trigger}`}*/}
					{/*				type="button"*/}
					{/*				data-bs-toggle="collapse"*/}
					{/*				data-bs-target={`#fluch-colapses${index}`}*/}
					{/*				aria-expanded="false"*/}
					{/*				aria-controls="flush-collapseOne"*/}
					{/*			>*/}
					{/*				<span>{item.question}</span>*/}
					{/*				{activeItem === index ? (*/}
					{/*					<AiOutlineClose className={styles.plusicon} />*/}
					{/*				) : (*/}
					{/*					<AiOutlinePlus className={styles.plusicon} />*/}
					{/*				)}*/}
					{/*			</button>*/}
					{/*		</h2>*/}
					{/*		<div*/}
					{/*			id={`fluch-colapses${index}`}*/}
					{/*			className="collapse"*/}
					{/*			data-bs-parent="#accordionFlushExample"*/}
					{/*		>*/}
					{/*			<div className="accordion-body">*/}
					{/*				{item.answer.map((item, index) => (*/}
					{/*					<p key={index}>{item}</p>*/}
					{/*				))}*/}
					{/*			</div>*/}
					{/*		</div>*/}
					{/*	</div>*/}
					{/*))}*/}
				</div>
				{/*{questions.map((item, index) => (*/}
				{/*	<div key={index} className={styles.panel}>*/}
				{/*		<div*/}
				{/*			className={`accordion-item ${*/}
				{/*				activeItem === index ? 'active' : ''*/}
				{/*			}`}*/}
				{/*			onClick={() => handleItemClick(index)}*/}
				{/*		>*/}
				{/*			<h2 className={styles.paneltitle}>*/}
				{/*				<button className={styles.trigger}>*/}
				{/*					<span>{item.question}</span>*/}
				{/*					{activeItem === index ? (*/}
				{/*						<AiOutlineClose className={styles.plusicon} />*/}
				{/*					) : (*/}
				{/*						<AiOutlinePlus className={styles.plusicon} />*/}
				{/*					)}*/}
				{/*				</button>*/}
				{/*			</h2>*/}

				{/*			<div className={'answer'}>*/}
				{/*				{item.answer.map((item, index) => (*/}
				{/*					<p key={index}>{item}</p>*/}
				{/*				))}*/}
				{/*			</div>*/}
				{/*		</div>*/}
				{/*	</div>*/}
				{/*))}*/}
			</div>
		</>
	);
};
