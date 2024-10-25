import { Link } from "react-router-dom"
export default function Home() {

    return (
        <>
            <h1 className="text-2xl my-2 dark:text-white font-semibold">
                Bienvenue sur le site de la famille STERBIK !
            </h1>
            <div className="container flex md:flex-row  sm:flex-col items-center sm:justify-center md:place-content-around basis-1/2">
                <div className="my-3">


                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#" className="flex justify-center">
                            <img src="/assets/alain.webp" alt="main_img" style={{height: "357px"}}/>
                        </a>
                        <p className="my-3 font-semibold text-gray-700 dark:text-gray-400">Alain STERBIK : Consultant relations internationales</p>
                        <Link to="/alain" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            En savoir plus
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </Link>
                    </div>

                </div>
                <div className="my-3">


                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#" className="flex justify-center">
                            <img src="/assets/image.webp" alt="main_img" style={{height: "357px"}} />
                        </a>
                        <p className="my-3 font-semibold text-gray-700 dark:text-gray-400">Pierre-Alexandre STERBIK : Consultant Nouvelles Technologies</p>
                        <a href="https://github.com/Manianise" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            En savoir plus
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>

                </div>
            </div>

        </>
    )
}