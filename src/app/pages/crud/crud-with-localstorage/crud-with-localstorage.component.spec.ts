import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudWithLocalstorageComponent } from './crud-with-localstorage.component';

describe('CrudWithLocalstorageComponent', () => {
  let component: CrudWithLocalstorageComponent;
  let fixture: ComponentFixture<CrudWithLocalstorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudWithLocalstorageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudWithLocalstorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
