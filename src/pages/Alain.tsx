import Copy from "../components/Copy.tsx";

/**
 * 
 * 
 * @returns page layout for Alain sterbik
 */
export default function Alain() {


    return (
        <>
            <h1 className="text-2xl dark:text-white my-3 font-semibold">
                Alain STERBIK
            </h1>
            <h2 className="dark:text-white font-semibold mb-5">Consultant en relations internationales</h2>
            <div className="flex md:flex-row-reverse flex-col justify-center my-5">
                <div className="flex justify-center md:w-80 md:h-80 md:sticky md:top-48 mx-2 my-3">
                    <img className="md:w-full md:h-full" src="/assets/alain.webp" alt="photo-profil" />
                </div>
                <div className="container mx-auto my-3">
                    <p className="mb-3 text-gray-500 dark:text-gray-400">

                        Fort de plus de 40 ans d'expérience dans les relations
                        diplomatiques, j'accompagne les entreprises et les
                        institutions dans leur développement en leur proposant des
                        solutions stratégiques sur mesure, visant une croissance
                        durable et des résultats concrets.

                    </p>

                    <h3 className="mb-3 text-gray-500 dark:text-white font-semibold">À propos de moi</h3>
                    <p className="mb-3 text-gray-500 dark:text-gray-400">

                        Passionné par les dynamiques interpersonnelles et internationales, j&#39;apporte une expertise
                        approfondie dans les relations politiques et diplomatiques internationales, ainsi que dans la
                        gestion consulaire, administrative, budgétaire et des ressources humaines, particulièrement en
                        contexte de crise.
                        Mon approche se distingue par sa pragmatique, centrée sur les résultats et l’adaptation aux
                        besoins spécifiques de chaque client. J’allie une analyse pointue à des solutions pratiques pour
                        maximiser l’impact de mes interventions.
                    </p>

                    <h3 className="mb-3 text-gray-500 dark:text-white font-semibold">Mes services</h3>
                    <div className="mb-3 text-gray-500 dark:text-gray-400">
                        Grâce à mon vaste réseau international, je me positionne en tant que facilitateur d’affaires et de
                        partenariats stratégiques à haut niveau.
                        Je propose des services dédiés à l&#39;accompagnement des entreprises souhaitant s&#39;implanter ou se
                        développer sur les marchés internationaux :

                        <ul className="my-3 mx-3">
                            <li className="border-l pl-3 dark:border-gray-600"> - Solutions sur mesure : Chaque entreprise étant unique, j’élabore des stratégies adaptées à vos besoins spécifiques et à vos objectifs.</li>
                            <li className="border-l pl-3 dark:border-gray-600"> - Engagement envers l’excellence : Mon objectif est de livrer des résultats de haute qualité, en me concentrant sur une croissance durable et pérenne.</li>
                        </ul>
                    </div>

                    <h3 className="mb-3 text-gray-500 dark:text-white font-semibold">Comment je procède</h3>

                    <div className="mb-3 text-gray-500 dark:text-gray-400">
                        <ul className="my-3 mx-3">
                            <li className="border-l pl-3 dark:border-gray-600"> - Consultation initiale offerte : Nous échangeons pour mieux comprendre vos besoins et les défis
                                auxquels vous faites face.</li>
                            <li className="border-l pl-3 dark:border-gray-600"> - Stratégie personnalisée : Un plan d’action est élaboré en accord avec vos objectifs de
                                développement.</li>
                            <li className="border-l pl-3 dark:border-gray-600"> - Suivi régulier : J’assure un accompagnement tout au long de l’exécution pour garantir la mise en
                                œuvre optimale de la stratégie.</li>
                        </ul>

                        Discutons ensemble de la manière dont je peux vous accompagner pour faire évoluer votre
                        entreprise vers de nouveaux horizons.
                    </div>
                    <ul className="my-3 mx-3">
                        <li className="flex items-center px-3 py-2 text-lg font-medium text-gray-600 border-l border-gray-200 dark:border-gray-600 dark:text-gray-400 dark:bg-gray-800 hover:text-blue-700 dark:hover:text-white copy-to-clipboard-button">
                            <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24"><title>Gmail</title><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" /></svg>
                            <Copy title="Par courrier" label="sterbika@gmail.com" />
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/alain-sterbik-0b63932/" className="flex items-center px-3 py-2 text-lg font-medium text-gray-600 border-l border-gray-200 dark:border-gray-600 dark:text-gray-400 dark:bg-gray-800 hover:text-blue-700 dark:hover:text-white">
                                <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path fillRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                <span className="mx-5"> Via LinkedIn : cliquer pour suivre le lien </span>
                            </a>
                        </li>
                    </ul>

                </div>

            </div>


        </>
    )
}