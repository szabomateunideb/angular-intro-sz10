import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alkatreszek } from './alkatreszek';

describe('Alkatreszek', () => {
  let component: Alkatreszek;
  let fixture: ComponentFixture<Alkatreszek>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Alkatreszek]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Alkatreszek);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
