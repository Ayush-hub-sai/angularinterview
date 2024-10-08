import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigbasketComponent } from './bigbasket.component';

describe('BigbasketComponent', () => {
  let component: BigbasketComponent;
  let fixture: ComponentFixture<BigbasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigbasketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigbasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
