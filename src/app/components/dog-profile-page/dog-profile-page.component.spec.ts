import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogProfilePageComponent } from './dog-profile-page.component';

describe('DogProfilePageComponent', () => {
  let component: DogProfilePageComponent;
  let fixture: ComponentFixture<DogProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogProfilePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
