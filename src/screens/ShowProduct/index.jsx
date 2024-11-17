
import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import ImageSlider from '../Homepage/imageSlider'

export default function ShowProductModal({open,setOpen,image}) {
    
    return (
        <Dialog open={open} onClose={setOpen} className="relative z-[50] ">
        <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex items-end justify-center text-center sm:items-center sm:p-0">
            <DialogPanel
                transition
                className="relative max-h-[90vh] overflow-y-scroll transform overflow-hidden p-4 rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8  sm:max-w-3xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
                <div className="flex items-center justify-between p-2 md:p-3 rounded-t dark:border-gray-600">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Alto 800
                    </h3>
                    <div className='gap-x-2'>
                    <button type="button" class="text-black  focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-gray-800 dark:hover:bg-gray-900 dark:focus:ring-gray-900">
                    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.3 3.7l4 4L4 20H0v-4L12.3 3.7zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z"/></svg>
                        Edit
                    </button>
                    <button type="button" class="text-red-700  focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-gray-800 dark:hover:bg-gray-900 dark:focus:ring-gray-900">
                    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.3 3.7l4 4L4 20H0v-4L12.3 3.7zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z"/></svg>
                        Delete
                    </button>
                    </div>
                </div>
                {/* <!-- Modal body --> */}
                

                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg" alt="" />
                    </div>
                    <div class="flex flex-row gap-4 overflow-x-scroll">
                        
                        <img class="w-40 rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
                        <img class="w-40 rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="" />
                        <img class="w-40 rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="" />
                        <img class="w-40 rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="" />
                        <img class="w-40 rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt="" />
                        <img class="w-40 rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg" alt="" />
                        <img class="w-40 rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
                        <img class="w-40 rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="" />
                        <img class="w-40 rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="" />
                        <img class="w-40 rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="" />
                        
                        
                    </div>
                </div>
                <div class="block max-w-full px-6 py-4 my-5 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
                    <div class="text-3xl font-bold text-gray-900 dark:text-white mb-5">$599</div>
                    <span className='text-lg font-medium text-gray-900 dark:text-white underline'>Key Details</span>
                    <div className='grid grid-cols-2 mt-4'>
                        <div className='grid grid-cols-2 my-1'>
                            <label for="email" class="block mb-2 text-base font-medium text-gray-500 dark:text-white">Engine Size</label>
                            <span>998 CC</span>
                        </div>
                        <div className='grid grid-cols-2 my-1'>
                            <label for="email" class="block mb-2 text-base font-medium text-gray-500 dark:text-white">Transmission Type</label>
                            <span>Manual</span>
                        </div>
                        <div className='grid grid-cols-2 my-1'>
                            <label for="email" class="block mb-2 text-base font-medium text-gray-500 dark:text-white">Mileage</label>
                            <span>24.39 kmph</span>
                        </div>
                        <div className='grid grid-cols-2 my-1'>
                            <label for="email" class="block mb-2 text-base font-medium text-gray-500 dark:text-white">Fuel Type</label>
                            <span>Petrol</span>
                        </div>
                    </div>
                    <span className='text-lg font-medium text-gray-900 dark:text-white underline'>Description</span>
                    <p className='mt-4'>Key features on board the K10 include a 7-inch touchscreen infotainment system, keyless entry, a semi-digital instrument cluster, steering-mounted controls, and manually adjustable outside rear view mirrors (ORVMs). The Dream Edition variant comes with an additional set of speakers as well.</p>
                </div>
            </DialogPanel>
            </div>
        </div>
        </Dialog>
    )
}

