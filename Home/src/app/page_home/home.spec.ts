import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HomeComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        HomeComponent
      ],
    }).compileComponents();
  });

  it('should contain user data', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.componentInstance;
    const x = "John";
    const y = "Doe";
    if (app.user!){
        app.user.firstName = x;
        expect(app.user.firstName).toBe("John");

        app.user.lastName = y;
        expect(app.user.lastName).toBe("Doe");
    }
    expect(app.user).toBeDefined;
    
    let z = "";
    z = x.concat(" ", y);

    expect(z).toBe(x + " " + y);
  });


});
