import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasUpdateComponent } from './pessoas-update.component';

describe('PessoasUpdateComponent', () => {
  let component: PessoasUpdateComponent;
  let fixture: ComponentFixture<PessoasUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PessoasUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PessoasUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
