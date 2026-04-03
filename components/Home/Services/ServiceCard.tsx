import Image from "next/image";

type ServiceProps = {
  icon: string;
  name: string;
  description: string;
};

const ServiceCard = ({ icon, name, description }: ServiceProps) => {
  return (
    <article className="glass-card p-6 h-full group">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-300">
        <Image src={icon} width={40} alt={description} height={40} />
      </div>
      <h1 className="mt-5 text-xl md:text-2xl font-bold text-gray-100 group-hover:text-white transition-colors duration-300">
        {name}
      </h1>
      <p className="mt-4 text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
        {description}
      </p>
    </article>
  );
};

export default ServiceCard;
