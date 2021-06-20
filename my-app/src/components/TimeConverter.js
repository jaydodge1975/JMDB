import movieDetails from '../views/MoviesView'

function timeConvert(n) {
  let num = n;
  let hours = (num / 60);
  let rhours = Math.floor(hours);
  let minutes = (hours - rhours) * 60;
  let rminutes = Math.round(minutes);
  return rhours + "hr " + rminutes + "min";
}

let TimeConverter = timeConvert(movieDetails.runtime);

export default TimeConverter
