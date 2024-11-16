import React from 'react';

type Props = {
    menuOpen: boolean;
  setOpenMenu: () => void;
};

const Header: React.FC<Props> = (props: Props) => {
  return (
    <>
      <header>
        <a href="#">
          <div className="logo">Travel</div>
        </a>
        <div className={props.menuOpen ? 'menu-logo active' : 'menu-logo'} onClick={props.setOpenMenu}></div>
      </header>
    </>
  );
};

export default Header;
