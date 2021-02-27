AFRAME.registerComponent('click-url', {
  schema: {default: ''},

  init: function () {
    var url = this.data;
    this.el.addEventListener('click', function () {
    // window.location.href = url;
    window.open(url,"_self")
    });
  }
});  