import Image from "next/image";

const ServiceCard = ({ imgURL, label, subtext }: { imgURL: string, label: string, subtext: string }) => {
  return (
    <div className="service-card">
      <div className="flex flex-col items-center">
        <Image
          src={imgURL}
          alt="image"
          width={120}
          height={120}
          className="w-[120px] h-[120px] mb-5"
        />
        <h2 className="text-3xl font-bold leading-[36px] mb-5">{label}</h2>
        <p className="text-md font-medium text-muted2">{subtext}</p>
      </div>
    </div>
  );
};

export default ServiceCard;