// 1. Funksiya yazacaqsınız və bu funksiya parametr olaraq number qəbul edir. Əgər number cütdürsə, həmin number-i 2-yə bölürsünüz, təkdirsə 3-ə vurub üzərinə 1 gəlirsiniz.
// üzərinə 1 gəlirsiniz.  Bu prosesi həmin number 1 olana qədər təkrarlanır ( 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1)

function ParametrNum(number) {
  while (number !== 1) {
    if (number % 2 === 0) {
      number = number / 2;
    } else {
      number = 3 * number + 1;
    }
    console.log(number);
  }
}

let inputNumber = 9;
ParametrNum(inputNumber);

// 2. Array-dəki ən böyük və ən kiçik ədədi tapın və onların fərqini console-a çıxarın.

function FunMinMax(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }

  let ferq = max - min;
  console.log("Ən böyük ədəd: " + max);
  console.log("Ən kiçik ədəd: " + min);
  console.log("Onlarin ferqi: " + ferq);
}

let commonArr = [5, 2, 9, 1, 7, 3, 8];
FunMinMax(commonArr);

// 3. Funksiya yazacaqsiniz və parametr olaraq array və number qəbul edəcək. Həmin number-in array-də olub-olmadığını yoxlayacaqsınız.

function Function3(array, number) {
  let check = false;

  for (let i = 0; i < array.length; i++) {
    if (array[i] == number) {
      check = true;
      break;
    }
  }
  if (check) {
    console.log(`${number} arraydadir`);
  } else {
    console.log(`${number} arrayda deyil`);
  }
}
const arr = [3, 6, 8, 9, 10, 220, 11, 51];
const num = 7;
Function3(arr, num);
