function SongCtrl($scope) {
  $scope.songs = [
     {
       "name":"Human Race",
       "url": "http://ccmixter.org/content/snowflake/snowflake_-_Human_Race_(difficult_years).mp3"
     },
     {
       "name": "Pieces - Disco Mix",
       "url": "http://ccmixter.org/content/Rey_Izain/Rey_Izain_-_Pieces_-_12_disco_mix.mp3"
     }
   ];

  $scope.add = function(song) {
    $scope.songs.push(song);
  } 

  $scope.play = function(song) {
    angular.element('audio').attr({
      'src': song.url,
    });
    return false;
  }
}
