import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudJsonComponent } from './crud-json.component';

describe('CrudJsonComponent', () => {
  let component: CrudJsonComponent;
  let fixture: ComponentFixture<CrudJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudJsonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
