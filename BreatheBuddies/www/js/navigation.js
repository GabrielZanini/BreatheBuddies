
var navigation = {

    initialize : function() {
        navigation.goToHome();
    },

    goToHome : function() {
        navigation.hideAllPages();
        $(".page#home").show();
    },

    goToExercise : function() {
        navigation.hideAllPages();
        $(".page#exercise").show();
    },

    hideAllPages : function() {
        $(".page").hide();
    }

};


navigation.initialize();