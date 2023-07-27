import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IStrain } from '../interfaces/istrain';

@Injectable({
  providedIn: 'root'
})
export class FetchApiService {

  readonly baseUrl: string = environment.API_URL;
  readonly kindRoute: string;
  readonly strainRoute: string;
  readonly flavorRoute: string;
  readonly terpenesRoute: string;
  readonly helpsWithRoute: string;
  readonly positiveEffects: string;
  readonly negativeEffects: string;

  constructor(
    private http: HttpClient
  ) {
    this.kindRoute = "kind/";
    this.strainRoute = "strain/";
    this.flavorRoute = "flavor/";
    this.terpenesRoute = "terpenes/";
    this.helpsWithRoute = "helps_with/";
    this.positiveEffects = "positive_effects/";
    this.negativeEffects = "negative_effects/";
  }

  public getStrains(): Observable<IStrain[]> {
    return this.http.get<IStrain[]>(`${this.baseUrl}${this.strainRoute}`)
  }
}
