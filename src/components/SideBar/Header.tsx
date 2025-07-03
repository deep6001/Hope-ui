import { HiMagnifyingGlass } from "react-icons/hi2";
import { GiCondorEmblem } from "react-icons/gi";
import { FaCloud } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const Header = () => {

  const [modelopen , setmodelopen] = useState(false);
  return (
    <div className="flex border-b-2 justify-between items-center px-3">

            <div className="flex items-center gap-2">

                <div className="flex items-center whitespace-nowrap w-full">
                    <img src = "https://png.pngtree.com/png-vector/20190225/ourmid/pngtree-circuit-logo-template-vector-png-image_704226.jpg" 
                    alt="Logo" className="h-16 w-16 "/>

                    <h1 className="font-semibold">HOPE UI</h1>
                </div>

                 <div className="relative w-full max-w-sm md:flex hidden">
                    {/* Icon inside input */}
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                        <HiMagnifyingGlass />
                    </span>

                    {/* Input field with left padding for the icon */}
                    <input
                        type="text"
                        placeholder="Search here"
                        className="w-full pl-10 pr-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                    </div>
              </div>

              <RxHamburgerMenu className="text-[30px] md:hidden flex cursor-pointer" onClick={() => {setmodelopen(!modelopen)
                console.log(modelopen)
              }}/>


              <div className="md:flex items-center gap-4 hidden">
                      <button className="px-4 py-1 bg-blue-600 text-white rounded-md whitespace-nowrap"> Go Pro</button>
                      <GiCondorEmblem className="text-[24px]"/>
                      <FaCloud className="text-[24px]"/>
                      <MdEmail className="text-[24px]"/>
                      <div className=''>
                                                <img src='https://img.freepik.com/free-vector/smiling-redhaired-boy-illustration_1308-176664.jpg?semt=ais_hybrid&w=740'
                                                className='w-10 h-10 rounded-full'/>
                                            </div>

                      <div>
                        <h1 className="text-[20px]">Austin Martin</h1>
                        <h1 className="text-gray-400">Marketing Administrator</h1>
                      </div>

              </div>


            {
                  modelopen && (
                    <div className="flex flex-col items-center gap-4 md:hidden absolute right-3 top-20 shadow-xl px-3 py-2 rounded-2xl bg-slate-50 z-30">
                      <button className="px-4 py-1 bg-blue-600 text-white rounded-md whitespace-nowrap"> Go Pro</button>
                      <GiCondorEmblem className="text-[24px]"/>
                      <FaCloud className="text-[24px]"/>
                      <MdEmail className="text-[24px]"/>
                      <div className=''>
                                                <img src='https://img.freepik.com/free-vector/smiling-redhaired-boy-illustration_1308-176664.jpg?semt=ais_hybrid&w=740'
                                                className='w-10 h-10 rounded-full'/>
                                            </div>

                    </div>
                  )
            }
              
    </div>
  )
}

export default Header