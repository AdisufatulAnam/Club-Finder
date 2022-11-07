//tambahkan import untuk mengambil data dari data source
import DataSource from "../data/data-source.js";
import '../component/search-bar.js'

const main = () => { //ubah pada fariabel main menjadi => seberti berikut.
  const searchElement = document.querySelector('#search-bar');
  //hapus searc buuton karena sudah dideklarasikan di bagian file serach-bar.js dengan coment
  // const buttonSearchElement = document.querySelector('#searchButtonElement');
  const clubListElement = document.querySelector('#clubList');

  const onButtonSearchClicked = () => { //ubah function menjadi => pada baris ini.
    // const dataSource = new DataSource(renderResult, fallbackResult);
    // dataSource.searchClub(searchElement.value);
    DataSource.searchClub(searchElement.value)
      .then(renderResult)
      .catch(fallbackResult);
  };

  const renderResult = (results) => { //ubah funtion menjadi => pada baris ini.
    clubListElement.innerHTML = '';
    results.forEach(function (club) {
      //penerapan destription object
      const {
        name,
        fanArt,
        description
      } = club;
      // const name = club.name;
      // const fanArt = club.fanArt;
      // const description = club.description;

      const clubElement = document.createElement('div');
      clubElement.setAttribute('class', 'club');

      clubElement.innerHTML = `
      <img class="fan-art-club" src="${fanArt}" alt="Fan Art">
          <div class="club-info">
          <h2> ${name}</h2> 
          <p>${description}</p> 
          </div>`;
      clubListElement.appendChild(clubElement);
    });
  };

  const fallbackResult = message => { //ubah pada baris ini dengan => untuk mengantikan funcion.
    clubListElement.innerHTML = '';
    clubListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  };
  //ubah pada buttonserch seperti berikut.
  // buttonSearchElement.addEventListener('click', onButtonSearchClicked);
  searchElement.clickEvent = onButtonSearchClicked;
};
//tambakan export 
export default main;