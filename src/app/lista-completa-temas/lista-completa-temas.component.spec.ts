import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCompletaTemasComponent } from './lista-completa-temas.component';

describe('ListaCompletaTemasComponent', () => {
  let component: ListaCompletaTemasComponent;
  let fixture: ComponentFixture<ListaCompletaTemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCompletaTemasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCompletaTemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
