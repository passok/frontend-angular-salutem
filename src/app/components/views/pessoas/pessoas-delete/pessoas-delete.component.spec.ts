import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasDeleteComponent } from './pessoas-delete.component';

describe('PessoasDeleteComponent', () => {
  let component: PessoasDeleteComponent;
  let fixture: ComponentFixture<PessoasDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PessoasDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PessoasDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
