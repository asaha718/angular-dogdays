import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDogComponent } from './update-dog.component';

describe('UpdateDogComponent', () => {
  let component: UpdateDogComponent;
  let fixture: ComponentFixture<UpdateDogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
