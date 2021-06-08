import { TestBed } from '@angular/core/testing';

import { PersonalInfoGuard } from './personal-info.guard';

describe('PersonalInfoGuard', () => {
  let guard: PersonalInfoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PersonalInfoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
