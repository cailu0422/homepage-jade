import React from 'react';
import { CONTENT_INFO } from '../data/content';

type Props = {
  setMenuName: (menuName: string) => void;
  setOpenMenu: () => void;
};

const Menu: React.FC<Props> = (props: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!(e.target instanceof HTMLButtonElement)) {
      props.setOpenMenu();
    }
  };

  return (
    <>
      <section className="aside-menu" onClick={handleClick}>
        {Object.keys(CONTENT_INFO).map((item, index) => {
          return (
            <button key={index} onClick={() => props.setMenuName(item)}>
              {item}
            </button>
          );
        })}
      </section>
    </>
  );
};

export default Menu;
