import React, { useState } from 'react'
import carbg from "../../assets/carbg2.jpg"
import axios from "axios";
import { BASE_API_URL } from '../../utils/CONSTANTS';
import { ErrorMessagetoast, SuccessMessagetoast } from '../components/Messagetoast';
export default function SignupPage() {
    const [formData,setFormData] = useState({})
    const [isloading,setisLoading] = useState(false)
    const [messagetoast,showmessageToast] = useState(null)
    const submitForm = async()=>{
        console.log(formData)
        setisLoading(true)
        try{
            const res = await axios.post(BASE_API_URL+"/signup",formData)
            console.log(res.data) //{message: 'User created successfully!', uid: '9dT8OmcJ6wVACISi9rjJ7sYCK7W2'}
            showmessageToast(<SuccessMessagetoast message={res.data?.message} handleclose={()=>showmessageToast(null)} />)
        }
        catch (e){
            const erromsg = e.response?.data?.error || ""
            console.log(erromsg)
            showmessageToast(<ErrorMessagetoast message={erromsg} handleclose={()=>showmessageToast(null)} />)
        }
        finally{
            setisLoading(false)
        }
    }
  return (
    <div className='flex justify-center items-center h-screen'>
        <section class="flex flex-col items-center w-1/2 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-3xl  dark:border-gray-700 dark:bg-gray-800 ">
            <img class="object-cover w-[40%] rounded-t-lg h-[30rem]  md:rounded-none md:rounded-s-lg" src={carbg} alt=""/>
            <div class="w-[60%] max-w-sm  p-4 bg-white sm:p-6 md:p-8 dark:bg-gray-800 ">
                <div class="space-y-6" >
                    <h5 class="text-xl font-medium text-gray-900 dark:text-white">Create the new account</h5>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input 
                        value={formData?.email}
                        onChange={(ev)=>{setFormData({...formData,email:ev.target.value})}}
                        type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input
                        value={formData?.password}
                        onChange={(ev)=>{
                            setFormData({...formData,password:ev.target.value})
                        }}
                        type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    
                    {!isloading?
                        <button onClick={submitForm} class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register your account</button>
                        :
                        <button disabled type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
                            <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                            </svg>
                            Please Wait...
                        </button>
                    }
                    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Already registered? <a href="/login" class="text-blue-700 hover:underline dark:text-blue-500">Login</a>
                    </div>
                </div>
            </div>
        </section>
        {messagetoast}
    </div>
  )
}
