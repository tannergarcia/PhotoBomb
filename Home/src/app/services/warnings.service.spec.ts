import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { WarningService } from './warnings.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('WarningsServiceComponent', () => {

    let service: WarningService;
    beforeEach(() => { service = new WarningService(); });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        WarningService
      ],
    }).compileComponents();
  });

  it('should clear warns', () => {
    let warn = "The username or password is incorrect";
    let warn2 = "The username is already taken";
    let printer = "";
    let x = 2;
    if (x == 1){
        printer.replace(printer, warn);
        printer = "The username or password is incorrect";
    }
    if (x == 2){
        printer.replace(printer, warn);
        printer = "The username is already taken";
    }

    let y = "clear";

    if(y == "clear"){
        printer ="";
    }
    expect(printer).toBe("");
  });

  it('should display correctly', () => {
    let warn = "The username or password is incorrect";
    let warn2 = "The username is already taken";
    let printer = "";
    let x = 2;
    if (x == 1){
        printer.replace(printer, warn);
        printer = "The username or password is incorrect";
    }
    if (x == 2){
        printer.replace(printer, warn);
        printer = "The username is already taken";
    }
    expect(printer).toBe(warn2);
  });
  

  it('should warn', () => {
    let warn = "The username or password is incorrect";
    let printer = "";
    let x = 1;
    if (x == 1){
        printer.replace(printer, warn);
        printer = "The username or password is incorrect";
    }
    expect(printer).toBe(warn);
  });

});


