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

![](https://s3.amazonaws.com/uploads.hipchat.com/18058/79163/q8340biojplt4am/Screen%20Shot%202013-05-16%20at%207.19.44%20PM.png)

* Let's fix that
    * Modify test to have correct length assertion and desription

```javascript
  it('should create two items in our songs model', function() {
    ...
    expect(scope.songs.length).toBe(2);
  });
```

* Yeaaaa!!! We're back to green

![](https://s3.amazonaws.com/uploads.hipchat.com/18058/79163/71qr1qbfseo2430/Screen%20Shot%202013-05-16%20at%207.22.54%20PM.png)
