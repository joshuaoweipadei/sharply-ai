import Image from 'next/image';

const Ceo = () => {
  return (
    <div className='padding py-10'>
      <div className='p-30 bg-[#ffffff0d] rounded-[12px]'>
        <div className='flex max-lg:flex-col-reverse flex-row justify-center items-center flex-wrap px-8 py-8 gap-5'>
          <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full max-md:mb-10'>
            <div className='flex items-center justify-center lg:justify-start gap-6'>
              <Image
                src={"https://quomodothemes.website/html/aai/assets/img/icons/headset.svg"}
                alt='img'
                width={54}
                height={54}
              />
              <div>
                <p className='text-md info-text mb-2'>Have a question? Call us</p>
                <a href="" className='font-bold text-2xl'>+1 (437) 599 5180</a>
              </div>
            </div>
          </div>

          <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full'>
            <div className='flex flex-col-reverse lg:flex-row justify-end items-center lg:gap-6 gap-3'>
              <div className="flex flex-col justify-end lg:items-end items-center">
                <p className='sm:text-2xl text-lg font-bold md:text-right text-center'>Owiepadei Joshua Bayefa</p>
                <p className='sm:text-sm text-xs text-right text-muted'>oweipadei@getsharplyai.com</p>
              </div>
              <Image
                src={"/images/ceo.png"}
                alt='ceo-img'
                width={100}
                height={100}
                className='object-contain object-center rounded-full w-[80px] h-[80px] max-lg:w-[200px] max-lg:h-[200px]'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ceo