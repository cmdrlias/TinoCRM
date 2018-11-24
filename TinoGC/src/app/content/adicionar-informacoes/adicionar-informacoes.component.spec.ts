import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarInformacoesComponent } from './adicionar-informacoes.component';

describe('AdicionarInformacoesComponent', () => {
  let component: AdicionarInformacoesComponent;
  let fixture: ComponentFixture<AdicionarInformacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarInformacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarInformacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
