
export function usersTypes(usertype,userTitle,usersList)
{
    // Verify the Users Heading
    cy.get('h1').should('contain','User Types');
    // Select the radio button to filter based on User types
    cy.get('p').contains(usertype).siblings('input[type="radio"]').check().should('be.checked');
    // Verify the user title matches the radio button selected above
    cy.get('h1').should('contain',userTitle);
    // Verify all the users of the selected user type is filtered
    cy.get('div[class="sc-gKAaRy bckzLI"]').children('div[class="sc-gtsrHT igtccV"]').each(($el, index) => {
        expect($el).to.contain(usersList[index]);
  })
}