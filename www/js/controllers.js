angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

})

.controller('NewsCtrl', function($scope) {
  $scope.news = [
    { title: 'News 1', url: '#'},
    { title: 'News 2', url: '#'},
    { title: 'News 3', url: '#'}
  ];
})

.controller('ChurchServicesCtrl', function($scope) {
  $scope.services = {
    sunday:{
      dayname: 'Domingo',
      services:
      [
        {hour: '07:00', name: 'CULTO DA ALVORADA'},
        {hour: '09:00', name: 'ESCOLA BÍBLICA'},
        {hour: '10:00', name: 'CULTO DA FAMÍLIA'},
        {hour: '10:00', name: 'EBD INFANTIL'},
        {hour: '17:00', name: 'CULTO DA BENÇÃO'},
        {hour: '19:00', name: 'CULTO DE CELEBRAÇÃO'}
      ]},
    saturday:{
      dayname: 'Sábado',
      services:
      [
        {hour: '15:00', name: 'DESPERTA DÉBORA'},
        {hour: '17:00', name: 'CULTO DE ADOLESCENTES'},
        {hour: '17:00', name: 'ENSAIO DO CORAL'},
        {hour: '19:30', name: 'SABADÃO JOVEM'}
      ]}
  };
})

