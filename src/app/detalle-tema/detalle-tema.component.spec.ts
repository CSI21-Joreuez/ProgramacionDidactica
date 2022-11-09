import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTemaComponent } from './detalle-tema.component';

describe('DetalleTemaComponent', () => {
  let component: DetalleTemaComponent;
  let fixture: ComponentFixture<DetalleTemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleTemaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
