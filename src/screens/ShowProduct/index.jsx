
import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import ImageSlider from '../Homepage/imageSlider'
import { BASE_API_URL } from '../../utils/CONSTANTS'

export default function ShowProductModal({open,setOpen,data,handleDelete,handleEdit}) {
    const [currimg,setcurrimg] = useState(`${BASE_API_URL}${data?.images[0]}`)
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
                        {data.name}
                    </h3>
                    <div className='gap-x-2'>
                    <button type="button" onClick={()=>{handleEdit(data)}} class="text-black  focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-gray-800 dark:hover:bg-gray-900 dark:focus:ring-gray-900">
                    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.3 3.7l4 4L4 20H0v-4L12.3 3.7zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z"/></svg>
                        Edit
                    </button>
                    <button type="button" onClick={()=>{handleDelete(data.car_id)}} class="text-red-700  focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-gray-800 dark:hover:bg-gray-900 dark:focus:ring-gray-900">
                    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.3 3.7l4 4L4 20H0v-4L12.3 3.7zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z"/></svg>
                        Delete
                    </button>
                    </div>
                </div>
                {/* <!-- Modal body --> */}
                

                <div class="grid gap-4">
                    <div className='flex justify-center'>
                        <img class="h-auto max-w-full rounded-lg" src={currimg} alt="" />
                    </div>
                    <div class="flex flex-row gap-4 overflow-x-scroll">
                        {data.images.map((image,idx)=><img class="w-40 cursor-pointer rounded-lg object-cover" onClick={(ev)=>setcurrimg(ev.target.src)} src={`${image}`} alt="" />)}
                    </div>
                </div>
                <div class="block max-w-full px-6 py-4 my-5 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
                    <div class="text-3xl font-bold text-gray-900 dark:text-white mb-5">${data.price}</div>
                    <span className='text-lg font-medium text-gray-900 dark:text-white underline'>Key Details</span>
                    <div className='grid grid-cols-2 mt-4'>
                        <div className='grid grid-cols-2 my-1'>
                            <label for="email" class="block mb-2 text-base font-medium text-gray-500 dark:text-white">Engine Size</label>
                            <span>{data.engine_size} CC</span>
                        </div>
                        <div className='grid grid-cols-2 my-1'>
                            <label for="email" class="block mb-2 text-base font-medium text-gray-500 dark:text-white">Transmission Type</label>
                            <span>{data.transmission}</span>
                        </div>
                        <div className='grid grid-cols-2 my-1'>
                            <label for="email" class="block mb-2 text-base font-medium text-gray-500 dark:text-white">Mileage</label>
                            <span>{data.mileage} kmph</span>
                        </div>
                        <div className='grid grid-cols-2 my-1'>
                            <label for="email" class="block mb-2 text-base font-medium text-gray-500 dark:text-white">Fuel Type</label>
                            <span>{data.fuelType}</span>
                        </div>
                    </div>
                    <span className='text-lg font-medium text-gray-900 dark:text-white underline'>Description</span>
                    <p className='mt-4'>{data.description}</p>
                </div>
            </DialogPanel>
            </div>
        </div>
        </Dialog>
    )
}

