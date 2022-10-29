//rubah dari functionke class seperti dibawah.
class DataSource{
  // constructor(onSuccess, onFailed){
  //   this.onSuccess=onSuccess;
  //   this.onFailed=onFailed;
  // }

//ubah dengan mengunakan class.
  static searchClub(keyword){//ubah pada function club dibawah ini.
    return new Promise((resolve,reject)=>{
      const filteredClubs = clubs.filter(club=> club.name.toUpperCase().includes(keyword.toUpperCase()));
      
      if (filteredClubs.length) {
        resolve(filteredClubs);
      } else {
          reject(`${keyword} is not found`);
      }
    });
  }  
}