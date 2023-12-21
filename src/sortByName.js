const sort = require("./sort");
const compare = require("./compare");

/**
 * Sort the array of customers by first and last name
 * @param {array} customers
 */

// function compare(left, right) {
//   if (left > right) {
//     return 1;
//   } else if (left < right) {
//     return -1;
//   } else {
//     return 0;
//   }
// }

function sortByName(customers) {
  // sort by last name, but if duplicates ???
  // use the sort function to sort the customers by surname
  // if there are any surname duplicates, send duplicates back through to sort with their first names
  // then replace where they were in the list with what comes back
  const firstFirst = customers.map((customer) => {
    let firstLast = Object.values(customer);
    return firstLast.join("");
  });

  const surnameFirst = firstFirst.map((name) => {
    return name[1] + name[0];
  });
  //   console.log(customers, firstFirst, "000", surnameFirst);
  const surnameSort = sort(compare, surnameFirst);
  let sorted = surnameSort.map((pair) => {
    return { firstName: pair[1], lastName: pair[0] };
  });
  return sorted;
}

module.exports = sortByName;
