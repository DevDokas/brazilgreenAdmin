import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrainsPageComponent } from './strains-page.component';

describe('StrainsPageComponent', () => {
  let component: StrainsPageComponent;
  let fixture: ComponentFixture<StrainsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrainsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrainsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
