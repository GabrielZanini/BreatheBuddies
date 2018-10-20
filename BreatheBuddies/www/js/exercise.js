var exercise = {

    isAnimating : false,

    startAnimation : function() {
        exercise.inhale();
    },


    inhale : function() {
        console.log("inhale");
        $("#exerciseImage").animate({width: '90%'}, settings.inhale * 1000, exercise.hold);
    },

    hold : function() {
        console.log("hold");
        $("#exerciseImage").animate({width: '90%'}, settings.hold * 1000, exercise.exhale);
    },

    exhale : function() {
        console.log("exhale");
        $("#exerciseImage").animate({width: '50%'}, settings.exhale * 1000, exercise.pause);
    },

    pause : function() {
        console.log("pause");
        $("#exerciseImage").animate({width: '50%'}, settings.pause * 1000, exercise.inhale);
    },

    

};
