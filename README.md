**Chatper 3**

Walkthrough:

* Annotate a song controller
    * Add ['ng-controller'](http://docs.angularjs.org/api/ng.directive:ngController) attribute to the body tag
    * Code:
    <body ng-controller="SongCtrl">
* Build a song repeater
    * Create an unordered list using the ['ng-repeat'](http://docs.angularjs.org/api/ng.directive:ngRepeat) attribute.
    * Code:

```html
<ul>
  <li ng-repeat="song in songs">
  </li>
</ul>
```
* Start your test server

![](https://s3.amazonaws.com/uploads.hipchat.com/18058/79163/ta0nbmhu0gyfrqy/Screen%20Shot%202013-05-16%20at%206.21.48%20PM.png)

* Red Light Test..Test..Test
    * Create spec to validate the song controller exists.
    * Use Jasmine's [toBeDefined](https://github.com/pivotal/jasmine/wiki/Matchers) matcher to validate the song controller's existence.
    * Add assertion to test/unit/songControllerSpec.js
    * Code:

```javascript
describe('SongCtrl', function(){

  it('should be defined', function() {
    var scope = {};
    var ctrl = new SongCtrl(scope);

    expect(ctrl).toBeDefined();
  });
});
```

* Run d'em red light...tests..tests..tests

![](https://s3.amazonaws.com/uploads.hipchat.com/18058/79163/whws7epv0uuk5di/Screen%20Shot%202013-05-16%20at%206.22.37%20PM.png)

* Create the song controller function
    * Define a function in controller.js with the same name as the value of ng-controller attribute (SongCtrl).
    * Code:

```javascript
function SongCtrl($scope) {
  console.log("Song Controller", $scope);
}
```

* Watch d'em green light...tests..tests..tests
    * Karma test runner executes automatically.
    * "SongCtrl should create an empty 'songs' object" test should pass.
    * Generate [Karma](http://4.bp.blogspot.com/_haAzLMekLyU/TBuvq_ef_4I/AAAAAAAACdw/iCLVVm31xbQ/s1600/bliss.jpg)

![](https://s3.amazonaws.com/uploads.hipchat.com/18058/79163/hsvh8cutbhxhvuc/Screen%20Shot%202013-05-16%20at%206.22.52%20PM.png)

* Red Light Test..Test..Test
    * Create test to validate our scoped song object exists.
    * Use Jasmine's [toBeDefined](https://github.com/pivotal/jasmine/wiki/Matchers) matcher to validate the song controller's existence.
    * Code:

```javascript
describe('SongCtrl', function(){

  it('should create an empty "songs" object', function() {
    var scope = {};
    var ctrl = new SongCtrl(scope);

    expect(ctrl).toBeDefined();
  });
});
```

* Run d'em red light...tests..tests..tests
    * "SongCtrl should create an empty 'songs' object" test should fail.

* Add an song array to the scope
    * Code:

```javascript
function SongCtrl($scope) {
  $scope.songs = {}
}
```

* Run d'em green light...tests..tests..tests
    * "SongCtrl should create an empty 'songs' object" test should pass.
    * Generate [Karma](http://4.bp.blogspot.com/_haAzLMekLyU/TBuvq_ef_4I/AAAAAAAACdw/iCLVVm31xbQ/s1600/bliss.jpg)
