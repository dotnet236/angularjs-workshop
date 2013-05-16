**Chatper 4 - Models**

Walkthrough:

* Let's create a model
    * Add two songs to our controller.js with a name and url attribute.

```javascript
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
}
```

* Uhhoh...now are tests are failing

* Let's fix that
    * Modify test to have correct length assertion

```javascript
  it('should create an empty "songs" object', function() {
    ...
    expect(scope.songs.length).toBe(2);
  });
```

* Yeaaaa!!! We're back to green
