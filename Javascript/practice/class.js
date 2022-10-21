class Parent{
    asset = 1000;
    house = 5;
    housee(){
        console.log("i have 5 houses")
    }
}
class Chaild extends Parent{}
let a1 = new Chaild();
console.log(a1)
a1.housee()
