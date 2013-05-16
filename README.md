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
* Light Test..Test..Test
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
* Run d'em...tests..tests..tests
    * ./scripts/test.sh
    * "SongCtrl should be defined" test should fail.
* Create the song controller function
    * Define a function in controller.js with the same name as the value of ng-controller attribute (SongCtrl).
    * Code:
    ```javascript
    function SongCtrl($scope) {
      console.log("Song Controller", $scope);
    }
    ```
* Run d'em...tests..tests..tests
    * ./scripts/test.sh
    * "SongCtrl should create an empty 'songs' object" test should pass.
    * Generate [Karma](http://4.bp.blogspot.com/_haAzLMekLyU/TBuvq_ef_4I/AAAAAAAACdw/iCLVVm31xbQ/s1600/bliss.jpg)
* Test..Test..Test
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
* Run d'em...tests..tests..tests
    * ./scripts/test.sh
    * "SongCtrl should create an empty 'songs' object" test should fail.
* Add an song array to the scope
    * Code:
    ```javascript
    function SongCtrl($scope) {
      $scope.songs = {}
    }
    ```
* Run d'em...tests..tests..tests
    * ./scripts/test.sh
    * "SongCtrl should create an empty 'songs' object" test should pass.
    * Generate [Karma](http://4.bp.blogspot.com/_haAzLMekLyU/TBuvq_ef_4I/AAAAAAAACdw/iCLVVm31xbQ/s1600/bliss.jpg)
