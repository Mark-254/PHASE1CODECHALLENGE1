 
 function calculateDemritPoints(speed){
    const speedlimit= 70;
    const kmPerDemritPoints= 5;
    const maxDemritPoints = 12;

    if (speed <= speedlimit){
        return ;
        console.log(`ok`);

 

 }
 const demritPoints = ((speed - speedlimit)/kmPerDemritPoints);
 console.log( "points:",demritPoints);

 if (demritPoints >= maxDemritPoints){
    return `license suspended`
    console.log(`license suspended`);
 }
    
 }
 console.log(calculateDemritPoints(90))
 
   
