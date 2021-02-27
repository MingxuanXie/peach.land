// Copyright © 2021 Mingxuan Xie (mingxuan.fun)
//  1. create the info a-text with id="info" inside a camera entity
//  2. put show-info="#info" inside the target entity

AFRAME.registerComponent('show-nft', {
    schema: {type: 'string', default: ''},

    init: function(){
      var data = this.data;
      var foo = document.getElementById(data);
      var el = this.el;
      el.addEventListener('raycaster-intersected',function(){
        foo.style.display = "block";
        console.log("hovered") 
      });
      el.addEventListener('raycaster-intersected-cleared',function(){
        foo.style.display = "none";
        console.log("leaved") 
      });
     }
});  