function range(startNum, finishNum) {
	var array_range=[]
	for(var x=startNum;x<=finishNum;x++)
	{
		array_range.push(x)
	}
	return array_range
}


function rangeWithStep(startNum, finishNum, step) {

	var array_range=[]
	while(startNum<finishNum)
	{
		array_range.push(startNum)
		startNum+=step
	}
	
	return array_range

}

function sum(startNum, finishNum, step) {

	var array_range=[]
	sum=startNum;
	while(startNum<=finishNum)
	{
		
		startNum+=step
		sum+=startNum
		if(startNum==finishNum)
		{
			array_range.push(sum)
		}
		
	}
	
	return array_range

}

function dataHandling(inputan)
{
	for(var x=0;x<(inputan.length);x++)
	{
		
				console.log("Nomor ID: "+inputan[x][0])
				console.log("Nama Lengkap: "+inputan[x][1])
				console.log("TTL: "+inputan[x][2])
				console.log("Hobi: "+inputan[x][3])
				console.log("  ")
			
	}
	
}

function balikKata(kata)
{
	 var currentString = kata;
 	var newString = '';
 	if(kata)
 	{
 		for(var i=(kata.length)-1;i>=0;i--)
		{
			newString=newString+currentString[i]
		}
 	}
	

	return newString
	
}
module.exports={
    range:range,
    rangeWithStep:rangeWithStep,
    sum:sum,
    dataHandling:dataHandling,
    balikKata:balikKata
}