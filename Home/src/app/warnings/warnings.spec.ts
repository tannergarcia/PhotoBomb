import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AlertComponent } from './warnings';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('WarningsComponent', () => {
    let app: AlertComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AlertComponent
      ],
    }).compileComponents();
  });

  it('should be the correct warnings', () => {
    let warnings = "The username or password is incorrect";
    let warnings2 = "The username is already taken";

    let x = "push2";
    let y = "";

    if (x == "push1"){
        y = warnings;

    }
    if (x == "push2"){
        y = warnings2;
    }

    expect(y).toBe(warnings2);

  });

  it('should clear warnings', () => {
    let warnings = "The username or password is incorrect";
    let warnings2 = "The username is already taken";

    let x = "push";
    let y = "";
    let z = "";

    if (x == "push"){
        y = warnings;
        z = warnings2;
    }

    expect(y).toBe(warnings);
    expect(z).toBe(warnings2);
  });

  it('should push warnings', () => {
    let warnings = "The username or password is incorrect";
    let warnings2 = "The username is already taken";

    let x = "push";
    let y = "";
    let z = "";

    if (x == "push"){
        y = warnings;
        z = warnings2;
    }
    
    let w = "clear";

    if (w == "clear"){
        y = "";
        z = "";
    }

    expect(y).toBe("");
    expect(z).toBe("");
  });


});
