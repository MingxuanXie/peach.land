/***********************************************
Script by Mingxuan Xie (http://mingxuan.fun/)
MIT License
***********************************************/

AFRAME.registerComponent('hypermove', {
    schema: {
        factor:{type: 'number', default: 0.05},
    },
    tick: function (time, timeDelta) {
        this.el.object3D.position.x += this.data.factor*(Math.random() - 0.5);
        this.el.object3D.position.y += this.data.factor*(Math.random() - 0.5);
        this.el.object3D.position.z += this.data.factor*(Math.random() - 0.5);
    }
});