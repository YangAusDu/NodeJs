const square = function(x){
    return x * x
}

const square2 = x =>{
    return x * x
}




const event = {
    name:'birthday party',
    guestList: ['a', 'b', 'c'],
    printGuestList(){
        const that = this
        this.guestList.forEach(function(guest) {
            console.log(guest + ' is coming to the ' + that.name)
        })
    }
}


const event2 = {
    name:'birthday party',
    guestList: ['a', 'b', 'c'],
    printGuestList(){
        this.guestList.forEach(guest => {
            console.log(guest + ' is coming to the ' + this.name)
        })
    }
}

console.log(square2(4))