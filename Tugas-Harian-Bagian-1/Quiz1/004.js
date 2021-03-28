
function graduate(arr) {
	let new_arr={}
	var temp_participated=[]
	var temp_completed=[]
	var temp_mastered=[]

	for(var i=0;i<arr.length;i++)
	{
		if(arr[i].score<60)
		{
			temp_participated.push(arr[i])
		}else if(arr[i].score>=60 && arr[i].score<=85)
		{
			temp_completed.push(arr[i])
			
		}else if(arr[i].score>85)
		{
			temp_mastered.push(arr[i])
			
		}
	}

	new_arr.participated=temp_participated
	new_arr.completed=temp_completed
	new_arr.mastered=temp_mastered
	return new_arr
}

// TEST CASE

var arr = [

{name:"Ahmad",score:80},

{name:"Regi",score:86},

{name:"Robert",score:59},

{name:"Bondra",score:81}

]


console.log(graduate(arr))

