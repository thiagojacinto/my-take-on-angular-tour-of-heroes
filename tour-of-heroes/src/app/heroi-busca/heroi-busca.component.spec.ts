import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroiBuscaComponent } from './heroi-busca.component';

describe('HeroiBuscaComponent', () => {
  let component: HeroiBuscaComponent;
  let fixture: ComponentFixture<HeroiBuscaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroiBuscaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroiBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
