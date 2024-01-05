// ==UserScript==
// @name         Heroski na Elizjum
// @version      1.0
// @match        *.margonem.pl/
// @grant        none
// @author       Adrian
// ==/UserScript==

function run(Engine) {

  const defaultPosition = [7, 'bottom-right']

  const addWidgetToDefaultWidgetSet = function() {
      Engine.widgetManager.addKeyToDefaultWidgetSet(
          'heroski',
          defaultPosition[0],
          defaultPosition[1],
          'Heroski na Elizjum - panel',
          'green',
          changeheroskiState
      )
  }

  $('head').append('<style>' +
      '.main-buttons-container .widget-button .icon.heroski {' +
      'background-image: url("https://i.imgur.com/2hxNJA6.png");' +
      'background-clip: content-box;' +
      'background-position: center;' +
      'background-repeat: no-repeat;'+
      'background-size: cover'+
      '}' +
      '</style>'
  )
  const addWidgetButtons = Engine.widgetManager.addWidgetButtons
  Engine.widgetManager.addWidgetButtons = function(additionalBarHide) {
      addWidgetButtons.call(Engine.widgetManager, additionalBarHide)
      addWidgetToDefaultWidgetSet()
      createButtonNI()

      Engine.widgetManager.addWidgetButtons = addWidgetButtons
  }

  if (Engine.interfaceStart) {
      addWidgetToDefaultWidgetSet()
      createButtonNI()
  }

  function createButtonNI() {
      if (Engine.interfaceStart && Object.keys(Engine.widgetManager.getDefaultWidgetSet()).includes('heroski')) {
          let heroskiPos = defaultPosition

          const serverStoragePos = Engine.serverStorage.get(Engine.widgetManager.getPathToHotWidgetVersion())
          if (serverStoragePos && serverStoragePos.heroski) heroskiPos = serverStoragePos.heroski

          Engine.widgetManager.createOneWidget('heroski', { heroski: heroskiPos }, true, [])
          Engine.widgetManager.setEnableDraggingButtonsWidget(false)
      } else setTimeout(createButtonNI, 500)
  }

  //----


  var heroski = document.createElement("div");

  const changeheroskiState = function() {
      heroski.style["display"] = heroski.style["display"] == "block" ? "none" : "block";
  }

  heroski.id = "heroski";
  heroski.style.cssText = "position:absolute;top:35%;left:40%;width:300px;height:400px;background-color:rgba(0,0,0,0.6);z-index:999;display:none;overflow-y: scroll; overflow-x: clip; border: 3px dotted #9312a1; color: white";
  document.querySelector(".game-window-positioner").appendChild(heroski);

  var heroesArray = [
      "Domina Ecclesiae",
      "Mietek Żul",
      "Mroczny Patryk",
      "Karmazynowy Mściciel",
      "Złodziej",
      "Zły Przewodnik",
      "Opętany Paladyn",
      "Piekielny Kościej",
      "Koziec Mąciciel Ścieżek",
      "Kochanka Nocy",
      "Książe Kasim",
      "Baca bez Łowiec",
      "Lichwiarz Grauhaz",
      "Obłąkany Łowca Orków",
      "Czarująca Atalia",
      "Święty Braciszek",
      "Viviana Nandin",
      "Mulher Ma",
      "Demonis Pan Nicości",
      "Vapor Veneno",
      "Dęborożec",
      "Tepeyollotl",
      "Negthotep Czarny Kapłan",
      "Młody Smok"
  ]

  var heroesFormsNames = [
      "domina",
      "mietek",
      "patryk",
      "karm",
      "zlodek",
      "przew",
      "opek",
      "kostek",
      "koziec",
      "kocha",
      "kasim",
      "baca",
      "lichwa",
      "oblo",
      "atka",
      "brat",
      "viva",
      "mulher",
      "demonis",
      "vapor",
      "debo",
      "kot",
      "kaplan",
      "smok"
  ]

  var heroesImagesArray = [
      "https://micc.garmory-cdn.cloud/obrazki/npc/her/domina.gif",
      "https://micc.garmory-cdn.cloud/obrazki/npc/her/zulek.gif",
      "https://micc.garmory-cdn.cloud/obrazki/npc/her/bardzozlypatryk.gif",
      "https://micc.garmory-cdn.cloud/obrazki/npc/her/gnom_msciciel.gif",
      "https://micc.garmory-cdn.cloud/obrazki/npc/her/zlodziej.gif",
      "https://micc.garmory-cdn.cloud/obrazki/npc/her/mnich-zly2.gif",
      "https://micc.garmory-cdn.cloud/obrazki/npc/her/opetanypaladyn02.gif",
      "https://micc.garmory-cdn.cloud/obrazki/npc/her/piekielny_kosciej.gif",
      "https://micc.garmory-cdn.cloud/obrazki/npc/her/koziec_maciciel_sciezek.gif",
      "https://micc.garmory-cdn.cloud/obrazki/npc/her/kochanka-nocy.gif",
      "https://micc.garmory-cdn.cloud/obrazki/npc/her/ksiaze-kasim.gif",
      "https://micc.garmory-cdn.cloud/obrazki/npc/her/goral10.gif",
      "https://micc.garmory-cdn.cloud/obrazki/npc/her/heros_129xd.gif",
      "https://micc.garmory-cdn.cloud/obrazki/npc/her/oblakany_ac1dae9d.gif",
      "https://micc.garmory-cdn.cloud/obrazki/npc/her/tri_atalia.gif",
      "https://micc.garmory-cdn.cloud/obrazki/npc/her/zalozyciel.gif",
      "https://micc.garmory-cdn.cloud/obrazki/npc/her/viv_nandin_i3bd1.gif",
      "https://micc.garmory-cdn.cloud/obrazki/npc/her/mulher_ma.gif",
      "https://micc.garmory-cdn.cloud/obrazki/npc/her/sekta_demon_cz_s.gif",
      "https://micc.garmory-cdn.cloud/obrazki/npc/her/joziniec_bagienny.gif",
      "https://micc.garmory-cdn.cloud/obrazki/npc/her/zwierz_kniei.gif",
      "https://micc.garmory-cdn.cloud/obrazki/npc/her/tep_35ecb966.gif",
      "https://micc.garmory-cdn.cloud/obrazki/npc/her/negthotep.gif",
      "https://micc.garmory-cdn.cloud/obrazki/npc/her/smokbarb.gif"
  ]
  var heroesCount = 0
  heroesArray.forEach( (element) => {
      var index = heroesArray.indexOf(element)
      var heros = document.createElement("div")
      var loot = ''
      var range = ''
      if( localStorage.getItem('loot_'+heroesFormsNames[index]) != null) {
          loot = localStorage.getItem('loot_'+heroesFormsNames[index])
      }
      if( localStorage.getItem('range_'+heroesFormsNames[index]) != null) {
          range = localStorage.getItem('range_'+heroesFormsNames[index])
      }
      heros.id = "heros_"+heroesCount
      heros.innerHTML = '<div style="margin-top: 5px; margin-bottom: 5px"><center><p>'+element+'</p>' +
      '<img src="'+heroesImagesArray[index]+'"><br>' +
      '<input type="text" name="Zajęty łup" id="loot_'+heroesFormsNames[index]+'" placeholder="Zajęty łup" autocomplete="off" value="'+loot+'"><br>' +
      '<input type="text" name="Przedział" id="range_'+heroesFormsNames[index]+'" placeholder="Przedział" autocomplete="off" value="'+range+'"><br><center></div>'

      document.getElementById("heroski").appendChild(heros)
  })

  function saveData() {
      heroesFormsNames.forEach((element) => {
          var key_loot = 'loot_'+element
          var key_range = 'range_'+element
          var loot = document.getElementById(key_loot).value
          var range = document.getElementById(key_range).value
          localStorage.setItem(key_loot, loot)
          localStorage.setItem(key_range, range)
      })
  }

  var saveButton = document.createElement("div")
  saveButton.id = "saveButton"
  saveButton.innerHTML = '<center><button type="button" style="margin-top: 10px; margin-bottom: 10px">Zapisz</button></center>'
  document.getElementById("heroski").appendChild(saveButton)
  document.getElementById("saveButton").addEventListener("click", saveData)

  var heroesFound = [];
  var found_heroes_count = 0

    if (Engine && Engine.npcs && Engine.npcs.check) window.API.addCallbackToEvent("newNpc", function (npc) {
      var found = heroesFound.find((element) => element == npc.d.nick)
        if( npc.d.wt > 79 && found == undefined) {
            var name = npc.d.nick;
            var localStorageName = heroesFormsNames[heroesArray.indexOf(name)]
            var loot = localStorage.getItem('loot_'+localStorageName)
            var range = localStorage.getItem('range_'+localStorageName)
            var level = npc.d.lvl;
            var map = Engine.map.d.name;
            var map_x = npc.d.x;
            var map_y = npc.d.y;
            var my_level = Engine.hero.d.lvl;
            var max_level = Math.min(Math.max(Math.round((1 + 0.4) * my_level) + 4, my_level + 14),500);
            var min_level = Math.max( Math.min( Math.ceil( (my_level - 4.5) / (1 + 0.4) ), my_level- 14), 1 )
            var date = new Date();
            var y = date.getFullYear();
            var m = date.getMonth() + 1;
            var d = date.getDate();
            var h = date.getHours();
            var minutes = date.getMinutes();
            if(h < 10) {
              h = "0" + h.toString();
            }
            if(minutes < 10) {
              minutes = "0" + minutes.toString();
            }
            if(d < 10) {
              d = "0" + d.toString();
            }
            if(m < 10) {
              m = "0" + m.toString();
            }
            var heroesWindow = document.createElement("div");
            if (heroesFound.length == 0) {
              heroesFound[0] = name
            } else {
              heroesFound[heroesFound.length-1] = name
            }
            const changeHeroesWindowState = function() {
              heroesWindow.remove()
              message("Nie zapomnij o godzinie ubicia!")
            }
            heroesWindow.id = "heroes_" + found_heroes_count;
            found_heroes_count++
            heroesWindow.innerHTML = '<div id="'+heroesWindow.id+'_header"><center>Heroski na Elizjum</center></div>'
            heroesWindow.style.cssText = "position:absolute;width:300px;top:35%;left:40%;height:150px;z-index:999;display:none;padding:10px;background-color:rgba(0,0,0,0.8);border: 3px dotted #9312a1; color: white";
            document.querySelector(".game-window-positioner").appendChild(heroesWindow);
            heroesWindow.style["display"] = "block";
            heroesWindow.innerHTML =heroesWindow.innerHTML + '<div id="'+heroesWindow.id+'_hero" style="width: 100%; height: 65%;" contentEditable="true"></div>';
            heroesWindow.innerHTML =heroesWindow.innerHTML + '<center><button id="'+heroesWindow.id+'_copy" style = "margin-left:5px">Kopiuj</button> <button id="'+heroesWindow.id+'_chat" style = "margin-left:20px">Powiadom klan</button> <button id="'+heroesWindow.id+'_close" style = "margin-left:20px">Zamknij</button></center>';
            const closeButton = document.getElementById(heroesWindow.id+"_close");
            const copyButton = document.getElementById(heroesWindow.id+"_copy");
            const chatButton = document.getElementById(heroesWindow.id+"_chat");
            const hero = document.getElementById(heroesWindow.id + "_hero");
            function sendClanChat() {
              var message = "Uwaga grasuje! "+name+"("+level+") na mapie " +map+"("+map_x+", "+map_y+")"
              _g('chat&channel=clan', !1,{
                c: message
              });
            }
            async function copyTextToClipboard() {
              try {
                if (navigator?.clipboard?.writeText) {
                  await navigator.clipboard.writeText(hero.textContent);
                }
              } catch (err) {
                console.error(err);
              }
            }
            closeButton.addEventListener("click", changeHeroesWindowState);
            chatButton.addEventListener("click", sendClanChat)
            var textToCopy = document.getElementById(heroesWindow.id+"_hero")
            copyButton.addEventListener("click", copyTextToClipboard)
            dragElement(document.getElementById(heroesWindow.id));
            function dragElement(elmnt) {
              var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
              if (document.getElementById(elmnt.id + "_header")) {
                // if present, the header is where you move the DIV from:
                document.getElementById(elmnt.id + "_header").onmousedown = dragMouseDown;
              } else {
                // otherwise, move the DIV from anywhere inside the DIV:
                elmnt.onmousedown = dragMouseDown;
              }

              function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();
                // get the mouse cursor position at startup:
                pos3 = e.clientX;
                pos4 = e.clientY;
                document.onmouseup = closeDragElement;
                // call a function whenever the cursor moves:
                document.onmousemove = elementDrag;
              }

              function elementDrag(e) {
                e = e || window.event;
                e.preventDefault();
                // calculate the new cursor position:
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                // set the element's new position:
                elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
              }

              function closeDragElement() {
                // stop moving when mouse button is released:
                document.onmouseup = null;
                document.onmousemove = null;
              }
            }
            if (npc.d.wt > 99) {
                hero.innerHTML =  "Nazwa i poziom: " +  name +  " (" +  level +  ")<br>Data i godzina zbiórki: " +  d +  "." +  m +  "." +  y +  " " +  h +  ":" +  minutes +  "<br>Data i godzina ubicia: " +  d +  "." +  m +  "." +  y;
            } else {
                var textArea_loot = ''
                var textArea_range = ''
                if (loot != '') {
                  textArea_loot = loot
                } else {
                  textArea_loot = "UZUPEŁNIJ"
                }
                if (range != '') {
                  textArea_range = range
                } else {
                  textArea_range = my_level +  " - " +max_level + " / "+ min_level + "-" +my_level
                }
                hero.innerHTML ="Nazwa i poziom: " +name +" (" +level +")<br>Mapa: " + map +" (" +map_x +"," + map_y + ")<br>Przedział: " + textArea_range +" <br>Zajęty loot: "+ textArea_loot +" <br>Data i godzina ubicia: " + d + "." +m + "." +    y;
            }
        }
    })
    else setTimeout(function() { run(window.Engine) }, 100)
}

run(window.Engine)
