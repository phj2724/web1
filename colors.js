var Links = {
  setColor:function(color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i<alist.length){
    //   alist[i].style.color = color;
    //   i=i+1;
    //   }
    $('a').css('color',color);
  }

}


var Body = {
  setColor:function(color){
      // document.querySelector('body').style.color=color;
      $('body').css('color',color);
  },
  setBackgroundcolor:function(color){
      document.querySelector('body').style.backgroundColor=color;
      // $('body').css('Backgroundcolor',color); 이건 안됨
  }
}

function nightday(self){

  var target = document.querySelector('body')
  if(self.value === 'night'){
    Body.setBackgroundcolor('black');
    Body.setColor('white');
    self.value = 'day';

    Links.setColor('powderblue');

} else {
    Body.setBackgroundcolor('white');
    Body.setColor('black');
    self.value = 'night';

    Links.setColor('blue')
  }
}
