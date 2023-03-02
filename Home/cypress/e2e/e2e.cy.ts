/*
describe('PhotoBomb Run Through', () => {
  it('Visits the login page', () => {
    cy.visit('http://localhost:4200');
    cy.contains("PhotoBomb");
    cy.contains("Login");
    cy.url().should('includes', 'login');

    cy.get('[formControlName="username"]').type('CoolUsername');
    cy.get('[formControlName="password"]').type('SuperSecretPassword');
    cy.get('[formControlName="button"]').click();
    //check correct password
    cy.get('[id="login_button"]').click();

    //check error and close
    cy.get('[formControlName="close_warn"]').click();
    //check to see gone

    cy.get('[formControlName="register_button"]').click();
    cy.url().should('includes', 'register');

    cy.get('[formControlName="firstName"]').type('Cypress');
    cy.get('[formControlName="lastName"]').type('Testing');
    cy.get('[formControlName="username"]').type('CoolUsername');
    cy.get('[formControlName="password"]').type('SuperSecretPassword');

    cy.get('[id="register_button"]').click();

    cy.url().should('includes', 'login');
    cy.get('[formControlName="username"]').type('CoolUsername');
    cy.get('[formControlName="password"]').type('SuperSecretPassword');
    cy.get('[formControlName="button"]').click();
    cy.get('[id="login_button"]').click();

    cy.contains("Cypress");
    cy.contains("Testing");

    cy.get('[id="userlist_button"]').click();

    cy.contains("CoolUsername");
    cy.contains("Cypress");
    cy.contains("Testing");

    cy.get('[id="logout_button"]').click();
    cy.url().should('includes', 'login');

    cy.get('[formControlName="username"]').type('CoolUsername');
    cy.get('[formControlName="password"]').type('WRONGPassword');
    cy.get('[formControlName="button"]').click();

    cy.get('[id="login_button"]').click();
    cy.get('[formControlName="close_warn"]').click();

    cy.get('[formControlName="register_button"]').click();
    cy.url().should('includes', 'register');

    cy.get('[formControlName="firstName"]').type('End To');
    cy.get('[formControlName="lastName"]').type('End');
    cy.get('[formControlName="username"]').type('CoolUsername');
    cy.get('[formControlName="password"]').type('LamePassword');

    cy.get('[id="register_button"]').click();

    cy.get('[formControlName="close_warn"]').click();

    cy.get('[formControlName="username"]').clear();
    cy.get('[formControlName="username"]').type('BetterUser');

    cy.get('[id="register_button"]').click();

    cy.url().should('includes', 'login');
    cy.get('[formControlName="username"]').type('BetterUser');
    cy.get('[formControlName="password"]').type('LamePassword');
    cy.get('[id="login_button"]').click();

    cy.contains("End To");
    cy.contains("End");

    cy.get('[id="userlist_button"]').click();

    cy.contains("CoolUsername");
    cy.contains("Cypress");
    cy.contains("Testing");
    cy.contains("BetterUser");
    cy.contains("End To");
    cy.contains("End");

    cy.get('[id="home_button"]').click();

    cy.contains("End To");
    cy.contains("End");

    cy.get('[id="userlist_button"]').click();
    cy.get('[id="delete_button"]').eq(0).click();

    cy.get('[id="logout_button"]').click();
    cy.url().should('includes', 'login');

    cy.get('[formControlName="username"]').type('CoolUsername');
    cy.get('[formControlName="password"]').type('SuperSecretPassword');
    cy.get('[formControlName="button"]').click();
    cy.get('[id="login_button"]').click();
  })


=======
describe('PhotoBomb Run Through', () => {
  it('Visits the login page', () => {
    cy.visit('http://localhost:4200');
    cy.contains("PhotoBomb");
    cy.contains("Login");
    cy.url().should('includes', 'login');

    cy.get('[formControlName="username"]').type('CoolUsername');
    cy.get('[formControlName="password"]').type('SuperSecretPassword');
    cy.get('[formControlName="button"]').click();
    //check correct password
    cy.get('[id="login_button"]').click();

    //check error and close
    cy.get('[formControlName="close_warn"]').click();
    //check to see gone

    cy.get('[formControlName="register_button"]').click();
    cy.url().should('includes', 'register');

    cy.get('[formControlName="firstName"]').type('Cypress');
    cy.get('[formControlName="lastName"]').type('Testing');
    cy.get('[formControlName="username"]').type('CoolUsername');
    cy.get('[formControlName="password"]').type('SuperSecretPassword');

    cy.get('[id="register_button"]').click();

    cy.url().should('includes', 'login');
    cy.get('[formControlName="username"]').type('CoolUsername');
    cy.get('[formControlName="password"]').type('SuperSecretPassword');
    cy.get('[formControlName="button"]').click();
    cy.get('[id="login_button"]').click();

    cy.contains("Cypress");
    cy.contains("Testing");

    cy.get('[id="userlist_button"]').click();

    cy.contains("CoolUsername");
    cy.contains("Cypress");
    cy.contains("Testing");

    cy.get('[id="logout_button"]').click();
    cy.url().should('includes', 'login');

    cy.get('[formControlName="username"]').type('CoolUsername');
    cy.get('[formControlName="password"]').type('WRONGPassword');
    cy.get('[formControlName="button"]').click();

    cy.get('[id="login_button"]').click();
    cy.get('[formControlName="close_warn"]').click();

    cy.get('[formControlName="register_button"]').click();
    cy.url().should('includes', 'register');

    cy.get('[formControlName="firstName"]').type('End To');
    cy.get('[formControlName="lastName"]').type('End');
    cy.get('[formControlName="username"]').type('CoolUsername');
    cy.get('[formControlName="password"]').type('LamePassword');

    cy.get('[id="register_button"]').click();

    cy.get('[formControlName="close_warn"]').click();

    cy.get('[formControlName="username"]').clear();
    cy.get('[formControlName="username"]').type('BetterUser');

    cy.get('[id="register_button"]').click();

    cy.url().should('includes', 'login');
    cy.get('[formControlName="username"]').type('BetterUser');
    cy.get('[formControlName="password"]').type('LamePassword');
    cy.get('[id="login_button"]').click();

    cy.contains("End To");
    cy.contains("End");

    cy.get('[id="userlist_button"]').click();

    cy.contains("CoolUsername");
    cy.contains("Cypress");
    cy.contains("Testing");
    cy.contains("BetterUser");
    cy.contains("End To");
    cy.contains("End");

    cy.get('[id="home_button"]').click();

    cy.contains("End To");
    cy.contains("End");

    cy.get('[id="userlist_button"]').click();
    cy.get('[id="delete_button"]').eq(0).click();

    cy.get('[id="logout_button"]').click();
    cy.url().should('includes', 'login');

    cy.get('[formControlName="username"]').type('CoolUsername');
    cy.get('[formControlName="password"]').type('SuperSecretPassword');
    cy.get('[formControlName="button"]').click();
    cy.get('[id="login_button"]').click();
  })


*/