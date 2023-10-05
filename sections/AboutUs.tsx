const AboutUs = () => {
  return (
    <div id='about' className="padding py-10">
      <section
        id='about-us'
        className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
      >
        <div className='flex flex-1 flex-col justify-center items-center max-w-[900px] mx-auto text-center'>
          <h6 className='text-[23px] font-light mb-1'>About Us</h6>
          <h2 className='text-[32px] sm:text-[42px] font-palanquin font-bold mb-5 leading-[35px] sm:leading-[50px]'>
            Sharply<span className='text-gradient'>AI</span> Automation Agency
          </h2>
          <p className='mt-4 info-text'>
            SharplyAI is your dedicated partner in the realm of AI automation, offering a comprehensive solution from inception to deployment and beyond.{" "}
            Our mission is very clear: to empower startups and existing businesses with cutting-edge AI technologies that not only improve operational efficiency but also drive faster growth.{" "}
            Our transparent approach ensures that you are not just a passive observer but an active participant in your AI journey.
          </p>
          <p className='mt-6 info-text'>
            At SharplyAI, we don't merely build AI products; we shape the future. Your success is our success, and we are committed to promoting it through innovation, transparency, and understanding.{" "}
            Join us on this transformative AI adventure as we create the foundation for a better, more productive future where AI is a potent weapon at your disposal and success is the ultimate goal.
          </p>
        </div>
      </section>
    </div>
  )
}

export default AboutUs