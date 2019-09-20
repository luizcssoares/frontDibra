import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChamadoComponent } from './list-chamado.component';

describe('ListChamadoComponent', () => {
  let component: ListChamadoComponent;
  let fixture: ComponentFixture<ListChamadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListChamadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListChamadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
