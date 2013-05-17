**Chatper 5 - Data Binding**

Walkthrough:

* Let's display some songs
* But first...we must...test...test..test
* Let's add an End To End test in test/e2e/scenario.js
```javascript
describe('Song table', function() {

  beforeEach(function() {
    browser().navigateTo('../../app/index.html');
  });

  it('should add the song a user enters to the list', function() {
    expect(repeater('.songs').count()).toBe(2);
  });
});
```

* And a failure...

* Let's fix it by adding a row for each song in index.html
```html
<tr ng-repeat="song in songs" class='songs'>
  <td>{{song.name}}</td>
  <td><a href="{{song.url}}">Play</<a></td>
</tr>
```

* Refresh and see the songs listed!!!
* But I wanna add my own songs :(
* Fair enough...but first...we must end to end...test...test..test
```javascript
describe('Song table', function() {

  beforeEach(function() {
    browser().navigateTo('../../app/index.html');
  });

  it('should add the song a user enters to the list', function() {
    input('name').enter('Song 1')
  });
});
```

* Test should fail. But it's ok. Trust me...I'm a limo driver.
* I know what to do! Let's add a form to our page for inputting songs.

```html
<form novalidate class="simple-form">
  <input name='name' ng-model="song.name" placeholder='name'>
  <input name='url' ng-model="song.url" placeholder='mp3 url'>
  <button class='btn btn-success' ng-click="add(song)">Add</button>
</form>
```

* Awesome..now onto adding this update user function in our song controller.
* Everything is off the scope.

```javascript
$scope.add = function(song) {
  $scope.songs.push(song);
} 
```


* Does your test pass? You bet your mother's week old leftovers they do.
