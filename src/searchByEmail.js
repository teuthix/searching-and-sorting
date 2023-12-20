/**
 * Return the index of the customer with given email, otherwise -1.
 * @param {string} email The email address to search for
 * @param {*} customers The array to search
 */
function searchByEmail(email, customers) {
  // linear search
  if (Array.isArray(customers)) {
    //returns array of all emails
    const custEmails = customers.map(customer => customer['email']);
    
    for(let i = 0; i < custEmails.length; i++) {
      if(custEmails[i] == email) {
        return i;
      }
    }
    return -1;
  }
  return -1;
}

module.exports = searchByEmail;
