import Image from "next/image";

type ClientReviewCardProps = {
  image: string;
  name: string;
  role: string;
};

const ClientReviewCard = ({ image, name, role }: ClientReviewCardProps) => {
  return (
    <article className="m-2">
      <Image
        src={image}
        alt="client"
        width={60}
        height={60}
        className="rounded-full"
      ></Image>
      <p className="mt-6 text-base text-gray-200 font-medium">
        &quot; Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
        magnam nam, animi incidunt praesentium ducimus? Debitis laboriosam eum
        animi beatae eaque, rerum error culpa aspernatur. &quot;
      </p>

      <h1 className="mt-6 text-xl font-bold text-cyan-200">{name}</h1>
      <p className="mt-1 text-white">{role}</p>
    </article>
  );
};

export default ClientReviewCard;
