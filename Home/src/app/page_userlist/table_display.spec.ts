import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TableDisplayComponent } from './table_display';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TableDisplayComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        TableDisplayComponent
      ],
    }).compileComponents();
  });

  it('should create and display the table', () => {
    const fixture = TestBed.createComponent(TableDisplayComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


});
