$(document).ready(function(){
    //console.log("JQueryTest");
   // console.log($('header'));
   /*
    $('header').css('font-size','40px');
    $('header p').css('color','red');
    $('header,article,p').css('fontSize','40px');
    $('.ptag').css('color','blue');
    $('#pid').css('color','green ');
    $('.ptag').parent().css('backgroundColor','grey');
    $('.frm').children('.ptag').css('color','blue');
    $('.frm p:first-child').css('color','orange');
    $('.frm p:nth-child(3)').css('color','blue ');
    $('.frm > p').css('color','#fff');
    $('.frm p:odd').css('color','red');
    $(' tr:even').css('backgroundColor','grey');
    $(' tr:odd').css('backgroundColor','orange');
    $(' td').css('padding','20px');
    $(' td').css('border','solid 2px');
    $('table th').css('padding', '20px');
   
    $('.two').prev().css('color','orange');

    $('table tr:eq(4)').css('backgroundColor','red');
    $('.inp').parents().eq(2).css('backgroundColor','orange')
     
    $('article p').not('.two').css('backgroundColor','grey');
    $('p').filter('.four').css('color','green');
   

   $('.one').parent().css(
       {
           'color':'blue',
           'backgroundColor':'orange',
           'font-size': '2vw',
           'padding':'10px'

       }
   );
    

   console.log($('.container').offset());
   let off=$('.box').offset();
   $()
   onsole.log($('.box').offset());
 

   let offf={name:'Sina', familyname:'barbaz esfahani'};
   console.log(offf.familyname);
   offf.familyname="ahmadi";s
   console.log(offf.familyname);
   console.log(offf);
     */
    class touchs
{
constructor(name, familyname){
    this.name=name;
    this.familyname=familyname;
}
doit(){
    console.log(this.name+ "  " +this.familyname);
}
};

let hoviat=new touch('Sina','Barbaz');
hoviat.doit();
let mahdi= new touch("Mehdi","Mahdipouraraste");
mahdi.doit();


   

   
   


});