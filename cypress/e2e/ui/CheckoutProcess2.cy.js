import { uiAuth, uiBaseURL } from "../../support/data";
import CheckoutPage from './pages/CheckoutPage';

describe('Checkout Process 2 Testing', () => {
    beforeEach(() => {
        cy.visit(uiBaseURL);
        cy.login('standard_user', 'secret_sauce');
        cy.get('.btn_inventory').first().click();
        cy.get('.shopping_cart_link').click();
        cy.get('.checkout_button').click();
        cy.get('[data-test=firstName]').type('John');
        cy.get('[data-test=lastName]').type('Doe');
        cy.get('[data-test=postalCode]').type('12345');
        cy.get('.btn_primary').click();
    });
    it('Complete Order Placement', () => {
        CheckoutPage.click_finish_button();
        CheckoutPage.verify_order_completion_message();
    });

});
