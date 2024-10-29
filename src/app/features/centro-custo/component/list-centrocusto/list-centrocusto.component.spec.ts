import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCentrocustoComponent } from './list-centrocusto.component';

describe('ListCentrocustoComponent', () => {
  let component: ListCentrocustoComponent;
  let fixture: ComponentFixture<ListCentrocustoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListCentrocustoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCentrocustoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
