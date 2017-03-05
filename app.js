let super911Data = [
  {name:"Professor X", phone:"703-485-5653",comicOrigin:"Marvel",image_url:"http://areyouthereason.com/wp-content/uploads/2015/05/james-mcavoy-charles-xavier-759x500.jpg"},
  {name:"Superman", phone:"703-221-3456",comicOrigin:"Marvel",image_url:"https://s-media-cache-ak0.pinimg.com/236x/a2/0b/fb/a20bfbcf2adc9d2bc6e68c4b5651526c.jpg"},
  {name:"Spiderman", phone:"703-122-6453",comicOrigin:"Marvel",image_url:"http://cdn.collider.com/wp-content/uploads/tobey-maguire-spider-man-image.jpg"},
  {name:"Quicksilver", phone:"703-122-6453",comicOrigin:"Marvel",image_url:"http://static.srcdn.com/wp-content/uploads/Evan-Peters-Teases-X-Men-Apocalypse-Quicksilver-Scene.jpg"}
]

angular.module("super911App", [])
  .controller('super911sCtrl', super911Controller)

function super911Controller (){
  this.super911s = super911Data;
  this.addNumbers = function(){
    let super911 = {name: this.newSuper911.name, description: this.newSuper911.description, image_url:this.newSuper911.image_url}
    this.super911s.push(super911)
  }
};
