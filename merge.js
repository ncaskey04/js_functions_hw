var arr1 = [3, 6, 11];
var arr2 = [2, 4, 5, 8, 9];
var arrMerged = []

var merge = function(arr1, arr2) {
// var arrMerged = [];

while (arr1.length !== 0 && arr2.length !== 0) {
if (arr1[0] < arr2[0]){
var smallest = arr1.shift();
arrMerged.push(smallest);
}
else {
var smallest = arr2.shift();
arrMerged.push(smallest);
}

}

if (arr1.length < arr2.length){
var last = arr2.shift();
arrMerged.push(last);
} else{
var last = arr1.shift();
arrMerged.push(last);
}
return arrMerged ;
}

merge(arr1, arr2);
console.log(arrMerged);