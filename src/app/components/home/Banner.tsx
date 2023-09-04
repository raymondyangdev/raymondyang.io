import Link from 'next/link';

export default function Banner() {
    return (
        <div className="flex items-start md:items-center justify-between my-4 h-80 sm:h-64">
            <div className="flex flex-col">
                {' '}
                <h2 className="font-josefinSans text-4xl mb-2 pt-4 pr-4 md:pt-0 md:pr-0">
                    Hello, I'm{' '}
                    <span className="font-montserratBold text-cyan-500">
                        Raymond Yang
                    </span>{' '}
                    👋
                </h2>
                <div className="font-josefinSans mb-4 text-lg mr-4 lg:mr-0 flex flex-col">
                    {' '}
                    <p>
                        Aspiring{' '}
                        <span className="text-cyan-500 font-montserratBold">
                            Software Engineer
                        </span>{' '}
                        &
                    </p>{' '}
                    <p>
                        <span className="text-cyan-500 font-montserratBold">
                            Computer Science
                        </span>{' '}
                        Student @ University of Auckland
                    </p>
                </div>
                <div className="flex gap-4 md:mt-3">
                    <Link href={'https://github.com/raymondyangdev'}>
                        <img
                            className="w-8 h-8 md:w-10 md:h-10 hover:-translate-y-1"
                            src="./assets/images/socials/github.svg"
                            alt="GitHub Logo"
                        />
                    </Link>
                    <Link href={'https://www.linkedin.com/in/raymondyangdev/'}>
                        <img
                            className="w-8 h-8 md:w-10 md:h-10 hover:-translate-y-1"
                            src="./assets/images/socials/linkedin-in.svg"
                            alt="LinkedIn Logo"
                        />
                    </Link>
                    <Link href={'./assets/RaymondYang-CV.pdf/'}>
                        <img
                            className="w-8 h-8 md:w-10 md:h-10 hover:-translate-y-1"
                            src="./assets/images/resume-icon.svg"
                            alt="CV/Resume Icon"
                        />
                    </Link>
                </div>
            </div>

            <img
                className="self-center w-36 h-36 md:w-52 md:h-52 mx-3 md:mx-0 rounded-full object-cover border-white border-4"
                src="./assets/images/banner/banner-photo.JPG"
                alt="Raymond Yang"
            />
        </div>
    );
}