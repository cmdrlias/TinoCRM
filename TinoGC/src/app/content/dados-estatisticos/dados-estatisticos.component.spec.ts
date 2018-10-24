import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosEstatisticosComponent } from './dados-estatisticos.component';

describe('DadosEstatisticosComponent', () => {
  let component: DadosEstatisticosComponent;
  let fixture: ComponentFixture<DadosEstatisticosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosEstatisticosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosEstatisticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
