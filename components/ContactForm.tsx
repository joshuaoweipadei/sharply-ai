"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { contactSchema } from "@/zodSchema/contact";
import Button from './Button'

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    // console.log(isSubmitting);
    // console.log(data);
    // await new Promise<void>((resolve) => {
    //   setTimeout(() => {
    //     resolve();
    //   }, 2000); // 2 seconds in milliseconds
    // });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
        <div className="sm:col-span-3">
          <div className="mt-2">
            <input 
              type="text" 
              {...register("fullname", { required: true })}
              autoComplete="given-name" 
              placeholder='Full Name' 
              className="block w-full rounded-md border-0 py-3 px-3 text-white shadow-sm outline-none ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary text-[16px] sm:text-[16px] sm:leading-6 bg-[#ffffff0d]"
            />
            {errors?.fullname && (<p className="text-red-500 text-xs">{errors?.fullname?.message}</p>)}
          </div>
        </div>

        <div className="sm:col-span-3">
          <div className="mt-2">
            <input 
              type="text"
              {...register("email", { required: true })}
              autoComplete="given-name" 
              placeholder='Email' 
              className="block w-full rounded-md border-0 py-3 px-3 text-white shadow-sm outline-none ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary text-[16px] sm:text-[16px] sm:leading-6 bg-[#ffffff0d]"
            />
            {errors?.email && (<p className="text-red-500 text-xs">{errors?.email?.message}</p>)}
          </div>
        </div>

        <div className="col-span-full">
          <div className="mt-2">
            <textarea 
              {...register("message", { required: true })}
              rows={3} 
              placeholder="Message" 
              className="block w-full rounded-md border-0 py-3 px-3 text-white shadow-sm outline-none ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary text-[17px] sm:text-[17px] sm:leading-6 bg-[#ffffff0d] resize-none"
            ></textarea>
            {errors?.message && (<p className="text-red-500 text-xs">{errors?.message?.message}</p>)}
          </div>
        </div>

        <div className='col-span-full'>
          <Button
            label="Send A Meassage"
            textColor='text-white'
          />
        </div>
      </div>
    </form>
  )
}

export default ContactForm