import { TestBed, inject } from '@angular/core/testing';

import { CuriaService } from './curia.service';

describe('CuriaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CuriaService]
    });
  });

  it('should be created', inject([CuriaService], (service: CuriaService) => {
    expect(service).toBeTruthy();
  }));
});
