// Tapsiriq nomre 1:
// For loop-dan istifade ederek console-a 1-den 10-a qeder ededler cixsin.

// for (var i = 1; i <=10; i++) {
//    console.log(i)
// }

// ----------------------------------------------------------------
// Tapsiriq 2:
// For loop istifade ederek bu array-in icinden yalniz cut ededleri secin ve console-a cixardin

// var arr = [13,23,12,45,22,48,66,100]
//   for (var i = 0; i < arr.length; i++) {
//       if (arr[i]%2===0) {
//         console.log(arr[i]);
//       }
//   }
// --------------------------------------------------------------------
// Tapsiriq nomre 3:
// Tapsiriq 2-nin davami olaraq, hemen arraydeki cut ededleri yeni bos array-a push edin.

// var arr = [13, 23, 12, 45, 22, 48, 66, 100]
// var array = []
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         array.push(arr[i]);
//     }
// } console.log(array);

// -------------------------------------------------------------------------
// Tapsiriq nomre 4:
// Tapsiriq 2-deki array-den for loop istifade ederek cut edeleri silin. 

// var arr = [13, 23, 12, 45, 22, 48, 66, 100]
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//      arr.splice(i, 1);
//              i--
//     }
// }
//  console.log(arr);
// -----------------------------------------------------------------------------
// Tapsiriq 5:
// Bu array-den 78 ededini loop istifade ederek silin.

// var arr = [23,56,4,78,5,63,45,210,56]
// for (var i = 0; i < arr.length; i++) {
//    if (arr[i]===78) {
//        arr.splice(i,1);
//    }
// }
// console.log(arr)
// ---------------------------------------------------------------------------------

// Tapsiriq 6:
//   Bu array-in icindeki reqemleri console-da (1,2,3,4,5,6) bu formada gorsenmelidirler 

// var arr = [[1, 2], [3, 4], [5, 6]]
// for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr[i].length; j++) {
//         console.log(arr[i][j]);
//     }
// }
// -------------------------------------------------------------------------------------
// Tapsiriq 7:
// 435389 ededindeki reqemlerin cemini tapin. Yalniz for loop-u ile
// var num = "435389";
// var sum = 0;
// for (var i = 0; i < num.length; i++) {
//     sum += parseInt(num[i]);
// }console.log(sum);
// ------------------------------------------------------------------------------------------
// Tapsiriq 8:
// Bu arrayin icindeki en boyuk ededi tapin.

// var arr = [2, 45, 3, 67, 34, 567, 34, 345, 123]
// var findNumber = arr[0]

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > findNumber) {
//         findNumber = arr[i]
//     }
// } console.log(findNumber)
// ---------------------------------------------------------------------

// var arr = [6, 2, 1, 8, 10]
// var minNum = arr[0]
// var maxNum = arr[0];
// var newArr = []
// for (var i = 0; i < arr.length; i++) {
//     if (maxNum < arr[i]) {
//         maxNum = arr[i];
//     }
//     if (minNum > arr[i]) {
//         minNum = arr[i];
//     }

// }
// console.log(minNum)
// console.log(maxNum)
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] !== minNum && arr[i] !== maxNum) {
//         newArr.push(arr[i]);
//     }
// } console.log(newArr);

// var sum = 0
// for (let i = 0; i < newArr.length; i++) {
//     sum = sum + newArr[i]
// }
// console.log(sum);
// ------------------------------------------------------------

// Tapsiriq 1:
// 1den 100e qeder ededlerin icinden 10luqlari console-a cixardin.

// for (let i = 1; i < 100; i++) {
//    if (i%10===0) {
//     console.log(i);
//    }
// }
// ------------------------------------------------------------------------------
// Tapsiriq 2:
// Hemen 10luqlarin cemini tapin
var sum=0
for (let i = 1; i < 100; i++) {
    if (i%10===0) {
       sum+=i
       }
}
console.log(sum);

