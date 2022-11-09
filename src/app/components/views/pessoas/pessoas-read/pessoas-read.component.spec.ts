import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasReadComponent } from './pessoas-read.component';

describe('PessoasReadComponent', () => {
  let component: PessoasReadComponent;
  let fixture: ComponentFixture<PessoasReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PessoasReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PessoasReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
