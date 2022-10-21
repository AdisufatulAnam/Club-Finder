//rubah dari functionke class seperti dibawah.
class DataSource{
  constructor(onSuccess, onFailed){
    this.onSuccess=onSuccess;
    this.onFailed=onFailed;
  }

//ubah dengan mengunakan class.
searchClub(keyword){//ubah pada function club dibawah ini.
const filteredClubs = clubs.filter(club=> club.name.toUpperCase().includes(keyword.toUpperCase()));

  if (filteredClubs.length) {
    this.onSuccess(filteredClubs);
  } else {
         this.onFailed(`${keyword} is not found`);
  }
}
}