var users = [
  {
    name: "Lucy",
    gender: "F",
    hobby: "pets",
    avatar: "avatar1.png"
  },
  {
    name: "Betty",
    gender: "F",
    hobby: "pets",
    avatar: "avatar2.png"
  },
  {
    name: "Ronald",
    gender: "M",
    hobby: "music",
    avatar: "avatar3.png"
  },
  {
    name: "Christopher",
    gender: "M",
    hobby: "sports",
    avatar: "avatar4.png"
  },
  {
    name: "Ximena",
    gender: "F",
    hobby: "reading",
    avatar: "avatar5.png"
  },
  {
    name: "Paul",
    gender: "M",
    hobby: "shopping",
    avatar: "avatar6.png"
  },
  {
    name: "Charlie",
    gender: "M",
    hobby: "pets",
    avatar: "avatar7.png"
  }
];

window.addEventListener("load", function() {
  // console.log('se ha cargado la pagina');
  function search() {
    //console.log('click');
    //console.log(results);
    //results.innerHTML = 'Hola';

    var hobbyField = document.getElementById("hobby");
    var hobby = hobbyField.value;
    //console.log(hobby);

    var genderField = document.getElementById("gender");
    var selected = genderField.selectedIndex;
    var gender = genderField.options[selected].value;
    //console.log(gender);

    var resultsHtml = "";
    var numUser = users.length;    

    console.log(hobby);
    for (var i = 0; i < numUser; i++) {
        //console.log(users[i].hobby);
        var temp_hobby = users[i].hobby;
        //console.log(hobby);
      if ((gender == 'A' || gender == users[i].gender) && (temp_hobby.includes(hobby))) {
        resultsHtml +=
          '<div class="person-row">\
        <img src="images/' +
          users[i].avatar +
          '" />\
        <div class="person-info">\
        <div>' +
          users[i].name +
          "</div>\
        <div>" +
          users[i].hobby +
          "</div>\
        </div>\
        <button>Add as friend</button>\
        </div>";
      }
    }
    results.innerHTML = resultsHtml;
  }

  var results = this.document.getElementById("results");
  var searchBtn = document.getElementById("searchBtn");
  searchBtn.addEventListener("click", search);
  search();
});
