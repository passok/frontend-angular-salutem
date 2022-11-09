import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatosUpdateComponent } from './contatos-update.component';

describe('ContatosUpdateComponent', () => {
  let component: ContatosUpdateComponent;
  let fixture: ComponentFixture<ContatosUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatosUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContatosUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
