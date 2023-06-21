import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import banner from '../../images/img-01.png'
import { motion } from 'framer-motion';

const AlquranBanner = () => {
	const [activeTheme] = useThemeSwitcher();

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2"
		>
			<div className="w-full md:w-1/3 text-left">
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.1,
					}}
					className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
				>
					Al-Quran
				</motion.h1>
			</div>
			<motion.div
				initial={{ opacity: 0, y: -180 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
				className="w-full sm:w-2/3 text-right flex justify-center md:justify-end mt-8 sm:mt-0"
			>
				<img
					src={
						activeTheme === 'dark' ? banner : banner
					}
					alt="Developer"
                    className='h-[300px] sm:h-[500px]'
				/>
			</motion.div>
		</motion.section>
	);
};

export default AlquranBanner;
