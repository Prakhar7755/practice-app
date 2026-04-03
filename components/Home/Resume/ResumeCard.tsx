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
      <div className="glass-card flex items-start space-x-6 p-4 sm:p-8 group">
        <div className="sm:w-14 sm:h-14 w-10 h-10 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-full flex items-center justify-center flex-shrink-0 group-hover:from-cyan-500/40 group-hover:to-purple-500/40 transition-all duration-300">
          <Icon className="sm:w-7 sm:h-7 w-5 h-5 text-cyan-300" />
        </div>

        <div className="flex-1">
          {date && (
            <h2 className="mb-2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500/15 to-purple-500/15 border border-cyan-500/20 text-cyan-300 w-fit text-sm sm:text-base font-semibold">
              {date}
            </h2>
          )}

          <h3 className="text-gray-100 text-lg sm:text-xl font-semibold group-hover:text-white transition-colors duration-300">
            {role}
          </h3>

          {description && (
            <p className="text-gray-400 text-sm sm:text-base pt-3 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
              {description}
            </p>
          )}
        </div>
      </div>
    </article>
  );
};

export default ResumeCard;
