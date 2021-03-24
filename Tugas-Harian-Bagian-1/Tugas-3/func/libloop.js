function loopno1()
{
	var flag = 2
	while(flag <=20) { // Loop akan terus berjalan, karena nilai flag tidak pernah berubah
	  console.log(flag+' - I love coding' )
	  flag+=2
	} 
	flag=20
	while(flag >=2) { // Loop akan terus berjalan, karena nilai flag tidak pernah berubah
	  console.log(flag+' - I will become a mobile developer' )
	  flag-=2
	} 	
}

function loopno2()
{
	for(var x=1;x<=20;x++)
{
    if(x%2==0)
    {
        console.log(x+" - Berkualitas")
    }else if(x%2!=0 && x%3!=0)
    {
        console.log(x+" - Santai")
       

    }else if(x%2!=0 && x%3==0)
    {
        console.log(x+" - I Love Coding ")
    }
}
}

function persegipanjang(panjang,lebar)
{
    var temp1=''
    for(var x=1;x<=panjang;x++)
    {
        
           for(var y=1;y<=lebar;y++)
            {
                if(x==panjang)
            {
                console.log(temp1)
            }
            
            }
            
           temp1+='#'
            
         
         
    }
}

function tangga(sisi)
{
    var temp1=''
    for(var x=1;x<=sisi;x++)
    {
        
            temp1+='#'
            console.log(temp1)
            
         
         
    }
}

function catur(sisi)
{
    var temp1=''
    for(var x=1;x<=sisi;x++)
    {
        if(x%2==0)
        {
            temp1 ='# # # #'
        }else{
            temp1 =' # # # #'
        }
            
            console.log(temp1)
            
         
         
    }
}

module.exports={
    loopno1:loopno1,
    loopno2:loopno2,
    persegipanjang:persegipanjang,
    tangga:tangga,
    catur:catur
}