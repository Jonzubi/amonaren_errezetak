import moment from 'moment';
moment.locale('eu');

const getFromNowFromDate = (date: Date) => {
  if (!date) return '';

  return moment(date).fromNow();
};

export { getFromNowFromDate };
