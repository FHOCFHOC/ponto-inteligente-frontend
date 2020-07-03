import { TestBed } from '@angular/core/testing';

import { CadastrarPfService } from './cadastrar-pf.service';

describe('CadastroPfService', () => {
  let service: CadastrarPfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastrarPfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
