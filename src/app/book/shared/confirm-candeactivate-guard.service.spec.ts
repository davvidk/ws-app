import { TestBed, inject } from '@angular/core/testing';

import { ConfirmCandeactivateGuardService } from './confirm-candeactivate-guard.service';

describe('ConfirmCandeactivateGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfirmCandeactivateGuardService]
    });
  });

  it('should be created', inject([ConfirmCandeactivateGuardService], (service: ConfirmCandeactivateGuardService) => {
    expect(service).toBeTruthy();
  }));
});
