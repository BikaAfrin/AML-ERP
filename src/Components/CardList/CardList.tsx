import React from 'react';
import Card from '../Card/Card';
import { modules } from '../../Models/module';
import security from "../../Assets/images.png";
import finance from "../../Assets/f.png";
import management from "../../Assets/m.png";
import production from "../../Assets/p1.png";
import sales from "../../Assets/s.png";
import hr from "../../Assets/hr1.png";
import asset from "../../Assets/a3.png";
import fleet from "../../Assets/f4.png";
import crm from "../../Assets/crm.png";
import tender from "../../Assets/t1.png";
import bank from "../../Assets/b.png";

interface Props {}
const data: modules[] = [
  { image: security, title: 'Security' },
  { image: finance, title: 'Accounts & Finance' },
  { image: management, title: 'Supply Chain Management' },
  { image: production, title: 'Production Management' },
  { image: sales, title: 'Sales Management' },
  { image: hr, title: 'Human Resource Management' },
  { image: asset, title: 'Fixed Asset Management' },
  { image: fleet, title: 'Fleet Management' },
  { image: crm, title: 'Customer Relationship Management' },
  { image: tender, title: 'Tender' },
  { image: bank, title: 'Bank Management System' },
];

const CardList: React.FC<Props> = (props: Props): JSX.Element => {
  const handleChange = () => {
    console.log('Image clicked!');
  };

  return (
    <div className='grid grid-cols-4 gap-2 mt-10'>
      {data.map((result) => {
        return <Card data={result} key={result.title} onClickhandle={handleChange} />;
      })}
    </div>
  );
};

export default CardList;
