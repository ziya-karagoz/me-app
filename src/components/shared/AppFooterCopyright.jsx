function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()}
				<a
					href="https://github.com/realZiya/react-tailwindcss-portfolio"
					target="__blank"
					className="hover:underline hover:text-yellow-600 dark:hover:text-yellow-300 ml-1 duration-500"
				>
					All Rights Reserved
				</a>
				.
				<a
					href="https://Ziya.me"
					target="__blank"
					className="text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline hover:text-yellow-600 dark:hover:text-yellow-300 ml-1 duration-500"
				>
					Ziya Karagoz
				</a>
			</div>
		</div>
	);
}

export default AppFooterCopyright;
