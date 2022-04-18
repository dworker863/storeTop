export interface IUserAvatar {
  mode: 'center' | 'between';
  image?: any;
  changeHandler?: (image: any) => void;
}

export interface IStyledUserCabinetBtnWrapper {
  mode: 'center' | 'between';
}
