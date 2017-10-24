function pokedex(){

      var pokemones = [{"id":"001",
                        "name":"Charmander",
                        "photo":"01.jpg",
                        "type":"fire"
                      },
                      {"id":"002",
                        "name":"Drago",
                        "photo":"02.jpg",
                        "type":"fighting"
                      },
                      {"id":"003",
                       "name":"Charmander",
                       "photo":"03.jpg",
                       "type":"fire"
                      },
                      {"id":"004",
                      "name":"Drago",
                      "photo":"04.jpg",
                      "type":"fighting"
                      },
                      {"id":"005",
                      "name":"Charmander",
                      "photo":"05.jpg",
                      "type":"fire"
                      },
                      {"id":"006",
                      "name":"Drago",
                      "photo":"06.jpg",
                      "type":"fighting"
                      },
                      {"id":"007",
                      "name":"Charmander",
                      "photo":"07.jpg",
                      "type":"fire"
                      },
                      {"id":"008",
                      "name":"Drago",
                      "photo":"08.jpg",
                      "type":"fighting"
                      },
                      {"id":"009",
                      "name":"Drago",
                      "photo":"09.jpg",
                      "type":"water"
                      }
                    ];
       var id="";
       var nombre="";
       var photo="";
       var type="";

       var content="";

       var contenPhoto="";
       var infoId="";
       var infoType="";
       var contentInfo="";
       var auxDiv="";





      for(var i=0; i < pokemones.length; i++)
      {
      id = pokemones[i].id;
      name = pokemones[i].name;
      type = pokemones[i].type;
      photo = pokemones[i].photo;

      console.log(id+ name + photo + type);
      //contruir de div photo
      contentPhoto= "<div class='photo'>"  + "<img src='img/" + photo + "'>"  + "</div>";

      infoName ="<h2>" + name + "</h2>";

      infoid="<span>" + id + "</span>";

      infoType="<img src='types/" + type + ".png'>";

      auxDiv="<div class='d-flex justify-content-between'>" + infoId + infoType + "</div>"
      contentInfo=  "<div clas='info'>" + infoName + "</div>";

      content = content + "<div class ='pokemon'>" + contentPhoto + contentInfo + "</div>";
      console.log(content);

    }

    document.getElementById('container').innerHTML = content;
}
