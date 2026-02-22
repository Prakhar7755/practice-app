import { IconType } from "react-icons";

type ResumeProps = {
  role: string;
  Icon: IconType;
  date?: string;
  description?: string;
};

const ResumeCard = ({ Icon, role, date, description }: ResumeProps) => {
  return (
    <article className="mb-6">
      <div className="flex items-start space-x-6 bg-blue-950/20 transition-all duration-300 p-4 sm:p-8 rounded-md">
        <div className="sm:w-14 sm:h-14 w-10 h-10 bg-blue-950 rounded-full flex items-center justify-center">
          <Icon className="sm:w-8 sm:h-8 w-6 h-6 text-white" />
        </div>

        <div className="flex-1">
          {date && (
            <h2 className="mb-2 px-4 py-1 rounded-full bg-gray-200 text-gray-600 w-fit text-sm sm:text-base font-bold">
              {date}
            </h2>
          )}

          <h3 className="text-gray-200 text-lg sm:text-xl font-semibold">
            {role}
          </h3>

          {description && (
            <p className="text-gray-300 text-sm sm:text-base pt-3 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </article>
  );
};

export default ResumeCard;
