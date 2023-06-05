import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaselineCreationHybridcommonComponent } from './baseline-creation-hybridcommon.component';

describe('BaselineCreationHybridcommonComponent', () => {
  let component: BaselineCreationHybridcommonComponent;
  let fixture: ComponentFixture<BaselineCreationHybridcommonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaselineCreationHybridcommonComponent]
    });
    fixture = TestBed.createComponent(BaselineCreationHybridcommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
