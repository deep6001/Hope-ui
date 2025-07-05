"use client"
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import Input from '@/components/Input';
import { useState } from 'react';


const AddUser = () => {


    const [image, setImage] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string>(
      'https://img.freepik.com/free-vector/smiling-redhaired-boy-illustration_1308-176664.jpg?semt=ais_hybrid&w=740'
    );
    const [error, setError] = useState<string | null>(null);
  
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        if (!file.type.startsWith('image/')) {
          setError('Only image files are allowed.');
          return;
        }
  
        setImage(file);
        setPreviewUrl(URL.createObjectURL(file)); // Show uploaded image
        setError(null);
      }
    };

    const formik = useFormik({
        initialValues: {
          role: '',
          instagramUrl: '',
          linkedinUrl: '',
          twitterUrl: '',
          facebookUrl: '',
          email:' ',
          streetadd1 : '',
          streetadd2 : '',
          firstname: '',
          lastname: '',
          mobilenumber: '',
          companyname:'',
          country:'',
          alternatenumber:'',
          pincode:'',
          town:'',
          securityusername:'',
          securitypass : '',
          securityrepeatpass : '',
        },
        validationSchema: Yup.object({
          role: Yup.string().required('Role is required'),
          instagramUrl: Yup.string().url('Invalid URL'),
          linkedinUrl: Yup.string().url('Invalid URL'),
          twitterUrl: Yup.string().url('Invalid URL'),
          facebookUrl: Yup.string().url('Invalid URL'),
                email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
                securitypass: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required'),
                firstname : Yup.string()
                .required('First name is required'),
                securityusername : Yup.string()
                .required('First name is required'),
                lastname : Yup.string()
                .required('Last name is required'),
                mobilenumber : Yup.number()
                .min(10, 'Phone number must be at least 10 digits')
                .required('Phone number is required'),
                securityrepeatpass : Yup.string()
                .oneOf([Yup.ref('password')], 'Passwords must match')
                .required('Confirm password is required'),
                companyname: Yup.string()
                .required('Company name is required'),

                country: Yup.string()
                .required('Country is required'),
                pincode: Yup.string()
                .required('Pincode is required')
                .matches(/^\d{6}$/, 'Pincode must be exactly 6 digits'),
            
              town: Yup.string()
                .required('Town is required'),
        }),
        onSubmit: (values) => {
          console.log('Form Submitted:', values);
          

          if (!image) {
            setError('Image is required');
            
          }
        },
      });
    



  return (
   
          <div className="flex-1 bg-gray-50 pb-2 ">


                <div
                className="h-[300px] w-full bg-cover bg-center bg-no-repeat text-white flex items-center justify-center px-4 relative"
                style={{
                backgroundImage:
                "url('https://t3.ftcdn.net/jpg/02/32/24/48/360_F_232244890_8CJ7VJAU79lhGHg8D19Ch9JrfUCYOn7M.jpg')",
                }}
                >
                {/* You can place your text or content here */}
                <div className="text-center flex justify-between w-full px-5">
                    <div>
                        <h1 className="text-3xl font-bold">Welcome to Our Platform</h1>
                        <p className="text-lg mt-2">Start your journey with us today.</p>
                    </div>

                    <button className='px-3 py-2 bg-white/20 text-white font-semibold hover:bg-white/40 rounded-lg'>
                    Announcemts</button>
                </div>

                </div>

                <div className='gap-5 flex md:flex-row flex-col w-full px-9 py-9'>

                            <div className=' md:w-1/3  px-5 py-3 bg-white flex flex-col gap-4'>
                                        <h1 className='text-[20px] flex text-center'>Add new User</h1>

                                       
                                        <form  className="space-y-5">
                                            {/* Dropdown for Role */}

                                             <div className="relative flex items-center gap-4 py-4">
                                            {/* Image as clickable upload area */}
                                            <label htmlFor="imageUpload" className="cursor-pointer absolute left-0 top-1/2 -translate-y-1/2">
                                                <img
                                                src={previewUrl}
                                                alt="Preview"
                                                className="w-20 h-20 rounded-full object-cover border-2 border-gray-300"
                                                />
                                                {/* Hidden File Input */}
                                                <input
                                                type="file"
                                                id="imageUpload"
                                                accept="image/*"
                                                onChange={handleImageChange}
                                                className="hidden"
                                                />
                                            </label>

                                            {/* File info + error message */}
                                            <div className="pl-28 w-full">
                                                <label htmlFor="imageUpload" className="block text-sm font-medium text-gray-700 mb-2">
                                                Upload Image <span className="text-red-500">*</span>
                                                </label>

                                                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                                                {image && <p className="text-green-600 text-sm mt-1">Selected: {image.name}</p>}
                                            </div>
                                            </div>



                                            <div>
                                            <label htmlFor="role" className="block text-sm font-medium mb-3">Select Role</label>
                                            <select
                                                id="role"
                                                name="role"
                                                value={formik.values.role}
                                                onChange={formik.handleChange}
                                                className="w-full border border-gray-300 rounded px-3 py-2"
                                            >
                                                <option value="">-- Select Role --</option>
                                                <option value="web designer">Web Designer</option>
                                                <option value="designer">Designer</option>
                                                <option value="analyst">Analyst</option>
                                            </select>
                                            {formik.touched.role && formik.errors.role && (
                                                <p className="text-red-500 text-sm">{formik.errors.role}</p>
                                            )}
                                            </div>

                                            {/* Input fields */}
                                            <div>
                                            <label htmlFor="instagramUrl" className="block text-sm font-medium mb-3">Instagram URL</label>
                                            <Input
                                                id="instagramUrl"
                                                name="instagramUrl"
                                                type="text"
                                                placeholder="https://instagram.com/..."
                                                value={formik.values.instagramUrl}
                                                onChangeFun={formik.handleChange}
                                            />
                                            {formik.touched.instagramUrl && formik.errors.instagramUrl && (
                                                <p className="text-red-500 text-sm">{formik.errors.instagramUrl}</p>
                                            )}
                                            </div>

                                            <div>
                                            <label htmlFor="linkedinUrl" className="block text-sm font-medium mb-3">LinkedIn URL</label>
                                            <Input
                                                id="linkedinUrl"
                                                name="linkedinUrl"
                                                type="text"
                                                placeholder="https://linkedin.com/..."
                                                value={formik.values.linkedinUrl}
                                                onChangeFun={formik.handleChange}
                                            />
                                            {formik.touched.linkedinUrl && formik.errors.linkedinUrl && (
                                                <p className="text-red-500 text-sm">{formik.errors.linkedinUrl}</p>
                                            )}
                                            </div>

                                            <div>
                                            <label htmlFor="twitterUrl" className="block text-sm font-medium mb-3">Twitter URL</label>
                                            <Input
                                                id="twitterUrl"
                                                name="twitterUrl"
                                                type="text"
                                                placeholder="https://twitter.com/..."
                                                value={formik.values.twitterUrl}
                                                onChangeFun={formik.handleChange}
                                            />
                                            {formik.touched.twitterUrl && formik.errors.twitterUrl && (
                                                <p className="text-red-500 text-sm">{formik.errors.twitterUrl}</p>
                                            )}
                                            </div>

                                            <div>
                                            <label htmlFor="facebookUrl" className="block text-sm font-medium mb-3">Facebook URL</label>
                                            <Input
                                                id="facebookUrl"
                                                name="facebookUrl"
                                                type="text"
                                                placeholder="https://facebook.com/..."
                                                value={formik.values.facebookUrl}
                                                onChangeFun={formik.handleChange}
                                            />
                                            {formik.touched.facebookUrl && formik.errors.facebookUrl && (
                                                <p className="text-red-500 text-sm">{formik.errors.facebookUrl}</p>
                                            )}
                                            </div>

                                            {/* Submit button */}
                                         
                                        </form>
                                       

                            </div>

                            <div className=' md:w-2/3 px-5 py-3 bg-white'>
                                    <h1 className='text-[20px] flex text-center mb-4'>New Information</h1>

                                    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3 ">

                                            {/* Firstname & Lastname */}
                                            <div className="flex flex-col md:flex-row gap-4">
                                                <div className="w-full">
                                                <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-3">First Name</label>
                                                <Input
                                                    placeholder="First Name"
                                                    id="firstname"
                                                    type="text"
                                                    name="firstname"
                                                    value={formik.values.firstname}
                                                    onChangeFun={formik.handleChange}
                                                    
                                                />
                                                {formik.touched.firstname && formik.errors.firstname && (
  <div className="text-red-500 text-sm mt-1">{formik.errors.firstname}</div>
)}
                                                </div>
                                                <div className="w-full">
                                                <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-3">Last Name</label>
                                                <Input
                                                    placeholder="Last Name"
                                                    id="lastname"
                                                    type="text"
                                                    name="lastname"
                                                    value={formik.values.lastname}
                                                    onChangeFun={formik.handleChange}
                                                                                                    />
                                                {formik.touched.lastname && formik.errors.lastname && (
                                        <div className="text-red-500 text-sm mt-1">{formik.errors.lastname}</div>
                                                            )}
                                                </div>
                                            </div>

                                            {/* Street Address 1 & 2 */}
                                            <div className="flex flex-col md:flex-row gap-4">
                                                <div className="w-full">
                                                <label htmlFor="streetadd1" className="block text-sm font-medium text-gray-700 mb-3">Street Address 1</label>
                                                <Input
                                                    placeholder="Street Address 1"
                                                    id="streetadd1"
                                                    type="text"
                                                    name="streetadd1"
                                                    value={formik.values.streetadd1}
                                                    onChangeFun={formik.handleChange}
                                                                                                    />
                                                   {formik.touched.streetadd1 && formik.errors.streetadd1 && (
                                        <div className="text-red-500 text-sm mt-1">{formik.errors.streetadd1}</div>
                                                            )}
                                                </div>
                                                <div className="w-full">
                                                <label htmlFor="streetadd2" className="block text-sm font-medium text-gray-700 mb-3">Street Address 2</label>
                                                <Input
                                                    placeholder="Street Address 2"
                                                    id="streetadd2"
                                                    type="text"
                                                    name="streetadd2"
                                                    value={formik.values.streetadd2}
                                                    onChangeFun={formik.handleChange}
                                                                                                    />
                                                   {formik.touched.streetadd2 && formik.errors.streetadd2 && (
                                        <div className="text-red-500 text-sm mt-1">{formik.errors.streetadd2}</div>
                                                            )}
                                                </div>
                                            </div>

                                            {/* Company Name */}
                                            <div>
                                                <label htmlFor="companyname" className="block text-sm font-medium text-gray-700 mb-3">Company Name</label>
                                                <Input
                                                placeholder="Company Name"
                                                id="companyname"
                                                type="text"
                                                name="companyname"
                                                value={formik.values.companyname}
                                                onChangeFun={formik.handleChange}
                                                                                                />
                                                   {formik.touched.companyname && formik.errors.companyname && (
                                        <div className="text-red-500 text-sm mt-1">{formik.errors.companyname}</div>
                                                            )}                                                
                                            </div>

                                            {/* Country */}
                                            <div>
                                                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-3">Country</label>
                                                <Input
                                                placeholder="Country"
                                                id="country"
                                                type="text"
                                                name="country"
                                                value={formik.values.country}
                                                onChangeFun={formik.handleChange}
                                                                                                />
                                                {formik.touched.country && formik.errors.country && (
                                        <div className="text-red-500 text-sm mt-1">{formik.errors.country}</div>
                                                            )}                                                   
                                            </div>

                                            {/* Mobile & Alternate Number */}
                                            <div className="flex flex-col md:flex-row gap-4">
                                                <div className="w-full">
                                                <label htmlFor="mobilenumber" className="block text-sm font-medium text-gray-700 mb-3">Mobile Number</label>
                                                <Input
                                                    placeholder="Mobile Number"
                                                    id="mobilenumber"
                                                    type="text"
                                                    name="mobilenumber"
                                                    value={formik.values.mobilenumber}
                                                    onChangeFun={formik.handleChange}
                                                
                                                />
                                                   {formik.touched.mobilenumber && formik.errors.mobilenumber && (
                                        <div className="text-red-500 text-sm mt-1">{formik.errors.mobilenumber}</div>
                                                            )}
                                                </div>
                                                <div className="w-full">
                                                <label htmlFor="alternatenumber" className="block text-sm font-medium text-gray-700 mb-3">Alternate Number</label>
                                                <Input
                                                    placeholder="Alternate Number"
                                                    id="alternatenumber"
                                                    type="text"
                                                    name="alternatenumber"
                                                    value={formik.values.alternatenumber}
                                                    onChangeFun={formik.handleChange}
                                                                                                    />
                                                   {formik.touched.alternatenumber && formik.errors.alternatenumber && (
                                        <div className="text-red-500 text-sm mt-1">{formik.errors.alternatenumber}</div>
                                                            )}                                                    
                                                </div>
                                            </div>

                                            {/* Email & Pincode */}
                                            <div className="flex flex-col md:flex-row gap-4">
                                                <div className="w-full">
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-3">Email</label>
                                                <Input
                                                    placeholder="Email"
                                                    id="email"
                                                    type="email"
                                                    name="email"
                                                    value={formik.values.email}
                                                    onChangeFun={formik.handleChange}
                                                                                                    />
                                                   {formik.touched.email && formik.errors.email && (
                                        <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                                                            )}                                                    
                                                </div>
                                                <div className="w-full">
                                                <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-3">Pincode</label>
                                                <Input
                                                    placeholder="Pincode"
                                                    id="pincode"
                                                    type="text"
                                                    name="pincode"
                                                    value={formik.values.pincode}
                                                    onChangeFun={formik.handleChange}
                                                                                                    />
                                                 {formik.touched.pincode && formik.errors.pincode && (
                                        <div className="text-red-500 text-sm mt-1">{formik.errors.pincode}</div>
                                                            )}                                                     
                                                </div>
                                            </div>

                                            {/* Town/City */}
                                            <div className=''>
                                                <label htmlFor="town" className="block text-sm font-medium text-gray-700 mb-3">Town / City</label>
                                                <Input
                                                placeholder="Town / City"
                                                id="town"
                                                type="text"
                                                name="town"
                                                value={formik.values.town}
                                                onChangeFun={formik.handleChange}
                                                                                                />
                                               {formik.touched.town && formik.errors.town && (
                                        <div className="text-red-500 text-sm mt-1">{formik.errors.town}</div>
                                                            )}                                                    
                                            </div>



                                                <div className='mt-10 flex flex-col gap-3'>
                                                    Security Information

                                                 <div className='flex '>

                                                    <div className='flex flex-col gap-2 w-full'>
                                                    <label className='' htmlFor='Security Name'> User Name:</label>
                                                    <Input 
                                                     placeholder="User Name"
                                                     id="Security Name"
                                                     type="text"
                                                     name="Security Name"
                                                     value={formik.values.securityusername}
                                                     onChangeFun={formik.handleChange} />
                                                       {formik.touched.securityusername && formik.errors.securityusername && (
                                        <div className="text-red-500 text-sm mt-1">{formik.errors.securityusername}</div>
                                                            )}
                                                     </div>

                                                    
                                                </div>
                                                


                                                <div className='flex gap-5'>

                                                    <div className='flex flex-col w-full gap-2'>
                                                    <label className='' htmlFor='Security Password'> User Name:</label>
                                                    <Input 
                                                     placeholder="Security Password"
                                                     id="Security Password"
                                                     type="password"
                                                     name="Security Password"
                                                     value={formik.values.securitypass}
                                                     onChangeFun={formik.handleChange} />
                                                        {formik.touched.securitypass && formik.errors.securitypass && (
                                        <div className="text-red-500 text-sm mt-1">{formik.errors.securitypass}</div>
                                                            )}
                                                     </div>

                                                    <div className='flex flex-col w-full gap-2'>
                                                    <label className='' htmlFor="Confirm Password"> User Name:</label>
                                                    <Input 
                                                     placeholder="Confirm Password"
                                                     id="Confirm Password"
                                                     type="password"
                                                     name="Confirm Password"
                                                     value={formik.values.securityrepeatpass}
                                                     onChangeFun={formik.handleChange} />
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            
                                            <button className='px-3 py-2 bg-blue-500 text-white rounded-lg' type='submit'>
                                                Submit
                                            </button>
                                           

                                            </form>



                            </div>
                </div>

    </div>
  )
}

export default AddUser