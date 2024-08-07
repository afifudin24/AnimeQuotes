import { useState } from "react";

function CardShow({ title, character, anime, english, indo }) {
    const [modalData, setModalData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleButtonClick = () => {
        setModalData({
            character,
            anime,
            english,
            indo,
            title
        });
        setIsModalOpen(true);
        
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalData(null); // Clear modal data
    };
     const copyToClipboard = () => {
        if (modalData) {
            // Construct the text to be copied
            const textToCopy = `
Character: ${modalData.character}
Anime: ${modalData.anime}
Indo: ${modalData.indo}
English: ${modalData.english}

`;

            // Use the Clipboard API to copy the text
            navigator.clipboard.writeText(textToCopy)
                .then(() => {
                    alert('Berhasil Disalin!');
                })
                .catch(err => {
                    console.error('Failed to copy: ', err);
                });
        }
    };

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                {/* <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" /> */}
            </figure>
            <div className="card-body p-4">
                <h2 className="card-title text-sm">{character}</h2>
                <p className="text-sm text-descriptionGray">{indo}</p>
                <div className="card-actions justify-end">
                    <button onClick={handleButtonClick} className="btn font-semibold btn-warning">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M15 12c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-.199.02-.393.057-.581 1.474.541 2.927-.882 2.405-2.371.174-.03.354-.048.538-.048 1.657 0 3 1.344 3 3zm-2.985-7c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 12c-2.761 0-5-2.238-5-5 0-2.761 2.239-5 5-5 2.762 0 5 2.239 5 5 0 2.762-2.238 5-5 5z"/>
                        </svg>
                    </button>
                </div>
            </div>

            {isModalOpen && modalData && (
                <dialog open className={`modal ${isModalOpen ? 'open' : ''} transition-all duration-100 ease-in-out`}>
                    <div className="modal-box transition-all duration-75 ease-out">
                        <h3 className="font-bold text-lg">{modalData.character} - {modalData.anime}</h3>
                        <p className="py-4 text-descriptionGray">{modalData.indo}</p>
                        <p className="py-4">{modalData.english}</p>

                        <button onClick={copyToClipboard} className="btn btn-secondary">Copy</button>
                       
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button type="button" onClick={closeModal}>Close</button>
                    </form>
                </dialog>
            )}
           
        </div>
    );
}

export default CardShow;
