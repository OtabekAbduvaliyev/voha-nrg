import { useState } from 'react';
import { FaPlayCircle } from "react-icons/fa";
import Logo from '../assets/bc089832ff449a8a09ed4ee43cbc51a1.png'
const VideoModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const videoUrl = 'https://www.youtube.com/embed/ZAOmg7IZkNQ'
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <section className="max-w-[1190px] mx-auto flex lg:justify-between items-center flex-wrap px-[20px] lg:px-[0px] justify-center text-center lg:text-start bemalol">
            <div className="relative">
                {/* Video Modal Image */}
                <div className=" ">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/cb74/ab5a/e11e92a50b3e0621ccb7da3525866d90?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ihzsT7FWmSUdHvF1hOTmnLpMMGf6thyAuPXWDW2fulNhNBLsZZFTxmY43S-BB3HAcyWlIq3vy4Bn4hMXSMyEyhUUPxiL5EsXMWuXeTp2aMhSF309PKljwVpLPFNf5U1UIR-ii4yCTKLmT3sGcOf6mZBsUoVcZK0oK1DwzLM-gpjr8-~UBmkNeBng1T-F2uivhyOeRqDBDbrvSYscxQdNKQ5JpCLl8dUoohSu4juGLANGwahn8G87H3LPSF0tTOfBjufKKJIoqRfMPGSi1O3YHDwnAjA9TUslyX2TGg5I0vMx2Wgok7kzUF25Ykze9PnrcJhsCCCbKozuH2FwZT6PoQ__"
                        alt=""
                        className="h-[356px] w-[630px] rounded rounded-[8px] lg:rounded-none"
                    />
                </div>

                {/* Play Button */}
                <button
                    className="m-auto  font-bold py-4 px-4 rounded rounded-[50%] absolute top-1/2 left-[25%] transform -translate-x-1/2 -translate-y-1/2"
                    onClick={openModal}
                >
                    <FaPlayCircle className='text-[64px] text-custom-gold' />
                </button>
            </div>

            {/* Modal */}
            {isOpen && (
                <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
                    <div className="relative bg-white rounded-lg  ">
                        {/* Video Player */}
                        <div className="aspect-w-6 aspect-h-9  ">
                            <iframe
                                title="video player"
                                src={videoUrl}
                                frameBorder="0"
                                allowFullScreen
                                height={'400px'}
                                className="rounded-lg max-w-[600px] md:w-[600px] w-[100%]"
                            ></iframe>
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
            <div>
                <h1 className=' text-[52px] text-white font-[200]'>Добро пожаловать <br /> в <span className='text-custom-gold'>VOHA</span></h1>
                <p className='mt-[20px] text-[white]'>НОВЫЙ ЖИЛОЙ КОМПЛЕКС ПРЕМИУМ- <br />
                    КЛАССА - NRG VOHA, СТАНЕТ ИДЕАЛЬНЫМ  <br />
                    ВЫБОРОМ ДЛЯ ТЕХ, КТО ИЩЕТ ЛУЧШЕЕ <br />
                    СОЧЕТАНИЕ КОМФОРТАБЕЛЬНОГО ЖИЛЬЯ И <br />
                    ИЗЫСКАННОЙ АТМОСФЕРЫ ДЛЯ СЕБЯ И <br />
                    СВОИХ БЛИЗКИХ.</p>
            </div>
        </section>
    );
};

export default VideoModal;
