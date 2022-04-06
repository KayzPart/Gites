//Liste des gites

//On récupère les valeurs du formulaire

//On récupère l'ID des input contenant nos valeurs

//Couchages et SdB
let sleep = document.getElementById('nb_sleep');
let bathroom = document.getElementById('nb_bathroom');
let start = document.getElementById('start-date');
let end = document.getElementById('end-date');

//Catégories
let cat1 = document.getElementById('cat1');
let cat2 = document.getElementById('cat2');
let cat3 = document.getElementById('cat3');
let cat4 = document.getElementById('cat4');

//Options
let opt1 = document.getElementById('option1');
let opt2 = document.getElementById('option2');
let opt3 = document.getElementById('option3');
let opt4 = document.getElementById('option4');

//On récupère les valeurs dans les inputs

//Couchages et SdB
let nbSleep = sleep.value;
let nbBathroom = bathroom.value;
let startDate = start.value;
let endDate = end.value;
console.log(startDate);

//Catégories
categorie1 = cat1.value;
categorie2 = cat2.value;
categorie3 = cat3.value;
categorie4 = cat4.value;

//Options
option1 = opt1.value;
option2 = opt2.value;
option3 = opt3.value;
option4 = opt4.value;

// On récupère la recherche par nom
let searchByCity = document.getElementById('search');
let search = searchByCity.value;
console.log(search);

//Affichage des gîtes
giteDisplay();

function giteDisplay() {
    const listGites = document.getElementById('list-gites-user')
    const form = document.getElementById('giteSelection')
    const xhr = new XMLHttpRequest();

    xhr.open('GET', './select-form-user.php?nbSleep=' + nbSleep + '&nbBathroom=' + nbBathroom + '&cat1=' + categorie1 + '&cat2=' + categorie2 + '&cat3=' + categorie3 + '&cat4=' + categorie4 + '&opt1=' + option1 + '&opt2=' + option2 + '&opt3=' + option3 + '&opt4=' + option4 + '&search=' + search + '&start=' + startDate + '&end=' + endDate, true);

    xhr.onreadystatechange = function () {

        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            let datas = JSON.parse(this.responseText)
            let listDom = ''
            let giteSelection = ''


            for (let data of datas) {
                listDom += '<li class="gites" data-id="12"><h2 class="titre-page-user">' + data.name_gite + '</h2><h3 class="titre-lieu-p-user">' + data.location_gite + '</h3><div class="img-para-user"><img class="img-gite-user-index" src="./img/pdp/' + data.profil_gite + '" alt="photo du gite" class="img-div-gite"><div class="right-index-user-gite"><p class="description-main-page">' + data.desc_gite + '</p><div class="button-index-user"><p class="user-gite-prix">Prix / nuit : ' + data.price_night + '</p><button class="btn-reserver-user"><a href="./resa-user-form.php?id=' + data.id_gite + '">RESERVER</a></button></div></div></div></li>'

                giteSelection += '<input type="hidden" name="id_gite_selec[]" value="' + data.id_gite + '"></input>'

            }

            listGites.innerHTML = listDom;
            form.innerHTML = giteSelection;

        }
    }
    xhr.send(); 
}

//Comptage des gîtes correspondant à la recherche
function countGite() {
    return document.getElementsByClassName('gites').length;
}

function test() {

}


