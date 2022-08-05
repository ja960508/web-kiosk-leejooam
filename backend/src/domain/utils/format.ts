function isString(value) {
  return typeof value === 'string';
}

function addQuotesToString(value) {
  return isString(value) ? `"${value}"` : value;
}

export default {
  addQuotesToString,
};
