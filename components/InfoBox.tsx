import { ReactNode } from 'react';
import Link from 'next/link';

type ButtonTypeProps = {
  link: string;
  text: string;
  backgroundColor: string;
};

type InfoBoxProps = {
  heading: string;
  backgroundColor?: string;
  textColor?: string;
  buttonInfo: ButtonTypeProps;
  children: ReactNode;
};

const InfoBox = ({
  heading,
  backgroundColor = 'bg-gray-100',
  textColor = 'text-gray-800',
  children,
  buttonInfo,
}: InfoBoxProps) => {
  return (
    <div className={`${backgroundColor} p-6 rounded-lg shadow-md`}>
      <h2 className={`${textColor} text-2xl font-bold`}>{heading}</h2>
      <p className={`${textColor}mt-2 mb-4`}>{children}</p>
      <Link
        href={buttonInfo.link}
        className={`${buttonInfo.backgroundColor} inline-block bg-gray-600 text-white rounded-lg px-4 py-2 hover:bg-gray-700 hover:opacity-80`}
      >
        {buttonInfo.text}
      </Link>
    </div>
  );
};

export default InfoBox;
