import { useState } from "react"

const Modal = () => {
    const [isModalOpen,setIsModalOpen] = useState(false);

    const openModal = () => { setIsModalOpen(true) };
    const closeModal = () => { setIsModalOpen(false) };


    return(
        <>
        <div className="bg-amber-200 p-6 h-60">
        <h1>hey modal</h1>
        <button 
            className="bg-gray-600 py-2 px-4 rounded-lg"
            onClick={openModal}
        >
            Create
        </button>

        {isModalOpen && (
            <div className="fixed h-screen inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
                <div className="bg-white text-xl p-6 flex flex-col gap-2  ">
                    <h1>hello world</h1>
                    <button
                        className="bg-gray-600 py-1 px-2 rounded-lg hover:bg-black hover:text-white"
                        onClick={closeModal}
                    >
                        Close

                    </button>
                </div>
            </div>
        ) }

        </div>
        </>
    )
}
export default Modal;