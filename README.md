# Local_DEV
asd
  getColor(id: number){
    if(id>0 && id<=3){
      document.documentElement.style.setProperty('--primary-color', "yellow");
    }else if(id>3){
      document.documentElement.style.setProperty('--primary-color', "red");
    }else{
      document.documentElement.style.setProperty('--primary-color', "green");
    }
  }
}

<div class="block primary-background">Primary</div>  <br>
