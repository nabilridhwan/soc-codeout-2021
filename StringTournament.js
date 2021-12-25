let input = "timetesteddata"
let workOnItem;
if(input.includes(",")){
let largestSumArray = [];

    workOnItem = input.split(",")
    workOnItem.forEach(stringSegment => {
        let largest = {}
        let splitted = stringSegment.split("");
        splitted.forEach(num => {
            largest[num] = 0;
    
        })
    
        splitted.forEach(num => {
            largest[num] += 1
        })
    
        let mostAppear = 0;
    
        Object.keys(largest).forEach(letter => {
            if(largest[letter] > mostAppear){
                mostAppear = largest[letter]
            }
        })
    
        largestSumArray.push(mostAppear)
            console.log(mostAppear)
            console.log(largest)
    
    })
    
    console.log(largestSumArray)
}else{
let largestSumArray = [];

    workOnItem = input;
    let largest = {}
        let splitted = workOnItem.split("");
        splitted.forEach(num => {
            largest[num] = 0;
    
        })
    
        splitted.forEach(num => {
            largest[num] += 1
        })
    
        let mostAppear = 0;
    
        Object.keys(largest).forEach(letter => {
            if(largest[letter] > mostAppear){
                mostAppear = largest[letter]
            }
        })
    
        largestSumArray.push(mostAppear)
            console.log(mostAppear)
            console.log(largest)
}
