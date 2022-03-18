/**
 * Calculates the 2022 federal income tax + FICA for an income
 *
 * @param {number} income The income to calculate tax for.
 * @param {number} preTaxContributions how much contribution to 401k + IRA 
 * @param {boolean} joint Married filing joint
 * @return The tax amount as USD.
 * @customfunction
 */
function INCOMETAX(income, preTaxContributions, joint) {
  let taxable = income - preTaxContributions;
  let flat = 0;
  let rate = 0;
  // Handle each bracket
  // TODO: convert to map or array lol
  // TODO: use joint here
  // 37%
  if (taxable > 539901) {
    flat += 162718;
    rate += (taxable - 539901) * .37;
  }
  // 35%
  else if (taxable > 215951) {
    flat += 49335.5;
    rate += (taxable - 215951) * .35;
  }
  // 32%
  else if (taxable > 170051) {
    flat += 34647.5;
    rate += (taxable - 170051) * .32;
  }
  // 24%
  else if (taxable > 89076) {
    flat += 15213.5;
    rate += (taxable - 89076) * .24;
  }
  // 22%
  else if (taxable > 41776) {
    flat += 4807.5;
    rate += (taxable - 41776) * .22;
  }
  // 12%
  else if (taxable > 10276) {
    flat += 1027.5;
    rate += (taxable - 10276) * .12;
  }
  // 10%
  else if (taxable > 0) {
    rate += taxable * .10;
  }
  // handle fica
  // 6.2% up to $147,000
  let ss = .062 * Math.min(147000, taxable);
  // medicare tax = 1.45% always
  let medicare = .0145 * taxable;
  // additional medicare - 0.9% on earnings over 200,000 | $250,000 for joint
  let limit = joint ? 250000 : 200000;
  let extra_medicare = taxable > limit ? 0.009 * taxable : 0;
  let fica = ss + medicare + extra_medicare;
  let incomeTax = flat + rate;
  let taxes = fica + incomeTax;
  return taxes;
}

/**
 * Calculates the 2022 WA Payroll Tax
 *
 * @param {number} income The income to calculate tax for.
 * @param {number} preTaxContributions how much contribution to 401k + IRA + etc
 * @return The tax amount as USD.
 * @customfunction
 */
function WATAX(income, preTaxContributions) {
  let taxable = income - preTaxContributions;
  let payroll = taxable * .00439;
  return payroll;
}
