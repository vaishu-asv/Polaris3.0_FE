import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaselineCreationHybridecommonComponent } from './baseline-creation-hybridecommon.component';

describe('BaselineCreationHybridecommonComponent', () => {
  let component: BaselineCreationHybridecommonComponent;
  let fixture: ComponentFixture<BaselineCreationHybridecommonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaselineCreationHybridecommonComponent]
    });
    fixture = TestBed.createComponent(BaselineCreationHybridecommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
