import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCentrocustoComponent } from './add-edit-centrocusto.component';

describe('AddEditCentrocustoComponent', () => {
  let component: AddEditCentrocustoComponent;
  let fixture: ComponentFixture<AddEditCentrocustoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEditCentrocustoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditCentrocustoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
