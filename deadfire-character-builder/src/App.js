import React, { Component } from 'react';
import logo from './logo.svg';
import $ from "jquery";
import './App.css';

$(document).ready(function() { 
  $('td').click(function() {
      var $td = $(this);
      var $th = $("table thead tr th").eq($td.index());
     console.log($th);
      var classOne = $td.parent().data("class");
      var classTwo = $th.html();
      var multiClassName = $td.html();

      console.log(multiClassName + " : " + classOne + " - " + classTwo);
  });
});


class App extends Component {
 

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 >Pillars of Eternity: Deadfire </h1>
          <h3> Character Builder </h3>
        </header>
        <p className="App-intro">
          Select a Class Below: 
        </p>
        <table id="table" className="class-table">
          <thead>
            <tr > 
              <th> Classes: </th> 
              <th className="base" > Chanter </th> 
              <th className="base" > Cipher </th>
              <th className="base" > Druid </th>
              <th className="base" > Fighter </th>
              <th className="base" > Monk </th>
              <th className="base" > Paladin </th>
              <th className="base" > Priest </th>
              <th className="base" > Ranger </th>
              <th className="base" > Rogue </th>
              <th className="base" > Wizard </th>
            </tr>
          </thead>
          <tbody>
            <tr data-class="Barbarian">
              <td className="base"> Barbarian </td>
              <td> Howler </td>
              <td> Witch </td>
              <td> Tempest </td>
              <td> Brute </td>
              <td> Ravager </td>
              <td> Fanatic </td>
              <td> Shaman </td>
              <td> Savage </td>
              <td> Marauder </td>
              <td> Warlock </td>
            </tr>
            <tr data-class="Chanter">
              <td></td>
              <td className="base"> Chanter </td>
              <td> Spiritualist </td>
              <td> Theurge </td>
              <td> War Caller </td>
              <td> Cantor </td>
              <td> Herald </td>
              <td> Celebrant </td>
              <td> Wildrrhymer </td>
              <td> Harbinger </td>
              <td> Lore Master </td>
            </tr>
            <tr data-class="Cipher">
              <td></td>
              <td></td>
              <td className="base"> Cipher</td>
              <td> Oracle </td>
              <td> Psyblade </td>
              <td> Transcendant </td>
              <td> Inquisitor </td>
              <td> Mystic </td>
              <td> Seer </td>
              <td> Mindstalker </td>
              <td> Heirophant </td>
            </tr>
            <tr data-class="Druid">
              <td></td>
              <td></td>
              <td></td>
              <td className="base"> Druid </td>
              <td> Warden </td>
              <td> Ascetic </td>
              <td> Liberator </td>
              <td> Universalist </td>
              <td> Beastmaster </td>
              <td> Pathfinder </td>
              <td> Sorceror </td>
            </tr>
            <tr data-class="Fighter">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="base"> Fighter </td>
              <td> Brawler </td>
              <td> Crusader </td>
              <td> Cleric </td>
              <td> Hunter </td>
              <td> Swashbuckler </td>
              <td> Battlemage </td>
            </tr>
            <tr data-class="Monk">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="base"> Monk </td>
              <td> Votary </td>
              <td> Contemplative </td>
              <td> Wanderer </td>
              <td> Shadowdancer </td>
              <td> Sage </td>
            </tr>
            <tr data-class="Paladin">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="base"> Paladin </td>
              <td> Templar </td>
              <td> Shephard </td>
              <td> Holy Slayer </td>
              <td> Arcane Knight </td>
            </tr>
            <tr data-class="Priest">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="base"> Priest </td>
              <td> Itinerant </td>
              <td> Zealot </td>
              <td> Thaumaturge </td>
            </tr>
            <tr data-class="Ranger">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="base">  Ranger</td>
              <td> Scout </td>
              <td> Geomancer </td>
            </tr>
            <tr data-class="Rogue">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="base">Rogue </td>
              <td> Spellblade </td>
            </tr>

          </tbody>
        </table>
      </div>
    );
    
  }

  
}

export default App;
