
/**
 * 
 * @param {*} label string of label to copy 
 * @param {*} title string of title of message (optionnal)
 * @returns copy {label} to clipboard
 */
export default function Copy({ label = '', title = 'will be copied' }) {


    const copyToClipboard = () => {

        const validate = document.querySelector('.copy-text')!

        navigator.clipboard.writeText(label).then(() => {

            validate.innerHTML = 'Copié !'
            setTimeout(() => {
                validate.innerHTML = ''
            }, 2000);
        }).catch((err) => {
            console.error('Could not copy text: ', err);
        });

    };

    return (
        <>
            <button type="button" onClick={copyToClipboard} className="flex md:flex-row sm:flex-col items-center justify-center  text-lg font-medium text-gray-600 dark:border-gray-600 dark:text-gray-400 dark:bg-gray-800 hover:text-blue-700 dark:hover:text-white copy-to-clipboard-button">
                <span className="mx-5">{title} : {label}</span>

                <div className="flex flex-row items-center">
                    <svg className="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M5 9V4.13a2.96 2.96 0 0 0-1.293.749L.879 7.707A2.96 2.96 0 0 0 .13 9H5Zm11.066-9H9.829a2.98 2.98 0 0 0-2.122.879L7 1.584A.987.987 0 0 0 6.766 2h4.3A3.972 3.972 0 0 1 15 6v10h1.066A1.97 1.97 0 0 0 18 14V2a1.97 1.97 0 0 0-1.934-2Z"></path>
                        <path d="M11.066 4H7v5a2 2 0 0 1-2 2H0v7a1.969 1.969 0 0 0 1.933 2h9.133A1.97 1.97 0 0 0 13 18V6a1.97 1.97 0 0 0-1.934-2Z"></path>
                    </svg>
                    <span className="copy-text"></span>
                </div>

            </button>
            <div id="clipboard-example-copy-clipboard-tooltip" role="tooltip" className="absolute z-10 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm tooltip dark:bg-gray-700 opacity-0 invisible" style={{ position: 'absolute', inset: '0px auto auto 0px', margin: '0px', transform: 'translate(471px, 44px)' }} data-popper-placement="bottom">
                Copier l'adresse
                <div className="tooltip-arrow" data-popper-arrow="" style={{ position: 'absolute', left: '0px', transform: 'translate(100px, 0px)' }}></div>
            </div>
        </>

    )
}