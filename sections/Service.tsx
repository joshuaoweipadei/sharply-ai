import { services } from "../constants";
import ServiceCard from '@/components/ServiceCard'

const Service = () => {
  return (
    <section id="services" className="padding-x py-20">
      {/* <div className="text-center sm:mb-20 mb-5">
        <h1 className="text-white font-bold text-5xl leading-[56px] mb-5">AI Generate content in seconds</h1>
        <p className="text-muted leading-[28px] text-xl">By integrating AI, your company is future-proofed and will remain competitive in a constantly changing market.</p>
      </div> */}

      <div className="flex justify-center flex-wrap gap-9">
        {services.map((service) => (
          <ServiceCard key={service.label} {...service} />
        ))}
      </div>
    </section>
  )
}

export default Service