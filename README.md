**Chatper 6 - Audio Tag**

Walkthrough:

* What's a listing of songs if you can't play it? I know right..
* Let's add an audio tag to the page.

```html
<audio controls autoplay>
  <p>Your browser does not support the audio element.</p>
</audio>
```

* Now make clicking the play button work in controllers.js

```javascript
$scope.play = function(song) {
  angular.element('audio').attr({
    'src': song.url,
  });
  return false;
}
```

* And finally wire the play links to the play even handler

```html
<td><a ng-href="" ng-click="play(song)">Play</<a></td>
```

* Now hit one of the play links
