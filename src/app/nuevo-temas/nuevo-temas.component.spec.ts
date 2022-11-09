import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoTemasComponent } from './nuevo-temas.component';

describe('NuevoTemasComponent', () => {
  let component: NuevoTemasComponent;
  let fixture: ComponentFixture<NuevoTemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoTemasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoTemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
