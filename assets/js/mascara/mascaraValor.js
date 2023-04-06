// configuration
const args = {
    prefix: 'R$ ',
    fixed: true,
    fractionDigits: 2,
    decimalSeparator: ',',
    thousandsSeparator: '.',
    cursor: 'end'
};

  // Select the element
const input = SimpleMaskMoney.setMask('#preco', args);
  // Convert the input value to a number, which you can save e.g. to a database:
input.formatToNumber();
