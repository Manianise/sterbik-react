import { Link } from "react-router-dom"
export default function Home() {

    return (
        <>
            <h1 className="text-2xl my-2 dark:text-white font-semibold">
                Bienvenue sur le site de la famille STERBIK !
            </h1>
            <div className="container flex md:flex-row flex-col items-center justify-center md:justify-between basis-1/2">
                <div className="my-3">


                    <div style={{minHeight:"500px"}} className="flex flex-wrap items-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#" className="flex justify-center">
                            <img src="/assets/alain.webp" alt="main_img"/>
                        </a>
                        <p className="my-3 font-semibold text-gray-700 dark:text-gray-400">Alain STERBIK : Consultant relations internationales</p>
                        <Link to="/alain" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            En savoir plus
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </Link>
                    </div>

                </div>
                <div className="my-3">


                    <div style={{minHeight:"500px"}} className="flex flex-wrap items-center max-w-sm max-h-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#" className="flex justify-center">
                            <img src="/assets/selfie_blue.webp" alt="main_img" />
                        </a>
                        <p className="my-3 font-semibold text-gray-700 dark:text-gray-400">Pierre-Alexandre STERBIK : Consultant Nouvelles Technologies</p>
                        <a href="https://github.com/Manianise" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            En savoir plus
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>

                </div>
            </div>

        </>
    )
}