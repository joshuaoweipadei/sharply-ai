const InfoTwo = () => {
  return (
    <section className="padding">
      <div className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
        <div className='flex flex-1'>
          <img
            src={"/images/info2.png"}
            alt='Shoe Promotion'
            width={443}
            height={357}
            className='object-contain'
          />
        </div>
        <div className='flex flex-1 flex-col'>
          <h2 className='text-[32px] sm:text-[42px] font-palanquin font-bold mb-5 leading-[35px] sm:leading-[50px]'>
            Utilizing <span className='text-primary'> AI </span> in your <span className="text-gradient">business</span> and maximizing its{" "}
            <span className='text-gradient'>capabilities </span>
          </h2>
          <p className='mt-4 info-text'>
            With our AI solutions, you can effortlessly streamline your business processes,{" "}
            increasing productivity and reducing manual workloads. This translates into{" "}
            significant cost savings by optimizing resource allocation.
          </p>
          <p className='mt-6 info-text'>
            Utilize real-time data analysis to produce insights that can be used to inform decisions.{" "}
            You are given the tools to create proactive business strategies that succeed thanks to our AI-driven insights.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfoTwo;