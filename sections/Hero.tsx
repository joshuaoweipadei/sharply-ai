import Button from '@/components/Button'
import Link from 'next/link';

const Hero = () => {
  return (
    <section className='relative w-full h-[700px] max-sm:h-[580px] mx-auto'>
      <div className="hero-bg-overlay"></div>
      <div className='padding-x absolute inset-s0 top-[140px] max-w-7xl mx-auto flex flex-row items-start sm:gap-10 gap-5'>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#fff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <div className='mt-5 mb-20'>
            <h1 className={`text-white font-black lg:text-[90px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 mb-5`}>
              Sharply<span className='text-primary'>AI</span>
            </h1>
            <p className={`text-[#dfd9ff] font-medium lg:text-[34px] sm:text-[26px] xs:text-[22px] text-[16px] lg:leading-[45px] mt-2 text-white-100 sm:max-w-[900px] max-w-full `}>
              Cutting-edge Corporate Solutions 
              to drive <span className='text-gradient'>Innovation</span> and <span className='text-gradient'>Automate</span> {" "}
              Business Processes.
            </p>
          </div>

          <Link href={"#contact-us"}>
            <Button
              label="Let's Talk"
              textColor='text-white'
              iconURL='/icons/chevron-right.svg'
            />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero