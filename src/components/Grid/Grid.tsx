import './Grid.css';
import { FC } from 'react';

type GridProps = {
  items?: string[];
  isHidden?: boolean;
};

const defaultItems: string[] = Array.from({ length: 7 }).map(
  (_, idx) => `Item ${idx}`
);

const Grid: FC<GridProps> = ({ items = defaultItems, isHidden = true }) => {
  return (
    <div className="container">
      {items.map((item) => (
        <div className="item" key={item}>
          {item}
        </div>
      ))}
    </div>
  );
};
