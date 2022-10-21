function DataSource(onSuccess, onFailed) {
  this.onSuccess = onSuccess;
  this.onFailed = onFailed;
}

DataSource.prototype.searchClub = function (keyword) {//ubah pada function club dibawah ini.
const filteredClubs = clubs.filter(club=> club.name.toUpperCase().includes(keyword.toUpperCase()));
  if (filteredClubs.length) {
    this.onSuccess(filteredClubs);
  } else {
    this.onFailed(`${keyword} is not found`);
  }
};