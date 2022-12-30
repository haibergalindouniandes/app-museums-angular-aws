/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MuseumService } from './museum.service';

describe('Service: Museum', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MuseumService]
    });
  });

  it('should ...', inject([MuseumService], (service: MuseumService) => {
    expect(service).toBeTruthy();
  }));
});
