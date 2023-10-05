import ContactForm from '@/components/ContactForm'

const ContactUs = () => {
  return (
    <section id="contact-us" className="padding-x py-20">
      <div className="text-center sm:mb-20 mb-5">
        <h1 className="text-white font-bold text-5xl leading-[56px]">Get in Touch</h1>
      </div>

      <div className="flex justify-center flex-wrap sm:flex-row flex-col-reverse gap-9">
        <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full'>
          <div className='flex flex-col'>
            <h2 className='text-2xl font-bold mb-2'>Address</h2>
            <address className='text-lg'>Toronto, Canada <span>🇨🇦</span></address>
          </div>
        </div>

        <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full'>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default ContactUs