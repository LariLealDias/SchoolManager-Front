import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetResourceComponent } from './get-resource.component';

describe('GetResourceComponent', () => {
  let component: GetResourceComponent;
  let fixture: ComponentFixture<GetResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetResourceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
