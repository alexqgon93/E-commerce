const formatter = (number: number | bigint) => {
  return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(number);
};

export default formatter;
