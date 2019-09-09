import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Tama } from "./tamagotchi.js";

let newTama = new Tama();

$(document).ready(function(){

  $("#feedMe").click(function(){
    newTama.feed();
    console.log(newTama.hunger + "food");
  });
  $("#loveMe").click(function(){
    newTama.love();
    console.log(newTama.happiness + "love");
  });
  $("#sleepMe").click(function(){
    newTama.sleep();
    console.log(newTama.exhaustion);
  });
});
