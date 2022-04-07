export interface INavMobile {
  isActive: boolean;
  authButtonHandler: (mode: boolean) => void;
}

export interface IStyledNavMobile {
  type: 'desktop' | 'mobile';
}
