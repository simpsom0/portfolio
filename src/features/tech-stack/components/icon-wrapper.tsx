import React from 'react';

type IconWrapperProps = {
  active: boolean;
};

function IconWrapper({
  active,
  children,
}: React.PropsWithChildren<IconWrapperProps>) {
  return <div className={active ? 'active' : ''}>{children}</div>;
}

export default IconWrapper;
