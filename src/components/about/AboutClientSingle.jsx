const AboutClientSingle = ({ title, image }) => {
	return (
		<div className="flex flex-col items-center justify-center">
			<img
				src={image}
				className="bg-black w-64 py-5 px-10 border  border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer"
				alt={title}
			/>
			<span className="font-general-medium text-lg text-ternary-dark dark:text-ternary-light">Your Logo Here</span>
		</div>
	);
};

export default AboutClientSingle;
