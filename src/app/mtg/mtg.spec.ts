import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mtg } from './mtg';

describe('Mtg', () => {
  let component: Mtg;
  let fixture: ComponentFixture<Mtg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mtg],
    }).compileComponents();

    fixture = TestBed.createComponent(Mtg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
