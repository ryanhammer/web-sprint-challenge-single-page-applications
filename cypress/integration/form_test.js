// Test for the Pizza Ordering Form are found below

describe('Pizza Order Form', () => {
  beforeEach(() => {
    // connect to app running locally in browser
    cy.visit('http://localhost:3001/pizza');
  });

  const nameInput = () => cy.get('input[name="name"]');
  const sizeSelect = () => cy.get('select[name="size"]');
  const sauceInput = () => cy.get('input[name="sauce"]');
  const xCheeseBox = () => cy.get('input[name="x_cheese"]');
  const sausageBox = () => cy.get('input[name="sausage"]');
  const pepperoniBox = () => cy.get('input[name="pepperoni"]');
  const hamBox = () => cy.get('input[name="ham"]');
  const baconBox = () => cy.get('input[name="bacon"]');
  const spinachBox = () => cy.get('input[name="spinach"]');
  const pineappleBox = () => cy.get('input[name="pineapple"]');
  const grnPeppBox = () => cy.get('input[name="green_peppers"]');
  const submitBtn = () => cy.get('#submitBtn');

  it("allows user to enter a name into the name input", () => {
    // grab the inputs, assert they are empty, type in them, and assert that what we typed is there
    nameInput()
      .should('have.value', '')
      .type('Heinz, the Baron Krauss von Espy')
      .should('have.value', 'Heinz, the Baron Krauss von Espy');

  });

  it("allows user to select multiple toppings", () => {
    // verify that none of the toppings are selected
    xCheeseBox().should('not.be.checked');
    sausageBox().should('not.be.checked');
    pepperoniBox().should('not.be.checked');
    hamBox().should('not.be.checked');
    baconBox().should('not.be.checked');
    spinachBox().should('not.be.checked');
    pineappleBox().should('not.be.checked');
    grnPeppBox().should('not.be.checked');

    // Select each individual topping
    xCheeseBox().click();
    sausageBox().click();
    pepperoniBox().click();
    hamBox().click();
    baconBox().click();
    spinachBox().click();
    pineappleBox().click();
    grnPeppBox().click();

      // Verifies that each box is selected
    xCheeseBox().should('be.checked');
    sausageBox().should('be.checked');
    pepperoniBox().should('be.checked');
    hamBox().should('be.checked');
    baconBox().should('be.checked');
    spinachBox().should('be.checked');
    pineappleBox().should('be.checked');
    grnPeppBox().should('be.checked');
      
  });

  it("allows user to submit form once input requirements are met", () => {
    // start with empty form and disabled submit button
    nameInput().should('have.value', '');
    sizeSelect().should('have.value', '');
    sauceInput().should('not.be.checked');
    xCheeseBox().should('not.be.checked');
    sausageBox().should('not.be.checked');
    pepperoniBox().should('not.be.checked');
    hamBox().should('not.be.checked');
    baconBox().should('not.be.checked');
    spinachBox().should('not.be.checked');
    pineappleBox().should('not.be.checked');
    grnPeppBox().should('not.be.checked');
    submitBtn().should('be.disabled');

    // correctly fill in form fields that pass validation
    nameInput().type('Albus Dumbledore');
    sizeSelect().select('Large');
    sauceInput().check('Original Red');
    xCheeseBox().click();
    sausageBox().click();
    pepperoniBox().click();

    // check that submit button is enabled, click it, and verify form clears upon submission
    submitBtn()
      .should('not.be.disabled')
      .click();
    nameInput().should('have.value', '');
    sizeSelect().should('have.value', '');
    sauceInput().should('not.be.checked');
    xCheeseBox().should('not.be.checked');
    sausageBox().should('not.be.checked');
    pepperoniBox().should('not.be.checked');
    hamBox().should('not.be.checked');
    baconBox().should('not.be.checked');
    spinachBox().should('not.be.checked');
    pineappleBox().should('not.be.checked');
    grnPeppBox().should('not.be.checked');
    submitBtn().should('be.disabled');

  });

});
