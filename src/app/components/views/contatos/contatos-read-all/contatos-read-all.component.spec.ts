import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatosReadAllComponent } from './contatos-read-all.component';

describe('ContatosReadAllComponent', () => {
  let component: ContatosReadAllComponent;
  let fixture: ComponentFixture<ContatosReadAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatosReadAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContatosReadAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
