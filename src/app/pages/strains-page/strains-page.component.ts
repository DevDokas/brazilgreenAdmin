import { Component, OnInit } from '@angular/core';
import { IStrain } from 'src/app/interfaces/istrain';
import { FetchApiService } from 'src/app/services/fetch-api.service';

@Component({
  selector: 'app-strains-page',
  templateUrl: './strains-page.component.html',
  styleUrls: ['./strains-page.component.scss']
})
export class StrainsPageComponent implements OnInit {

  public fetchStrains?: IStrain[]= [];

  constructor(
    private fetchApiService: FetchApiService
  ) { }

  ngOnInit(): void {
    this.catchStrains()
  }

  catchStrains() {
    this.fetchApiService.getStrains().subscribe((res) => {
      this.fetchStrains = res;
      console.log(this.fetchStrains)
    })
  }
}
