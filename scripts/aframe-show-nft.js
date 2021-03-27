/*
@author   Mingxuan Xie <http://mingxuan.fun/>
@license  MIT
*/

AFRAME.registerComponent('show-nft', {
    schema: {type: 'string', default: ''},

    init: function(){
      var data = this.data;
      var foo = document.getElementById(data);
      var el = this.el;
      el.addEventListener('raycaster-intersected',function(){
        foo.style.display = "block";
        // console.log("hovered") 
      });
      el.addEventListener('raycaster-intersected-cleared',function(){
        foo.style.display = "none";
        // console.log("leaved") 
      });
     }
});  