import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatosDeleteComponent } from './contatos-delete.component';

describe('ContatosDeleteComponent', () => {
  let component: ContatosDeleteComponent;
  let fixture: ComponentFixture<ContatosDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatosDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContatosDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
