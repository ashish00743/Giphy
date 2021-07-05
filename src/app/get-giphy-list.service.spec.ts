import { TestBed } from '@angular/core/testing';

import { GetGiphyListService } from './get-giphy-list.service';

describe('GetGiphyListService', () => {
  let service: GetGiphyListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetGiphyListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
