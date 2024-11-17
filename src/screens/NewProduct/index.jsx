
import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import axios from 'axios'
import { BASE_API_URL } from '../../utils/CONSTANTS'



export default function NewProductModal({open,setOpen}) {
  const [formData,setFormdata] = useState({
    transmission:"Manual",
    fuelType:"Petrol/CNG",
  })
  const submitForm = async()=>{
    console.log(formData)
    let data = new FormData()
    data.append("name",formData?.name)
    data.append("price",formData?.price)
    data.append("transmission",formData?.transmission)
    data.append("mileage",formData?.mileage)
    data.append("description",formData?.description)
    data.append("engine_size",formData?.engine_size)
    data.append("fuelType",formData?.fuelType)
    const user_id = window.localStorage.getItem("userid")
    data.append("user_id",user_id)
    Array.from(formData?.images||[]).forEach((image, index) => {
        data.append('images', image);
    });
    const res = await axios.post(BASE_API_URL+"/cars",data,{
        headers: { 'Content-Type': 'multipart/form-data' }
    })
    console.log(res)
  }  
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-[50]">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            
                {/* <!-- Modal content --> */}
                
                    {/* <!-- Modal header --> */}
                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                            Add A New Car
                        </h3>
                        
                    </div>
                    {/* <!-- Modal body --> */}
                    <div class="p-4 md:p-5">
                        <div class="flex items-center justify-center w-full">
                            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                    </svg>
                                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                                <input id="dropzone-file" type="file" multiple accept="image/*" onChange={(ev)=>{setFormdata({...formData,images:ev.target.files})}} class="hidden" />
                            </label>
                        </div> 
                        <div class="grid gap-4 mb-4 grid-cols-2">
                            <div class="col-span-2">
                                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                <input type="text" onChange={(ev)=>{setFormdata({...formData,name:ev.target.value})}} name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required="" />
                            </div>
                            <div class="col-span-2 sm:col-span-1">
                                <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                <input type="number" onChange={(ev)=>{setFormdata({...formData,price:ev.target.value})}} name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required="" />
                            </div>
                            <div class="col-span-2 sm:col-span-1">
                                <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fuel Type</label>
                                <select id="category" onChange={(ev)=>{setFormdata({...formData,fuelType:ev.target.value})}} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    
                                    <option value="Petrol/CNG">Petrol/CNG</option>
                                    <option value="Electric">Electric</option>
                                    
                                </select>
                            </div>
                            <div class="col-span-2 sm:col-span-1">
                                <label for="Transmission" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Transmission Type</label>
                                <select id="Transmission"  onChange={(ev)=>{setFormdata({...formData,transmission:ev.target.value})}} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    
                                    <option value="Manual">Manual</option>
                                    <option value="Automatic">Automatic</option>
                                    
                                </select>
                            </div>
                            <div class="col-span-2 sm:col-span-1 relative">
                                <label for="engine-size-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Engine Size</label>
                                <input type="text" onChange={(ev)=>{setFormdata({...formData,engine_size:ev.target.value})}} id="engine-size-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pe-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="100" required />
                                <div class="absolute inset-y-0 end-0 top-6 flex items-center pe-3.5 pointer-events-none">
                                    <span className='text-gray-900' >CC</span>
                                </div>
                            </div>
                            <div class="col-span-2 sm:col-span-1 relative">
                                <label for="Mileage-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mileage</label>
                                <input type="text" onChange={(ev)=>{setFormdata({...formData,mileage:ev.target.value})}} id="Mileage-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pe-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="100" required />
                                <div class="absolute inset-y-0 end-0 top-6 flex items-center pe-3.5 pointer-events-none">
                                    <span className='text-gray-900' >Km/L</span>
                                </div>
                            </div>
                            
                            <div class="col-span-2">
                                <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
                                <textarea id="description" onChange={(ev)=>{setFormdata({...formData,description:ev.target.value})}} rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write product description here"></textarea>                    
                            </div>
                            
                        </div>
                        <button type="submit" onClick={submitForm} class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                            Add new product
                        </button>
                    </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
