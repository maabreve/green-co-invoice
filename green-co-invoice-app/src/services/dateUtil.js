const monthNames = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
"Jul", "Ago", "Set", "Out", "Nov", "Dez"];

const weekNames = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

const getFormatDate = (date) => {
  if (!Object.prototype.toString.call(date) === "[object Date]") {
    return '';
  }
  const dateConverted = new Date(date);
  const month = dateConverted.getMonth() === 0 ?  "DEZ" : monthNames[dateConverted.getMonth() - 1];
  return `${month} ${dateConverted.getFullYear().toString().substr(2,2)}`;
}

const getDueDate = (date) => {
  if (!Object.prototype.toString.call(date) === "[object Date]") {
    return -1;
  }
  const dateConverted = new Date(date);

  return `${("0" + dateConverted.getDate()).slice(-2)}/${("0" + (dateConverted.getMonth() + 1)).slice(-2)}`;
}

const getWeekName = (date) => {
  if (!Object.prototype.toString.call(date) === "[object Date]") {
    return -1;
  }

  const dateConverted = new Date(date);

  return weekNames[dateConverted.getDay()];
}


const dateUtil = {
  getFormatDate,
  getDueDate,
  getWeekName
}

export default dateUtil;