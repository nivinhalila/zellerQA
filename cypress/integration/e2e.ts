
import*as USER from '../support/usertypes.js';

const admin = 'Admin';
const manager = 'Manager';
const adminTitle = 'ADMIN Users';
const managerTitle = 'MANAGER Users';

describe('E2E Test-User Types', function(){
  beforeEach(() => {
    // load the page before each test is run
    cy.visit('http://localhost:3000');
  })

  it('Should be able to filter Admin users', () => {
    // Verify the users based on admin role
    const adminUsers = ['David Miller','Ryan Muller','Chris Miller'];
    USER.usersTypes(admin,adminTitle,adminUsers);
    });
  
  it('Should be able to filter Manager users', () => {
    // Verify the users based on manager role
    const managerUsers = ['Lynn Warr','Joe Perera'];
    USER.usersTypes(manager,managerTitle,managerUsers);
    });
})
