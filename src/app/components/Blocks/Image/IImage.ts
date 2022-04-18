export interface IImage {
  mode: 'registration' | 'edit' | 'profile' | 'good';
  buttonMode?: 'center' | 'between';
  image?: any;
  changeHandler?: (image: any) => void;
}

export interface IStyledUserCabinetBtnWrapper {
  mode?: 'center' | 'between';
}
