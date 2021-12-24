import React from "react";

import avatar from '../img/mocup_avatar.png'
import sale from '../img/unnamed.png'

const Post = () => {

    const elements = (
        <div className='shadow rounded-b w-full h-auto mt-5 px-5 py-4'>
            <div className='mb-2 grid grid-cols-12'>
                <div className='col-span-1 pt-0.5'>
                    <img className="block h-12 rounded-full"
                         src={avatar}
                         alt="Woman's Face"/>
                </div>
                <div className='col-span-10 pl-4'>
                    <p className='font-light text-sm'>Anderson Vanhron</p>
                    <p className='font-light text-xs text-gray-400'>Doctor</p>
                    <p className='font-light text-xs text-gray-500'>10.10.2010</p>
                </div>
                <div className='grid justify-items-stretch'>
                    <p className='text-xs font-light text-gray-300 justify-self-end'>4h. ago</p>
                </div>
            </div>
            <div className='py-2 px-3'>
                <p className='text-sm font-light text-gray-800'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <div className='flex justify-end grid grid-cols-8 mt-4'>
                <div className='col-start-7 grid grid-cols-3'>
                    <div>
                        <svg className='w-5 mx-auto fill-current text-gray-500 hover:fill-current hover:text-red-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 58.89">
                            <g id="Layer_2" data-name="Layer 2">
                                <g id="Layer_1-2" data-name="Layer 1">
                                    <path
                                        d="M32,58.89a2.47,2.47,0,0,1-1.74-.72L5.77,33.68A19.74,19.74,0,0,1,32,4.28a19.73,19.73,0,0,1,26.22,29.4L33.74,58.17A2.47,2.47,0,0,1,32,58.89Zm-12.29-54A14.8,14.8,0,0,0,9.25,30.2L32,53,54.75,30.2h0a14.81,14.81,0,0,0-21-20.95A3,3,0,0,1,32,10a2.48,2.48,0,0,1-1.78-.7A14.83,14.83,0,0,0,19.71,4.93Z"/>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div className='col-span-2 pl-1.5'>
                        <p className='font-bold text-xs'>5.2k</p>
                    </div>
                </div>
                <div className='col-start-8 grid grid-cols-3'>
                    <div>
                        <svg className='w-5 mx-auto fill-current text-gray-500 hover:fill-current hover:text-blue-400'
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                            <g id="Layer_2" data-name="Layer 2">
                                <g id="Layer_1-2" data-name="Layer 1">
                                    <path
                                        d="M30.18.78,11.4,19.5a2.67,2.67,0,0,0,3.76,3.78L29.28,9.21V50.35a2.67,2.67,0,1,0,5.33,0V9L48.72,23.27a2.67,2.67,0,0,0,3.77,0,2.63,2.63,0,0,0,.79-1.89,2.68,2.68,0,0,0-.77-1.88L34,.79a2.67,2.67,0,0,0-3.78,0Z"/>
                                    <path
                                        d="M56,64H8a8,8,0,0,1-8-8V37.33a2.67,2.67,0,0,1,5.33,0V56A2.67,2.67,0,0,0,8,58.67H56A2.67,2.67,0,0,0,58.67,56V37.33a2.67,2.67,0,0,1,5.33,0V56A8,8,0,0,1,56,64Z"/>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div className='col-span-2 pl-1.5'>
                        <p className='font-bold text-xs'>200</p>
                    </div>
                </div>
            </div>
            <div className='mt-5 py-5 grid grid-cols-12 border-gray-200 border-t'>
                <div className='col-span-1 pt-0.5'>
                    <img className="block h-8 rounded-full"
                         src={avatar}
                         alt="Woman's Face"/>
                </div>
                <div className='col-span-11 text-xs'>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <div className='grid grid-cols-12'>
                        <div className='flex justify-end col-start-11'>
                            <svg className='w-3 fill-current text-gray-500 hover:fill-current hover:text-red-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 58.89">
                                <g id="Layer_2" data-name="Layer 2">
                                    <g id="Layer_1-2" data-name="Layer 1">
                                        <path
                                            d="M32,58.89a2.47,2.47,0,0,1-1.74-.72L5.77,33.68A19.74,19.74,0,0,1,32,4.28a19.73,19.73,0,0,1,26.22,29.4L33.74,58.17A2.47,2.47,0,0,1,32,58.89Zm-12.29-54A14.8,14.8,0,0,0,9.25,30.2L32,53,54.75,30.2h0a14.81,14.81,0,0,0-21-20.95A3,3,0,0,1,32,10a2.48,2.48,0,0,1-1.78-.7A14.83,14.83,0,0,0,19.71,4.93Z"/>
                                    </g>
                                </g>
                            </svg>
                            <p className='text-xs text-gray-700 ml-0.5'>23</p>
                        </div>
                        <div className='flex justify-center col-start-12'>
                            <svg className='w-3 fill-current hover:fill-current hover:text-blue-800' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 61.49">
                                <g id="Layer_2" data-name="Layer 2">
                                    <g id="Layer_1-2" data-name="Layer 1">
                                        <path
                                            d="M36,16.7a11.82,11.82,0,0,0,1.48-8.43,10.21,10.21,0,0,0-4.8-6.87c-5.05-3-11.8-1-15,4.42l-2.31,3.9L33.69,20.6Zm-4.22-3.43-9.09-5.4C24.51,5.47,27.63,4.6,30,6a4.91,4.91,0,0,1,2.29,3.35A6.4,6.4,0,0,1,31.78,13.27Z"/>
                                        <path
                                            d="M1.51,53.93l1.57.78,15.27-8.25L31,25.19,12.62,14.3,0,35.58.08,51.41A3,3,0,0,0,1.51,53.93Zm13-32.32,9.17,5.44L14.51,42.47,5.39,47.4,5.34,37Z"/>
                                        <rect y="56.16" width="64" height="5.33" rx="2.67" ry="2.67"/>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-12 mt-5'>
                <div className='col-span-1 pt-0.5 mr-2 flex justify-end'>
                    <img className="block h-8 rounded-full"
                         src={avatar}
                         alt="Woman's Face"/>
                </div>
                <div className='col-span-11'>
                    <input className='border font-light text-xs rounded border-gray-400 px-3 py-2.5 w-full hover:shadow-inner' type='text' placeholder='Write your comment...'/>
                </div>
            </div>
        </div>
    )


    return (
        <div className="mx-3 my-5 col-span-6">
            <div className='shadow rounded-b w-full h-auto mt-5 px-5 py-4'>
                <div className='mb-2 grid grid-cols-12'>
                    <div className='col-span-1 pt-0.5'>
                        <img className="block h-12 rounded-full"
                             src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                             alt="Woman's Face"/>
                    </div>
                    <div className='col-span-10 pl-4'>
                        <p className='font-light text-sm'>Anderson Vanhron</p>
                        <p className='font-light text-xs text-gray-400'>Doctor</p>
                        <p className='font-light text-xs text-gray-500'>10.10.2010</p>
                    </div>
                    <div className='grid justify-items-stretch'>
                        <p className='text-xs font-light text-gray-300 justify-self-end'>4h. ago</p>
                    </div>
                </div>
                <div className='py-2 px-3'>
                    <p className='text-sm font-light text-gray-800'>
                        Adolescence is the phase of life between childhood and adulthood, from ages 10 to 19. It is a unique stage of human development and an important time for laying the foundations of good health.

                        Adolescents experience rapid physical, cognitive and psychosocial growth. This affects how they feel, think, make decisions, and interact with the world around them.

                        Despite being thought of as a healthy stage of life, there is significant death, illness and injury in the adolescent years. Much of this is preventable or treatable. During this phase, adolescents establish patterns of behaviour – for instance, related to diet, physical activity, substance use, and sexual activity – that can protect their health and the health of others around them, or put their health at risk now and in the future.

                        To grow and develop in good health, adolescents need information, including age-appropriate comprehensive sexuality education; opportunities to develop life skills; health services that are acceptable, equitable, appropriate and effective; and safe and supportive environments. They also need opportunities to meaningfully participate in the design and delivery of interventions to improve and maintain their health. Expanding such opportunities is key to responding to adolescents’ specific needs and rights.
                    </p>
                </div>
                <div className='flex justify-end grid grid-cols-8 mt-4'>
                    <div className='col-start-7 grid grid-cols-3'>
                        <div>
                            <svg className='w-5 mx-auto fill-current text-gray-500 hover:fill-current hover:text-red-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 58.89">
                                <g id="Layer_2" data-name="Layer 2">
                                    <g id="Layer_1-2" data-name="Layer 1">
                                        <path
                                            d="M32,58.89a2.47,2.47,0,0,1-1.74-.72L5.77,33.68A19.74,19.74,0,0,1,32,4.28a19.73,19.73,0,0,1,26.22,29.4L33.74,58.17A2.47,2.47,0,0,1,32,58.89Zm-12.29-54A14.8,14.8,0,0,0,9.25,30.2L32,53,54.75,30.2h0a14.81,14.81,0,0,0-21-20.95A3,3,0,0,1,32,10a2.48,2.48,0,0,1-1.78-.7A14.83,14.83,0,0,0,19.71,4.93Z"/>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div className='col-span-2 pl-1.5'>
                            <p className='font-bold text-xs'>5.2k</p>
                        </div>
                    </div>
                    <div className='col-start-8 grid grid-cols-3'>
                        <div>
                            <svg className='w-5 mx-auto fill-current text-gray-500 hover:fill-current hover:text-blue-400'
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                                <g id="Layer_2" data-name="Layer 2">
                                    <g id="Layer_1-2" data-name="Layer 1">
                                        <path
                                            d="M30.18.78,11.4,19.5a2.67,2.67,0,0,0,3.76,3.78L29.28,9.21V50.35a2.67,2.67,0,1,0,5.33,0V9L48.72,23.27a2.67,2.67,0,0,0,3.77,0,2.63,2.63,0,0,0,.79-1.89,2.68,2.68,0,0,0-.77-1.88L34,.79a2.67,2.67,0,0,0-3.78,0Z"/>
                                        <path
                                            d="M56,64H8a8,8,0,0,1-8-8V37.33a2.67,2.67,0,0,1,5.33,0V56A2.67,2.67,0,0,0,8,58.67H56A2.67,2.67,0,0,0,58.67,56V37.33a2.67,2.67,0,0,1,5.33,0V56A8,8,0,0,1,56,64Z"/>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div className='col-span-2 pl-1.5'>
                            <p className='font-bold text-xs'>200</p>
                        </div>
                    </div>
                </div>
                <div className='mt-5 py-5 grid grid-cols-12 border-gray-200 border-t'>
                    <div className='col-span-1 pt-0.5'>
                        <img className="block h-8 rounded-full"
                             src={avatar}
                             alt="Woman's Face"/>
                    </div>
                    <div className='col-span-11 text-xs'>
                        <p>
                            Great article! Don't forget to check our discount.
                        </p>
                        <div className='grid grid-cols-12'>
                            <div className='flex justify-end col-start-11'>
                                <svg className='w-3 fill-current text-gray-500 hover:fill-current hover:text-red-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 58.89">
                                    <g id="Layer_2" data-name="Layer 2">
                                        <g id="Layer_1-2" data-name="Layer 1">
                                            <path
                                                d="M32,58.89a2.47,2.47,0,0,1-1.74-.72L5.77,33.68A19.74,19.74,0,0,1,32,4.28a19.73,19.73,0,0,1,26.22,29.4L33.74,58.17A2.47,2.47,0,0,1,32,58.89Zm-12.29-54A14.8,14.8,0,0,0,9.25,30.2L32,53,54.75,30.2h0a14.81,14.81,0,0,0-21-20.95A3,3,0,0,1,32,10a2.48,2.48,0,0,1-1.78-.7A14.83,14.83,0,0,0,19.71,4.93Z"/>
                                        </g>
                                    </g>
                                </svg>
                                <p className='text-xs text-gray-700 ml-0.5'>23</p>
                            </div>
                            <div className='flex justify-center col-start-12'>
                                <svg className='w-3 fill-current hover:fill-current hover:text-blue-800' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 61.49">
                                    <g id="Layer_2" data-name="Layer 2">
                                        <g id="Layer_1-2" data-name="Layer 1">
                                            <path
                                                d="M36,16.7a11.82,11.82,0,0,0,1.48-8.43,10.21,10.21,0,0,0-4.8-6.87c-5.05-3-11.8-1-15,4.42l-2.31,3.9L33.69,20.6Zm-4.22-3.43-9.09-5.4C24.51,5.47,27.63,4.6,30,6a4.91,4.91,0,0,1,2.29,3.35A6.4,6.4,0,0,1,31.78,13.27Z"/>
                                            <path
                                                d="M1.51,53.93l1.57.78,15.27-8.25L31,25.19,12.62,14.3,0,35.58.08,51.41A3,3,0,0,0,1.51,53.93Zm13-32.32,9.17,5.44L14.51,42.47,5.39,47.4,5.34,37Z"/>
                                            <rect y="56.16" width="64" height="5.33" rx="2.67" ry="2.67"/>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-12 mt-5'>
                    <div className='col-span-1 pt-0.5 mr-2 flex justify-end'>
                        <img className="block h-8 rounded-full"
                             src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                             alt="Woman's Face"/>
                    </div>
                    <div className='col-span-11'>
                        <input className='border font-light text-xs rounded border-gray-400 px-3 py-2.5 w-full hover:shadow-inner' type='text' placeholder='Write your comment...'/>
                    </div>
                </div>
            </div>


            <div className='shadow rounded-b w-full h-auto mt-5 px-5 py-4'>
                <div className='mb-2 grid grid-cols-12'>
                    <div className='col-span-1 pt-0.5'>
                        <img className="block h-12 rounded-full"
                             src={avatar}
                             alt="Woman's Face"/>
                    </div>
                    <div className='col-span-10 pl-4'>
                        <p className='font-light text-sm'>Medihealth</p>
                        <p className='font-light text-xs text-gray-400'>Company</p>
                        <p className='font-light text-xs text-gray-500'>10.10.2010</p>
                    </div>
                    <div className='grid justify-items-stretch'>
                        <p className='text-xs font-light text-gray-300 justify-self-end'>4h. ago</p>
                    </div>
                </div>
                <div className='flex flex-col py-2 px-3'>
                    <p className='text-sm font-light text-gray-800'>
                        We are happy to announce that we are giving 10% off on all our services during next two weeks!
                    </p>
                    <img src={sale}/>
                </div>
                <div className='flex justify-end grid grid-cols-8 mt-4'>
                    <div className='col-start-7 grid grid-cols-3'>
                        <div>
                            <svg className='w-5 mx-auto fill-current text-gray-500 hover:fill-current hover:text-red-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 58.89">
                                <g id="Layer_2" data-name="Layer 2">
                                    <g id="Layer_1-2" data-name="Layer 1">
                                        <path
                                            d="M32,58.89a2.47,2.47,0,0,1-1.74-.72L5.77,33.68A19.74,19.74,0,0,1,32,4.28a19.73,19.73,0,0,1,26.22,29.4L33.74,58.17A2.47,2.47,0,0,1,32,58.89Zm-12.29-54A14.8,14.8,0,0,0,9.25,30.2L32,53,54.75,30.2h0a14.81,14.81,0,0,0-21-20.95A3,3,0,0,1,32,10a2.48,2.48,0,0,1-1.78-.7A14.83,14.83,0,0,0,19.71,4.93Z"/>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div className='col-span-2 pl-1.5'>
                            <p className='font-bold text-xs'>5.2k</p>
                        </div>
                    </div>
                    <div className='col-start-8 grid grid-cols-3'>
                        <div>
                            <svg className='w-5 mx-auto fill-current text-gray-500 hover:fill-current hover:text-blue-400'
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                                <g id="Layer_2" data-name="Layer 2">
                                    <g id="Layer_1-2" data-name="Layer 1">
                                        <path
                                            d="M30.18.78,11.4,19.5a2.67,2.67,0,0,0,3.76,3.78L29.28,9.21V50.35a2.67,2.67,0,1,0,5.33,0V9L48.72,23.27a2.67,2.67,0,0,0,3.77,0,2.63,2.63,0,0,0,.79-1.89,2.68,2.68,0,0,0-.77-1.88L34,.79a2.67,2.67,0,0,0-3.78,0Z"/>
                                        <path
                                            d="M56,64H8a8,8,0,0,1-8-8V37.33a2.67,2.67,0,0,1,5.33,0V56A2.67,2.67,0,0,0,8,58.67H56A2.67,2.67,0,0,0,58.67,56V37.33a2.67,2.67,0,0,1,5.33,0V56A8,8,0,0,1,56,64Z"/>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div className='col-span-2 pl-1.5'>
                            <p className='font-bold text-xs'>200</p>
                        </div>
                    </div>
                </div>
                <div className='mt-5 py-5 grid grid-cols-12 border-gray-200 border-t'>
                    <div className='col-span-1 pt-0.5'>
                        <img className="block h-8 rounded-full"
                             src={avatar}
                             alt="Woman's Face"/>
                    </div>
                    <div className='col-span-11 text-xs'>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <div className='grid grid-cols-12'>
                            <div className='flex justify-end col-start-11'>
                                <svg className='w-3 fill-current text-gray-500 hover:fill-current hover:text-red-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 58.89">
                                    <g id="Layer_2" data-name="Layer 2">
                                        <g id="Layer_1-2" data-name="Layer 1">
                                            <path
                                                d="M32,58.89a2.47,2.47,0,0,1-1.74-.72L5.77,33.68A19.74,19.74,0,0,1,32,4.28a19.73,19.73,0,0,1,26.22,29.4L33.74,58.17A2.47,2.47,0,0,1,32,58.89Zm-12.29-54A14.8,14.8,0,0,0,9.25,30.2L32,53,54.75,30.2h0a14.81,14.81,0,0,0-21-20.95A3,3,0,0,1,32,10a2.48,2.48,0,0,1-1.78-.7A14.83,14.83,0,0,0,19.71,4.93Z"/>
                                        </g>
                                    </g>
                                </svg>
                                <p className='text-xs text-gray-700 ml-0.5'>23</p>
                            </div>
                            <div className='flex justify-center col-start-12'>
                                <svg className='w-3 fill-current hover:fill-current hover:text-blue-800' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 61.49">
                                    <g id="Layer_2" data-name="Layer 2">
                                        <g id="Layer_1-2" data-name="Layer 1">
                                            <path
                                                d="M36,16.7a11.82,11.82,0,0,0,1.48-8.43,10.21,10.21,0,0,0-4.8-6.87c-5.05-3-11.8-1-15,4.42l-2.31,3.9L33.69,20.6Zm-4.22-3.43-9.09-5.4C24.51,5.47,27.63,4.6,30,6a4.91,4.91,0,0,1,2.29,3.35A6.4,6.4,0,0,1,31.78,13.27Z"/>
                                            <path
                                                d="M1.51,53.93l1.57.78,15.27-8.25L31,25.19,12.62,14.3,0,35.58.08,51.41A3,3,0,0,0,1.51,53.93Zm13-32.32,9.17,5.44L14.51,42.47,5.39,47.4,5.34,37Z"/>
                                            <rect y="56.16" width="64" height="5.33" rx="2.67" ry="2.67"/>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-12 mt-5'>
                    <div className='col-span-1 pt-0.5 mr-2 flex justify-end'>
                        <img className="block h-8 rounded-full"
                             src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                             alt="Woman's Face"/>
                    </div>
                    <div className='col-span-11'>
                        <input className='border font-light text-xs rounded border-gray-400 px-3 py-2.5 w-full hover:shadow-inner' type='text' placeholder='Write your comment...'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;