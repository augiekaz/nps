//iphone 

var viewportWidth = $(window).width();
if (viewportWidth < 480) {

            $(document).ready(function() {
            $('#fullpage').fullpage({
                verticalCentered: false,
                afterLoad: function(anchorLink, index){
            var loadedSection = $(this);

                //using anchorLink
                if(index == '2'){
                    // TweenLite.to($("#left"), 3, {right:"100%"});
                    // TweenLite.to($("#right"), 3, {left:"100%"});
                    // TweenLite.to($("#vid1"), 1, {right:"8%", scale:1.3, marginTop:"3%", delay:0.5});
                    // TweenLite.to($("#bannerRight1"), 1, {width:"101%", scale:1, marginTop:"0", delay:0.5});
                    // TweenLite.to($(".subCopy"), 1, {right:"0%", delay:0.5});

                    // TweenLite.to($("#vid2"), 1, {right:"8%", scale:1.3, marginTop:"3%", delay:1});
                    // TweenLite.to($("#bannerRight2"), 1, {width:"101%", scale:1, marginTop:"0", delay:1});
                    // TweenLite.to($(".subCopy2"), 1, {right:"0%", delay:1});

                    // TweenLite.to($("#vid3"), 1, {right:"8%", scale:1.3, marginTop:"3%", delay:1.5});
                    // TweenLite.to($("#bannerRight3"), 1, {width:"101%", scale:1, marginTop:"0", delay:1.5});
                    // TweenLite.to($(".subCopy3"), 1, {right:"0%", delay:1.5});
            

                        // $( "#vid2" ).hover(function() {
  

                        //     TweenLite.to($("#vid2"), 1, {right:"8%", scale:1.3, marginTop:"3%"});
                        //     TweenLite.to($("#bannerRight2"), 1, {width:"101%", scale:1, marginTop:"0"});
                        //     TweenLite.to($(".subCopy2"), 1, {right:"0%"});

                        //     TweenLite.to($("#vid1"), 1, {right:"-45%", scale:1, marginTop:"0%"});
                        //     TweenLite.to($("#bannerRight1"), 1, {width:"40%", scale:1, marginTop:"0"});
                        //     TweenLite.to($(".subCopy"), 1, {right:"-75%"});

                        //     TweenLite.to($("#vid3"), 1, {right:"-45%", scale:1, marginTop:"0%"});
                        //     TweenLite.to($("#bannerRight3"), 1, {width:"40%", scale:1, marginTop:"0"});
                        //     TweenLite.to($(".subCopy3"), 1, {right:"-75%"});

                        // }); 

                        // $( "#vid1" ).hover(function() {


                        //     TweenLite.to($("#vid1"), 1, {right:"8%", scale:1.3, marginTop:"3%"});
                        //     TweenLite.to($("#bannerRight1"), 1, {width:"101%", scale:1, marginTop:"0"});
                        //     TweenLite.to($(".subCopy"), 1, {right:"0%"});

                        //     TweenLite.to($("#vid2"), 1, {right:"-45%", scale:1, marginTop:"0%"});
                        //     TweenLite.to($("#bannerRight2"), 1, {width:"40%", scale:1, marginTop:"0"});
                        //     TweenLite.to($(".subCopy2"), 1, {right:"-75%"});

                        //     TweenLite.to($("#vid3"), 1, {right:"-45%", scale:1, marginTop:"0%"});
                        //     TweenLite.to($("#bannerRight3"), 1, {width:"40%", scale:1, marginTop:"0"});
                        //     TweenLite.to($(".subCopy3"), 1, {right:"-75%"});                           
                            
                        // }); 

                        // $( "#vid3" ).hover(function() {

                        //     TweenLite.to($("#vid3"), 1, {right:"8%", scale:1.3, marginTop:"3%"});
                        //     TweenLite.to($("#bannerRight3"), 1, {width:"101%", scale:1, marginTop:"0"});
                        //     TweenLite.to($(".subCopy3"), 1, {right:"0%"});

                        //     TweenLite.to($("#vid2"), 1, {right:"-45%", scale:1, marginTop:"0%"});
                        //     TweenLite.to($("#bannerRight2"), 1, {width:"40%", scale:1, marginTop:"0"});
                        //     TweenLite.to($(".subCopy2"), 1, {right:"-75%"});

                        //     TweenLite.to($("#vid1"), 1, {right:"-45%", scale:1, marginTop:"0%"});
                        //     TweenLite.to($("#bannerRight1"), 1, {width:"40%", scale:1, marginTop:"0"});
                        //     TweenLite.to($(".subCopy1"), 1, {right:"-75%"});  
                              
                        // }); 
                                // TweenLite.to($(".read-more"), 0, {display:'block'}); //displays here so no jump

                        
                }

                if(index == '3'){
                    // TweenLite.to($("#left1"), 3, {right:"100%"});
                    // TweenLite.to($("#right1"), 3, {left:"100%"});
                    // TweenLite.to($(".read-more"), 0, {display:'block'});
                    
                }

                // if(index == '4'){
                //     TweenLite.to($("#left2"), 3, {right:"100%"});
                //     TweenLite.to($("#right2"), 3, {left:"100%"});
                    
                // }
            },
        //     onLeave: function(index, nextIndex, direction){
        //     var leavingSection = $(this);

        //     //after leaving section 2
        //     if(index == 2 ){
        //         TweenLite.to($("#left"), 1, {right:"0%"});
        //         TweenLite.to($("#right"), 1, {right:"0%",left:"0%"});

        //         TweenLite.to($("#vid2"), 1, {right:"-45%", scale:1, marginTop:"0%"});
        //         TweenLite.to($("#bannerRight2"), 1, {width:"40%", scale:1, marginTop:"0"});
        //         TweenLite.to($(".subCopy2"), 1, {right:"-75%"});

        //         TweenLite.to($("#vid3"), 1, {right:"-45%", scale:1, marginTop:"0%"});
        //         TweenLite.to($("#bannerRight3"), 1, {width:"40%", scale:1, marginTop:"0"});
        //         TweenLite.to($(".subCopy3"), 1, {right:"-75%"});   

        //         TweenLite.to($("#vid1"), 1, {right:"-45%", scale:1, marginTop:"0%"});
        //         TweenLite.to($("#bannerRight1"), 1, {width:"40%", scale:1, marginTop:"0"});
        //         TweenLite.to($(".subCopy1"), 1, {right:"-75%"});   
                
        //     }

        //     if(index == 3 ){
        //         TweenLite.to($("#left1"), 1, {right:"0%"});
        //         TweenLite.to($("#right1"), 1, {right:"0%",left:"0%"});
        //     }

        //     if(index == 4 ){
        //         TweenLite.to($("#left2"), 1, {right:"0%"});
        //         TweenLite.to($("#right2"), 1, {right:"0%",left:"0%"});
        //     }

        // }

            });
        });



// alert("less than 480");

};




// var viewportWidth = $(window).width();
//Web
if (viewportWidth > 480) {

            $(document).ready(function() {
            $('#fullpage').fullpage({
                verticalCentered: false,
                afterLoad: function(anchorLink, index){
            var loadedSection = $(this);

            

                //using anchorLink
                if(index == '2'){
                    TweenLite.to($("#left"), 3, {right:"100%"});
                    TweenLite.to($("#right"), 3, {left:"100%"});
                    TweenLite.to($("#vid1"), 1, {right:"8%", scale:1.3, marginTop:"3%", delay:0.5});
                    TweenLite.to($("#bannerRight1"), 1, {width:"101%", scale:1, marginTop:"0", delay:0.5});
                    TweenLite.to($(".subCopy"), 1, {right:"0%", delay:0.5});
            

                        $( "#vid2" ).hover(function() {
  

                            TweenLite.to($("#vid2"), 1, {right:"8%", scale:1.3, marginTop:"3%"});
                            TweenLite.to($("#bannerRight2"), 1, {width:"101%", scale:1, marginTop:"0"});
                            TweenLite.to($(".subCopy2"), 1, {right:"0%"});

                            TweenLite.to($("#vid1"), 1, {right:"-45%", scale:1, marginTop:"0%"});
                            TweenLite.to($("#bannerRight1"), 1, {width:"40%", scale:1, marginTop:"0"});
                            TweenLite.to($(".subCopy"), 1, {right:"-75%"});

                            TweenLite.to($("#vid3"), 1, {right:"-45%", scale:1, marginTop:"0%"});
                            TweenLite.to($("#bannerRight3"), 1, {width:"40%", scale:1, marginTop:"0"});
                            TweenLite.to($(".subCopy3"), 1, {right:"-75%"});

                        }); 

                        $( "#vid1" ).hover(function() {


                            TweenLite.to($("#vid1"), 1, {right:"8%", scale:1.3, marginTop:"3%"});
                            TweenLite.to($("#bannerRight1"), 1, {width:"101%", scale:1, marginTop:"0"});
                            TweenLite.to($(".subCopy"), 1, {right:"0%"});

                            TweenLite.to($("#vid2"), 1, {right:"-45%", scale:1, marginTop:"0%"});
                            TweenLite.to($("#bannerRight2"), 1, {width:"40%", scale:1, marginTop:"0"});
                            TweenLite.to($(".subCopy2"), 1, {right:"-75%"});

                            TweenLite.to($("#vid3"), 1, {right:"-45%", scale:1, marginTop:"0%"});
                            TweenLite.to($("#bannerRight3"), 1, {width:"40%", scale:1, marginTop:"0"});
                            TweenLite.to($(".subCopy3"), 1, {right:"-75%"});                           
                            
                        }); 

                        $( "#vid3" ).hover(function() {

                            TweenLite.to($("#vid3"), 1, {right:"8%", scale:1.3, marginTop:"3%"});
                            TweenLite.to($("#bannerRight3"), 1, {width:"101%", scale:1, marginTop:"0"});
                            TweenLite.to($(".subCopy3"), 1, {right:"0%"});

                            TweenLite.to($("#vid2"), 1, {right:"-45%", scale:1, marginTop:"0%"});
                            TweenLite.to($("#bannerRight2"), 1, {width:"40%", scale:1, marginTop:"0"});
                            TweenLite.to($(".subCopy2"), 1, {right:"-75%"});

                            TweenLite.to($("#vid1"), 1, {right:"-45%", scale:1, marginTop:"0%"});
                            TweenLite.to($("#bannerRight1"), 1, {width:"40%", scale:1, marginTop:"0"});
                            TweenLite.to($(".subCopy"), 1, {right:"-75%"});  
                              
                        }); 

                        
                }

                if(index == '3'){
                    TweenLite.to($("#left1"), 3, {right:"100%"});
                    TweenLite.to($("#right1"), 3, {left:"100%"});
                    // TweenLite.to($(".read-more"), 0, {display:'block'});
                    // TweenLite.to($(".orange-banner"), 1, {opacity:0});
                }

                if(index == '4'){
                    TweenLite.to($("#left2"), 3, {right:"100%"});
                    TweenLite.to($("#right2"), 3, {left:"100%"});
                    // TweenLite.to($(".orange-banner"), 1, {opacity:0});
                }
            },
            onLeave: function(index, nextIndex, direction){
            var leavingSection = $(this);

            //after leaving section 2
            if(index == 2 ){
                TweenLite.to($("#left"), 1, {right:"0%"});
                TweenLite.to($("#right"), 1, {right:"0%",left:"0%"});

                TweenLite.to($("#vid2"), 1, {right:"-45%", scale:1, marginTop:"0%"});
                TweenLite.to($("#bannerRight2"), 1, {width:"40%", scale:1, marginTop:"0"});
                TweenLite.to($(".subCopy2"), 1, {right:"-75%"});

                TweenLite.to($("#vid3"), 1, {right:"-45%", scale:1, marginTop:"0%"});
                TweenLite.to($("#bannerRight3"), 1, {width:"40%", scale:1, marginTop:"0"});
                TweenLite.to($(".subCopy3"), 1, {right:"-75%"});   

                TweenLite.to($("#vid1"), 1, {right:"-45%", scale:1, marginTop:"0%"});
                TweenLite.to($("#bannerRight1"), 1, {width:"40%", scale:1, marginTop:"0"});
                TweenLite.to($(".subCopy1"), 1, {right:"-75%"});   
                
            }

            if(index == 3 ){
                TweenLite.to($("#left1"), 1, {right:"0%"});
                TweenLite.to($("#right1"), 1, {right:"0%",left:"0%"});
                // TweenLite.to($(".read-more"), 0, {display:'none'});
            }

            if(index == 4 ){
                TweenLite.to($("#left2"), 1, {right:"0%"});
                TweenLite.to($("#right2"), 1, {right:"0%",left:"0%"});
            }

        }

            });
        });

// alert("greater than 969");

};

//iPad
// var isiPad = navigator.userAgent.match(/iPad/i) != null;

if (isiPad) {

            $(document).ready(function() {
            $('#fullpage').fullpage({
                verticalCentered: false,
                afterLoad: function(anchorLink, index){
            var loadedSection = $(this);

               

                //using anchorLink
                if(index == '2'){

                    // TweenLite.to($("#left"), 3, {right:"100%"});
                    // TweenLite.to($("#right"), 3, {left:"100%"});
                    // TweenLite.to($("#vid1"), 1, {right:"8%", scale:1.3, marginTop:"3%", delay:0.5});
                    // TweenLite.to($("#bannerRight1"), 1, {width:"101%", scale:1, marginTop:"0", delay:0.5});
                    // TweenLite.to($(".subCopy"), 1, {right:"0%", delay:0.5});

                    // TweenLite.to($("#vid2"), 1, {right:"8%", scale:1.3, marginTop:"3%", delay:1});
                    // TweenLite.to($("#bannerRight2"), 1, {width:"101%", scale:1, marginTop:"0", delay:1});
                    // TweenLite.to($(".subCopy2"), 1, {right:"0%", delay:1});

                    // TweenLite.to($("#vid3"), 1, {right:"8%", scale:1.3, marginTop:"3%", delay:1.5});
                    // TweenLite.to($("#bannerRight3"), 1, {width:"101%", scale:1, marginTop:"0", delay:1.5});
                    // TweenLite.to($(".subCopy3"), 1, {right:"0%", delay:1.5});
            

                        // $( "#vid2" ).hover(function() {
  

                        //     TweenLite.to($("#vid2"), 1, {right:"8%", scale:1.3, marginTop:"3%"});
                        //     TweenLite.to($("#bannerRight2"), 1, {width:"101%", scale:1, marginTop:"0"});
                        //     TweenLite.to($(".subCopy2"), 1, {right:"0%"});

                        //     TweenLite.to($("#vid1"), 1, {right:"-45%", scale:1, marginTop:"0%"});
                        //     TweenLite.to($("#bannerRight1"), 1, {width:"40%", scale:1, marginTop:"0"});
                        //     TweenLite.to($(".subCopy"), 1, {right:"-75%"});

                        //     TweenLite.to($("#vid3"), 1, {right:"-45%", scale:1, marginTop:"0%"});
                        //     TweenLite.to($("#bannerRight3"), 1, {width:"40%", scale:1, marginTop:"0"});
                        //     TweenLite.to($(".subCopy3"), 1, {right:"-75%"});

                        // }); 

                        // $( "#vid1" ).hover(function() {


                        //     TweenLite.to($("#vid1"), 1, {right:"8%", scale:1.3, marginTop:"3%"});
                        //     TweenLite.to($("#bannerRight1"), 1, {width:"101%", scale:1, marginTop:"0"});
                        //     TweenLite.to($(".subCopy"), 1, {right:"0%"});

                        //     TweenLite.to($("#vid2"), 1, {right:"-45%", scale:1, marginTop:"0%"});
                        //     TweenLite.to($("#bannerRight2"), 1, {width:"40%", scale:1, marginTop:"0"});
                        //     TweenLite.to($(".subCopy2"), 1, {right:"-75%"});

                        //     TweenLite.to($("#vid3"), 1, {right:"-45%", scale:1, marginTop:"0%"});
                        //     TweenLite.to($("#bannerRight3"), 1, {width:"40%", scale:1, marginTop:"0"});
                        //     TweenLite.to($(".subCopy3"), 1, {right:"-75%"});                           
                            
                        // }); 

                        // $( "#vid3" ).hover(function() {

                        //     TweenLite.to($("#vid3"), 1, {right:"8%", scale:1.3, marginTop:"3%"});
                        //     TweenLite.to($("#bannerRight3"), 1, {width:"101%", scale:1, marginTop:"0"});
                        //     TweenLite.to($(".subCopy3"), 1, {right:"0%"});

                        //     TweenLite.to($("#vid2"), 1, {right:"-45%", scale:1, marginTop:"0%"});
                        //     TweenLite.to($("#bannerRight2"), 1, {width:"40%", scale:1, marginTop:"0"});
                        //     TweenLite.to($(".subCopy2"), 1, {right:"-75%"});

                        //     TweenLite.to($("#vid1"), 1, {right:"-45%", scale:1, marginTop:"0%"});
                        //     TweenLite.to($("#bannerRight1"), 1, {width:"40%", scale:1, marginTop:"0"});
                        //     TweenLite.to($(".subCopy1"), 1, {right:"-75%"});  
                              
                        // }); 
                                // TweenLite.to($(".read-more"), 0, {display:'block'}); //displays here so no jump

                        
                }

                if(index == '3'){
                    // TweenLite.to($("#left1"), 3, {right:"100%"});
                    // TweenLite.to($("#right1"), 3, {left:"100%"});
                    // TweenLite.to($(".read-more"), 0, {display:'block'});
                    
                }

                // if(index == '4'){
                //     TweenLite.to($("#left2"), 3, {right:"100%"});
                //     TweenLite.to($("#right2"), 3, {left:"100%"});
                    
                // }
            },
        //     onLeave: function(index, nextIndex, direction){
        //     var leavingSection = $(this);

        //     //after leaving section 2
        //     if(index == 2 ){
        //         TweenLite.to($("#left"), 1, {right:"0%"});
        //         TweenLite.to($("#right"), 1, {right:"0%",left:"0%"});

        //         TweenLite.to($("#vid2"), 1, {right:"-45%", scale:1, marginTop:"0%"});
        //         TweenLite.to($("#bannerRight2"), 1, {width:"40%", scale:1, marginTop:"0"});
        //         TweenLite.to($(".subCopy2"), 1, {right:"-75%"});

        //         TweenLite.to($("#vid3"), 1, {right:"-45%", scale:1, marginTop:"0%"});
        //         TweenLite.to($("#bannerRight3"), 1, {width:"40%", scale:1, marginTop:"0"});
        //         TweenLite.to($(".subCopy3"), 1, {right:"-75%"});   

        //         TweenLite.to($("#vid1"), 1, {right:"-45%", scale:1, marginTop:"0%"});
        //         TweenLite.to($("#bannerRight1"), 1, {width:"40%", scale:1, marginTop:"0"});
        //         TweenLite.to($(".subCopy1"), 1, {right:"-75%"});   
                
        //     }

        //     if(index == 3 ){
        //         TweenLite.to($("#left1"), 1, {right:"0%"});
        //         TweenLite.to($("#right1"), 1, {right:"0%",left:"0%"});
        //     }

        //     if(index == 4 ){
        //         TweenLite.to($("#left2"), 1, {right:"0%"});
        //         TweenLite.to($("#right2"), 1, {right:"0%",left:"0%"});
        //     }

        // }

            });
        });



// alert("less than 480");

};



