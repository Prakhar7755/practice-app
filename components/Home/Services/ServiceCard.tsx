import Image from "next/image";

type ServiceProps = {
  icon: string;
  name: string;
  description: string;
};

const ServiceCard = ({ icon, name, description }: ServiceProps) => {
  return (
    <article>
      <Image src={icon} width={60} alt={description} height={60} />
      <h1 className="mt-6 text-xl md:text-2xl font-bold text-gray-200">
        {name}
      </h1>
      <p className="mt-6 text-gray-300">{description}</p>
    </article>
  );
};

export default ServiceCard;
