// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.controller('MapCtrl', function($scope,$http,$timeout, $ionicModal,$ionicActionSheet,$interval ,$ionicPopup,$rootScope) {
      var map = L.map('map').setView([14.068940, 100.607414], 18);
              L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
              attribution: '© OpenStreetMap contributors',
              maxZoom: 19,
              zoomControl:false 
              }).addTo(map);
 
      


       // create custom icon
    var firefoxIcon = L.icon({
        iconUrl: 'http://joshuafrazier.info/images/firefox.svg',
        iconSize: [38, 95], // size of the icon
        popupAnchor: [0,-15]
        });

    
    var Popup1 = "<img src='img/1.jpg'  width='100px'/><br/>Mr.A";
    var Popup2 = "<img src='img/1.jpg'  width='100px'/><br/>Mr.B";
    var Popup3 = "<img src='img/2.png'  width='100px'/><br/>Mr.C";
    var Popup4 = "<img src='img/2.png'  width='100px'/><br/>Mr.D";
    var Popup5 = "<img src='img/3.png'  width='100px'/><br/>Mr.E";
   
    var customOptions =
        {
        'maxWidth': '500',
        'className' : 'custom'
        }
    
     var marker1 = L.marker([14.069203, 100.607458]).bindPopup(Popup1,customOptions).addTo(map);
      var marker2 = L.marker([14.069422, 100.603392]).bindPopup(Popup2,customOptions).addTo(map);
      var marker3 = L.marker([14.067330, 100.606332]).bindPopup(Popup3,customOptions).addTo(map);
      var marker4 = L.marker([14.066258, 100.609722]).bindPopup(Popup4,customOptions).addTo(map);
      var marker5 = L.marker([14.065886, 100.606011]).bindPopup(Popup5,customOptions).addTo(map);

})