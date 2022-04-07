export interface IAuthModal {
  active: boolean;
  authButtonHandler: (mode: boolean) => void;
}

export interface IStyledAuthModal {
  active: boolean;
  ref: any;
}
