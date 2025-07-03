'use client'
import CardSwiper from "@/components/CardSwiper"
import LineGraph from '@/components/LineGraph'
import BarColumn from "@/components/BarColumn"
import { FaShoppingBag , FaShoppingCart} from "react-icons/fa";

const Home = () => {

  const steps = [
    { status: 'Product at warehouse', completed: true },
    { status: 'Product dispatched', completed: true },
    { status: 'Out for delivery', completed: false },
    { status: 'Delivered', completed: false },
  ];

  return (
    <div className="flex-1 bg-gray-50 pb-2">


            <div
          className="h-[300px] w-full bg-cover bg-center bg-no-repeat text-white flex items-center justify-center px-4 relative"
          style={{
            backgroundImage:
              "url('https://t3.ftcdn.net/jpg/02/32/24/48/360_F_232244890_8CJ7VJAU79lhGHg8D19Ch9JrfUCYOn7M.jpg')",
          }}
        >
          {/* You can place your text or content here */}
          <div className="text-center">
            <h1 className="text-3xl font-bold">Welcome to Our Platform</h1>
            <p className="text-lg mt-2">Start your journey with us today.</p>
          </div>

          <div className="flex justify-center absolute bottom-[-70px]"> <CardSwiper/> </div>
        </div>


          <div className="mt-24  px-6 flex md:flex-row flex-col justify-between gap-3">

            <div className=" md:w-2/3 h-full">

                <LineGraph/>
                <BarColumn/>

            </div>

            <div className=" md:w-1/3 mt-3 flex flex-col gap-5">
                <div className="bg-white rounded-xl">
                  <img src="https://www.icicibank.com/content/dam/icicibank/india/managed-assets/images/blog/what-are-credit-card-swipe-charges-d.webp" className="rounded-xl"/>
                  
                  <div className="px-5 py-3 flex flex-col gap-4 md:justify-start justify-between" id="the div containing whole thing">

                    <div className="flex justify-between md:flex-col flex-row gap-4">
                      <div className="flex flex-col gap-4">

                        <div className="flex items-center gap-7" id="the shopping bag">
                            <FaShoppingBag className="text-[24px]  "/>
                            <div className="flex flex-col">
                              <p>1153</p>
                              <p>Products</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-7" id="the cart bag">
                            <FaShoppingCart className="text-[24px]  "/>
                            <div className="flex flex-col">
                              <p>81K</p>
                              <p>Orders Saved</p>
                            </div>
                        </div>

                      </div>

                        <div className="flex flex-col gap-5">
                                  <p className="text-[28px] font-semibold">$406,102,345</p>
                                    <div>
                                      <p className="bg-green-600 px-3 py-1 text-white w-fit rounded-full">YoY 24%</p>
                                      <p className="text-gray-400">Life Time Sales</p>
                                    </div>
                        </div>
                    </div>
                        <div className="flex justify-between gap-3 ">
                                        <button className="bg-blue-600 text-white px-3 py-2 w-full rounded-lg">Summary</button>
                                        <button className="bg-violet-950 text-white px-3 py-2 w-full rounded-lg">Analytics</button>
                        </div>
                  </div>

                </div>

                <div className="bg-white flex px-3 py-2 ">

                    <div className="flex flex-col items-center px-3 py-2 text-[20px] w-full">
                          <p>750K</p>
                          <p>Website Viewer</p>
                    </div>

                    <div className="w-px bg-gray-300 h-auto mx-2"></div>        

                    <div className="flex flex-col items-center px-3 py-2 text-[20px] w-full">
                          <p>7500</p>
                          <p>Customers</p>
                    </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                       <h2 className="text-xl font-semibold mb-6">Delivery Status</h2>

                        <div className="relative ml-4">
                          {/* Vertical line */}
                          <div className="absolute top-0 left-1.5 w-0.5 h-full bg-gray-300 z-0"></div>

                          {/* Steps */}
                          <div className="flex flex-col space-y-8">
                            {steps.map((step, index) => (
                              <div key={index} className="relative flex items-start gap-4">
                                {/* Circle on top of the line */}
                                <div className="relative z-10 w-4 h-4 rounded-full flex-shrink-0 mt-1 bg-white">
                                  <div className={`w-3 h-3 rounded-full mx-auto mt-[2px] ${step.completed ? 'bg-blue-500' : 'bg-gray-400'}`} />
                                </div>

                                {/* Status Text */}
                                <div className="text-sm text-gray-700">{step.status}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                  </div>

            </div>

          </div>
          

    </div>
  )
}

export default Home