import Image from 'next/image';
import { stepinfo } from '@/constants';

const StepInfo = () => {
  return (
    <div className='padding'>
      <div className='rounded-[30px] bg-[#ffffff0d] border border-[#ffffff1a]'>

        <div className='flex justify-center flex-wrap'>
          {stepinfo.map((step) => (
            <div className='stepinfo-card max-xl:border-r-transparent'>
              <Image
                src={step.imgURL}
                alt="img"
                width={32}
                height={34}
                className='w-[32px] h-[34px] mb-5'
              />
              <h3 className='text-xl font-bold mb-5'>{step.label}</h3>
              <p className='text-[15px] text-muted2 leading-[28px]'>{step.subtext}</p>

              <div className='stepinfo-card-arrow max-xl:hidden grid'>
                <svg width="13" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L11.4211 9.52632L1 19" stroke="white" strokeWidth="2" strokeLinecap="round"></path>
                </svg>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default StepInfo