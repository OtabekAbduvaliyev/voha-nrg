import React, { useState } from 'react'

const CameraModal = ({ isOpen, setIsOpen }) => {
    const videoUrl = 'https://www.youtube.com/embed/ZAOmg7IZkNQ'
    const closeModal = () => setIsOpen(!isOpen);
    return (
        <div>            {isOpen && <div className="fixed  inset-0 z-inde flex items-center justify-center bg-black bg-opacity-70" onClick={closeModal}>
            <div className="relative  rounded-lg w-[70%] " onClick={(e) => e.stopPropagation()}>
                <span
                    className="fixed  cursor-pointer text-gray-500 hover:text-gray-700 p-2"
                    onClick={closeModal}
                >
                    &times;
                </span>
                <div className="relative" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                        title="video"
                        className="absolute inset-0 w-full h-full"
                        src={videoUrl}
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>}</div>
    )
}

export default CameraModal