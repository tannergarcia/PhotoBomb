import { UploadComponent } from "src/app/upload/upload.component"
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { TestBed } from "@angular/core/testing";
import { MatDialogModule} from '@angular/material/dialog';
import { MatButton } from "@angular/material/button";

beforeEach(() => TestBed.configureTestingModule({
  imports: [HttpClientTestingModule, MatDialogModule]
}));


describe('UploadComponent', () => {
  it('has no image text', () => {
    cy.mount(UploadComponent)
    cy.get('[class=file-upload]').should('have.text', ' Choose Image  No image uploaded yet. ')

  })

  it('should not close', () => {
    Cypress.on('fail', (error, runnable) => {

     if (!error.message.includes('<div class="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div>')) {
      
      throw error
      
     }
      
    })
    cy.mount(UploadComponent,{
      componentProperties:{
        hide: false,
      }
    })
    cy.get('[color=accent]').click()
    cy.get('[color=accent]').click()

  })

})