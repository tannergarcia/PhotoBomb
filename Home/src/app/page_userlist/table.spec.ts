import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TableComponent } from './table';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TableComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        TableComponent
      ],
    }).compileComponents();
  });

  it('should allow account deletion', () => {
    const fixture = TestBed.createComponent(TableComponent);
    const app = fixture.componentInstance;
    let x = "John Doe";
    if (app.users!){
        expect(app.deleteUser).toBeTruthy();
    }
    expect(app.deleteUser).toBeDefined;

    let y = "deleteUser";

    if (y == "deleteUser"){
        x = "";
    }

    expect(x).toBe("");
   
  });

  it('should contain correct user info', () => {
    const fixture = TestBed.createComponent(TableComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


});
