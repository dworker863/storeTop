export interface INavMobile {
  isActive: boolean;
  username: string;
  authButtonHandler: (mode: boolean) => void;
}

export interface IStyledNavMobile {
  type: 'desktop' | 'mobile';
}
