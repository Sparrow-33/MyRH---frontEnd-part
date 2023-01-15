import {FileHandler} from "./file-handler.model";

export interface InscriptionModel {
  nom :String;
  email :String;
  password :String;
  telephone :String;
  image :FileHandler[];
}
