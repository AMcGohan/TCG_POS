import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientLists } from './client-lists';

describe('ClientLists', () => {
  let component: ClientLists;
  let fixture: ComponentFixture<ClientLists>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientLists],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientLists);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
