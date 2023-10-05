const InfoOne = () => {
  return (
    <div className="padding py-10">
      <section
        id='about-us'
        className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
      >
        <div className='flex flex-1 flex-col'>
          <h2 className='text-[32px] sm:text-[42px] font-palanquin font-bold mb-5 leading-[35px] sm:leading-[50px]'>
            Business operations are being <span className='text-gradient'>streamlined.</span>
          </h2>
          <p className='mt-4 lg:max-w-lg info-text'>
            Allow AI to handle the time-consuming, repetitive activities so that your staff{" "}
            may focus on strategic projects. Our AI solutions integrate easily into your current{" "}
            systems, causing the least amount of interruption and yielding the best outcomes.
          </p>
          <p className='mt-6 lg:max-w-lg info-text'>
            By integrating AI, your company is future-proofed and will remain competitive in a constantly changing market.
          </p>
        </div>

        <div className='flex-1 flex justify-center items-center'>
          <img
            src={"/images/info1.png"}
            alt='product detail'
            width={503}
            height={407}
            className='object-contain'
          />
        </div>
      </section>
    </div>
  );
};

export default InfoOne