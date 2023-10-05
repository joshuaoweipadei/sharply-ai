import Image from 'next/image';
import Button from '@/components/Button';

const Benefits = () => {
  return (
    <section className='padding-x py-20'>
      <div className='flex justify-center flex-wrap gap-10'>
        <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full'>
          <h2 className='text-5xl leading-[56px] font-bold mb-10'>The <span className='text-gradient'>Advantages</span> of Working with Us</h2>
          <ul className='list-none flex flex-col mt-4 gap-4 mb-20'>
            {[1,2,3,4].map((num) => (
              <li className='flex items-center gap-5'>
                <Image
                  src={"/icons/check.svg"}
                  alt="img"
                  width={24}
                  height={24}
                />
                <span className='text-[15px]'>We're committed to helping your business thrive in today's dynamic landscape through the power of AI automation.</span>
              </li>
            ))}
          </ul>

          <Button
            label='Book to schedule a demo'
            textColor='text-white'
            iconURL='/icons/chevron-right.svg'
          />
        </div>

        <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full'>
          <ul className=' list-none flex flex-col mt-4 gap-16'>
            <li className='flex items-center gap-4'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_82_5376)">
                <circle cx="12" cy="12" r="12" fill="#4562FF"></circle>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.50114 12.7402C5.8868 12.3595 6.27246 11.9788 6.64135 11.6147C7.74803 12.7071 8.83793 13.783 9.94461 14.8754C12.4262 12.4257 14.9079 9.97607 17.3727 7.54297C17.7584 7.92366 18.1441 8.30435 18.5129 8.66849C15.6457 11.4988 12.7951 14.3126 9.92784 17.143C8.45227 15.6864 6.95994 14.2133 5.48438 12.7568L5.50114 12.7402Z" fill="white"></path>
                </g>
                <defs>
                <clipPath id="clip0_82_5376">
                <rect width="24" height="24" rx="12" fill="white"></rect>
                </clipPath>
                </defs>
              </svg>
              <span className='text-[14px]'>10+ million user</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Benefits