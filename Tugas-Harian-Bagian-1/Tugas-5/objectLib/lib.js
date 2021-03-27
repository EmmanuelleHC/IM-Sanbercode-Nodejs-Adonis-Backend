function arrayToObject(arr) {
   var people = {}

for(var i=0,len=arr.length;i<len;i++) {

       var temp={}
       var fullName=''
       temp['firstName']=arr[i][0]
       temp['lastName']=arr[i][1]
       temp['gender']=arr[i][2]
       if(arr[i][3]!=null)
       {
            var now = new Date()
            var thisYear = now.getFullYear()-1
          
            if(thisYear-arr[i][3]<0)
            {
                temp['age']="Invalid Birth Year"
            }else{
                  temp['age']=thisYear-arr[i][3]
            }
       }else{
            temp['age']="Invalid Birth Year"
       }
       people[i+1+'. '+arr[i][0]+' '+arr[i][1]]=temp
}
return people
}
 


// Sepatu brand Stacattu seharga 1500000
// Baju brand Zoro seharga 500000
// Baju brand H&N seharga 250000
// Sweater brand Uniklooh seharga 175000
// Casing Handphone seharga 50000

function shoppingTime(memberId, money) {

    var list_item=[
            {item:"Sepatu Stacattu",harga:1500000},
            {item:"Baju brand Zoro",harga:500000},
            {item:"Baju brand H&N",harga:250000},
            {item:"Sweater brand Uniklooh",harga:175000},
            {item:"Casing Handphone",harga:50000}
        ]

    var list_baru=list_item.sort((a, b) => (a.harga > b.harga) ? 1 : -1)

    if(memberId==''||memberId==null)
    {
        return "Mohon maaf, toko X hanya berlaku untuk member saja"
    }
    if(money<50000)
    {
        return "Mohon maaf, uang tidak cukup"
    }
    var desc = {}
    var belanjaan=[]
    var total_harga=0;
    var kembalian=0
    desc.memberId=memberId
    desc.money=money
    
    list_baru.forEach(function (arrayItem) {
       
 
        if(money>=arrayItem.harga)
        {
            money=money-arrayItem.harga
            belanjaan.push(arrayItem.item)
            total_harga=total_harga+arrayItem.harga
 
            kembalian=money
        }
       
        

    });
    desc.listPurchased=belanjaan
    desc.changeMoney=kembalian
    return desc
  // you can only write your code here!
}
// Jika memberId kosong maka tampilkan "Mohon maaf, toko X hanya berlaku untuk member saja"
// Jika uang yang dimiliki kurang dari 50000 maka tampilkan "Mohon maaf, uang tidak cukup"
// Member yang berbelanja di toko X akan membeli barang yang paling mahal terlebih dahulu dan akan membeli barang-barang yang sedang SALE masing-masing 1 jika uang yang dimilikinya masih cukup.

 //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }


function naikAngkot(arr) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  var res=[]

     for(var i=0,len=arr.length;i<len;i++) {
       var temp={}
       var fee=0
       temp['penumpang']=arr[i][0]
       temp['naikDari']=arr[i][1]
       temp['tujuan']=arr[i][2]
       for(y= rute.indexOf(arr[i][1]);y<=rute.indexOf(arr[i][2]);y++)
       {
          if(arr[i][2]!=rute[y])
          {
            fee+=2000

          }
       }
       
       temp['bayar']=fee
       res[i]=temp
    }
    return res
}


function nilaiTertinggi(arr) {
   
var result=[]
result = arr.reduce(function (r, a) {
        r[a.class] = r[a.class] || [];

        r[a.class].push(a); 
         
        return r;   }, Object.create(null));


return(result);
}

// OUTPUT:

// {
//   adonis: { name: 'Asep', score: 90 },
//   vuejs: { name: 'Ahmad', score: 85 },
//   reactjs: { name: 'Afrida', score: 78}
// }


module.exports={
    arrayToObject:arrayToObject,
    shoppingTime:shoppingTime,
    naikAngkot:naikAngkot,
    nilaiTertinggi:nilaiTertinggi
    
}