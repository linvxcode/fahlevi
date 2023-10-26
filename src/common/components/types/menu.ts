import { ReactNode } from 'react';

export type MenuItemProps = {
  title: string;
  href: string;
  icon: JSX.Element;
  className?: string;
  children?: ReactNode;
};