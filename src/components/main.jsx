import React from 'react';
import Border from './border';
import EnjoyOnTV from '../assets/enjoyOnTV.png';
import Mobile from '../assets/mobile.jpg';
import Device from '../assets/device.png';
import Kidz from '../assets/kidz.png';
import Strengerthings from '../assets/StrangerThings.png';
import TV from '../assets/video-enjoy-in-tv.mp4'
import TV2 from '../assets/video-devices-in-tv2.mp4';

export default function main() {
    return(
        <>
        <Border/>
        <div className='bg-black'>
            <div className='xl:mx-[155px] mx-[32px] py-[72px]'>
                <div className='flex flex-col justify-center text-center md:text-left md:grid grid-cols-2 gap-3'>
                    <div className='text-white my-auto'>
                        <h1 className='text-[32px] md:text-[48px] font-black font-bold'>Enjoy on your TV</h1>
                        <p className='my-[16px] text-[18px] md:text-[24px] font-normal font-regular'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                    </div>
                    <div className='relative'>
                        <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[100%] h-[100%] max-w-[73%] max-h-[54%] overflow-hidden'>
                        <video className='inline-block align-baseline' autoPlay loop muted>
                            <source src={TV} type="video/mp4"/>
                        </video>
                        </div>
                        <img className='relative top-2 mx-auto' src={EnjoyOnTV} alt="Enjoy on TV" />
                    </div>
                </div>
            </div>
        <Border/>
            <div className='xl:mx-[155px] mx-[32px] py-[72px]'>
                <div className='flex flex-col-reverse justify-center text-center md:text-left md:grid grid-cols-2 gap-3'>
                    <div className='relative'>
                        <img className="mx-auto" src={Mobile} alt="mobile" />
                        <div className='absolute bottom-[7%] left-[50%] translate-x-[-50%] flex w-[300px] sm:w-[360px] mx-auto bg-black rounded-lg border-2 border-[#414141] py-[8px] px-[12px] gap-3 items-center'>
                            <img className='h-[46px] sm:h-[72px] mb-1' src={Strengerthings} alt="ST" />
                            <div className='text-white w-[200px]'>
                                <h6 className='font-medium font-normal'>Stranger Things</h6>
                                <p className='font-regular font-normal text-[#0068d9]'>Downloading...</p>
                            </div>
                            <div className='bg-[url(./assets/download-icon.gif)] overflow-hidden w-[60px] bg-cover h-[60px] block flex-grow-0'></div>
                        </div>
                    </div>
                    <div className='text-white my-auto'>
                        <h1 className='text-[32px] md:text-[48px] font-black font-bold'>Download your shows to watch offline</h1>
                        <p className='my-[16px] text-[18px] md:text-[24px] font-normal font-regular'>Save your favourites easily and always have something to watch.</p>
                    </div>
                </div>
            </div>
        <Border/>
            <div className='xl:mx-[155px] mx-[32px] py-[72px]'>
                <div className='flex flex-col justify-center text-center md:text-left md:grid grid-cols-2 gap-3'>
                    <div className='text-white my-auto'>
                        <h1 className='text-[32px] md:text-[48px] font-black font-bold'>Watch everywhere</h1>
                        <p className='my-[16px] text-[18px] md:text-[24px] font-normal font-regular'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                    </div>
                    <div className='relative'>
                        <div className="absolute top-[34%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[100%] h-[100%] max-w-[63%] sm:max-w-[46%] md:max-w-[63%] max-h-[47%] overflow-hidden">
                        <video className='inline-block align-baseline' autoPlay loop muted>
                            <source src={TV2} type="video/mp4"/>
                        </video>
                        </div>
                        <img className='relative top-2 mx-auto' src={Device} alt="Device" />
                    </div>
                </div>
            </div>
        <Border />
            <div className='xl:mx-[155px] mx-[32px] py-[72px]'>
                <div className='flex flex-col-reverse justify-center text-center md:text-left md:grid grid-cols-2 gap-3'>
                    <div>
                        <img className='mx-auto' src={Kidz} alt="Kidz" />
                    </div>
                    <div className='text-white my-auto'>
                        <h1 className='text-[32px] md:text-[48px] font-black font-bold'>Create profiles for kids</h1>
                        <p className='my-[16px] text-[18px] md:text-[24px] font-normal font-regular'>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
                    </div>
                </div>
            </div>
        </div>
        <Border/>
        </>
    );
}