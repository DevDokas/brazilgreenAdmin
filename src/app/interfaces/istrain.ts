import { IFlavor } from "./iflavor";
import { IHelpsWith } from "./ihelps-with";
import { IKind } from "./ikind";
import { INegativeEffects } from "./inegative-effects";
import { IPositiveEffects } from "./ipositive-effects";
import { ITerpenes } from "./iterpenes";

export interface IStrain {
  id: number,
  name: string,
  kind: IKind[],
  description: string,
  strain_flavor: IFlavor[],
  strain_helps_with: IHelpsWith[],
  strain_positive_effects: IPositiveEffects[],
  strain_negative_effects: INegativeEffects[],
  strain_terpenes: ITerpenes[],
  thc_concentration: number,
  cbd_concentration: number,
  image: string,
  created_at: string,
  updated_at: string
}
