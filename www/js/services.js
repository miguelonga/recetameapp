app.factory('recipeService',function($firebaseArray) {
    var fb = new Firebase("https://vivid-fire-4961.firebaseio.com/recipes");
    var recs = $firebaseArray(fb);
    var recipeService = {
        all: recs,
        get: function(recId) {
            return recs.$getRecord(recId);
        }        
    };
    return recipeService;
});
app.factory('groupService',function($firebaseArray) {
    var fb = new Firebase("https://vivid-fire-4961.firebaseio.com/groups");
    var groups = $firebaseArray(fb);
    var groupService = {
        all: groups,
        get: function(groupId) {
            return groups.$getRecord(groupId);
        }        
    };
    return groupService;
});




         
            
          
          
          