import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAHotelComponent } from './find-a-hotel.component';

describe('FindAHotelComponent', () => {
  let component: FindAHotelComponent;
  let fixture: ComponentFixture<FindAHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FindAHotelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FindAHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
