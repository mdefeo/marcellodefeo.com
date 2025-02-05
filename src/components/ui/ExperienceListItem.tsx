import Image from 'next/image';
import { ExperienceListItemProps } from '@/interfaces/ExperienceListInterface';

const ExperienceListItem: React.FC<ExperienceListItemProps> = ({
  logoSrc,
  altText,
  institutionName,
  duration,
  title,
  location,
  description,
  className = ''
}) => {
  let descriptionContent = <></>;

  if (typeof description === 'string') {
    descriptionContent = <p>{description}</p>;
  } else if (Array.isArray(description)) {
    descriptionContent = (
      <ul className="m-0 pl-3">
        {description.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    );
  }

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:space-x-8 mb-4">
        <div className="flex-shrink-0 md:block hidden">
          <Image
            src={logoSrc}
            alt={altText}
            width={80}
            height={80}
            className="object-contain rounded-full"
          />
        </div>
        <div className="flex-1 mb-4">
          <div className="flex justify-between items-top">
            <h3 className="mb-0">{institutionName}</h3>
            <p className="text-right text-md md:block hidden text-base-100">{duration}</p>
          </div>
          <div className="flex justify-between items-top">
            <p className="text-md mb-2 text-base-100">{title}</p>
            <p className="text-right text-sm text-base-100 md:block hidden">{location}</p>
          </div>
          {descriptionContent}
        </div>
      </div>
    </div>
  );
};

export default ExperienceListItem;