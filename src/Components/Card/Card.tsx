import React from 'react';
import { modules } from '../../Models/module';

interface Props {
  data: modules;
  onClickhandle: () => void;
}

const Card: React.FC<Props> = ({ data, onClickhandle }: Props): JSX.Element => {
  return (
    <div className="mt-10 mb-10 p-2">
      <div className="card w-full flex flex-col items-center">
        <img 
          src={data.image} 
          alt={data.title} 
          onClick={onClickhandle} 
          className=" bg-blue-50 rounded-lg shadow-md w-48 h-48 object-cover transition-transform transform hover:scale-105 cursor-pointer" 
        />
        <div className="details text-lg font-semibold mt-2 text-center flex items-center">
          {data.title}
          <div 
            onClick={onClickhandle} 
            className=" bg-blue-50 ml-2 border rounded-full w-9 h-9 flex items-center justify-center transition-transform transform hover:scale-110 cursor-pointer font-extrabold"
          >
            &gt;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
