const data = [
    { name: "Spice Garden", location: "Mumbai", orders: [400, 600, 800, 1200] },
    { name: "Burger Hub", location: "Delhi", orders: [500, 700, 650, 550] },
    { name: "Pasta Palace", location: "Bangalore", orders: [200, 300, 150, 250] }
    ]
  
  
  function RevenueAnalysis(data){
  let totalrevenue = [];
   for(let i=0;i<data.length;i++){
      let odrs = data[i].orders;
      let total = odrs.reduce((acc,curr) => acc + curr,0);
      totalrevenue.push({name : data[i].name,total : total})
  }
  
  
    function getTotalRevenue(){
    console.log("Total revenue:")
    for(let i=0;i<totalrevenue.length;i++){
      console.log(`${totalrevenue[i].name} : ₹${totalrevenue[i].total}`)
    }
    }
    
    function HighestRevenue(){
      
      let highest = 0;
      for(let i=0;i<totalrevenue.length;i++){
      if(totalrevenue[i].total > highest){
            highest = totalrevenue[i].total;
      }
    }
    
    let arr = totalrevenue.filter((item) => item.total === highest)
    console.log(`Highest revenue restaurant: ""${arr[0].name}"" (₹${arr[0].total})`)
    }
    
    function LowRevenue(){
        let arr = totalrevenue.filter((item) => item.total < 5000).map((item) => item.name);
        console.log("Low revenue restaurants:",arr)
    }
    
    
      return {getTotalRevenue,HighestRevenue,LowRevenue}
  }
  
  const analysis = RevenueAnalysis(data);
  analysis.getTotalRevenue();
  analysis.HighestRevenue()
  analysis.LowRevenue()
  