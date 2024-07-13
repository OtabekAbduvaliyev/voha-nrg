import { useState } from 'react';
import { FaPlayCircle } from "react-icons/fa";
import Logo from '../assets/bc089832ff449a8a09ed4ee43cbc51a1.png'
import { useTranslation } from 'react-i18next';
const VideoModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const videoUrl = 'https://www.youtube.com/embed/ZAOmg7IZkNQ'
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    const { t } = useTranslation()
    return (
        <section className="max-w-[1430px] mx-auto flex lg:justify-between items-center flex-wrap  text-start bemalol">
            <div className="relative" >
                {/* Video Modal Image */}
                <div className=" ">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/cb74/ab5a/e11e92a50b3e0621ccb7da3525866d90?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ihzsT7FWmSUdHvF1hOTmnLpMMGf6thyAuPXWDW2fulNhNBLsZZFTxmY43S-BB3HAcyWlIq3vy4Bn4hMXSMyEyhUUPxiL5EsXMWuXeTp2aMhSF309PKljwVpLPFNf5U1UIR-ii4yCTKLmT3sGcOf6mZBsUoVcZK0oK1DwzLM-gpjr8-~UBmkNeBng1T-F2uivhyOeRqDBDbrvSYscxQdNKQ5JpCLl8dUoohSu4juGLANGwahn8G87H3LPSF0tTOfBjufKKJIoqRfMPGSi1O3YHDwnAjA9TUslyX2TGg5I0vMx2Wgok7kzUF25Ykze9PnrcJhsCCCbKozuH2FwZT6PoQ__"
                        alt=""
                        className="h-[450px] w-[800px] videoimg rounded rounded-[8px] lg:rounded-none"
                    />
                </div>

                {/* Play Button */}
                <button
                    className="m-auto  font-bold py-4 px-4 rounded rounded-[50%] absolute top-1/2 left-[50%] transform -translate-x-1/2 -translate-y-1/2"
                    onClick={openModal}
                >
                    <FaPlayCircle className='text-[64px] text-custom-gold' />
                </button>
            </div>

            {/* Modal */}




            {isOpen && <div className="fixed  inset-0 z-inde flex items-center justify-center bg-black bg-opacity-70" onClick={closeModal}>
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
        </div>}
            <div>
                <h1 className=' text-[65px] text-white font-[500] leading-[70px] vInfHeading'>{t('videoHeading')} <span className='text-custom-gold'>VOHA</span> </h1>
                <p className='mt-[46px] font-montserrat text-[white] text-[22px] vInftext '>{t('videoInfor')}</p>
            </div>
        </section>
    );
};

export default VideoModal;
