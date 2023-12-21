export interface TrashCan {
  color: Type;
  //type: string;
  isShown: boolean;
  level: number;
  image: string
}

export enum Type {
  BLACK = 'mixed',
  YELLOW = 'plastic',
  BLUE = 'paper',
  GREEN = 'glass',
  BROWN = 'organic',
  RED = 'raee' //bonus
}

export interface ElementCard {
  id: string,
  level: number,
  correctBin: Type,
  selectedBin: string,
  name: string;
  description: string,
  image: string;
  checked: boolean,
  disabled: boolean,
}

