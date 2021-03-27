//  1. create the info a-text with id="info" inside a camera entity
//  2. put show-info="#info" inside the target entity
/*
@author   Mingxuan Xie <http://mingxuan.fun/>
@license  MIT
*/
AFRAME.registerComponent('show-info', {
    schema: {type: 'string', default: ''},

    init: function(){
      var data = this.data;
      var io = document.querySelector(data);
      var el = this.el;
      el.addEventListener('raycaster-intersected',function(){
        io.object3D.visible = true;
        // console.log("hovered") 
      });
      el.addEventListener('raycaster-intersected-cleared',function(){
        io.object3D.visible = false;
        // console.log("leaved") 
      });
     }
});  