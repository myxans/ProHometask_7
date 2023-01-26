let arr = [];
arr.push(16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47);

//1 Сума позитивних значень
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        sum += arr[i];
    }
}
console.log(sum);

// Кількість позитивних значень
let positive = arr.filter(elem =>(elem >0))
console.log(positive.length)

// Максимальне значення

let max = arr[0];

arr.forEach (
    (elem, index) => {
        if (index > 0) {
            if (max < elem) {
                max = elem
            }
            
        }
    }
);
console.log(max);

// Кількість негативних елементів

let negative = arr.filter(elem =>(elem < 0))
console.log(negative.length)

// Кількість непарних позитивних елементів

let odd = [];

arr.forEach(
    (elem) => {
        if (elem % 2 !== 0) {
            if (elem > 0) {odd.push(elem)}
        }
    }
);
console.log(odd);

// Кількість парних позитивних елементів

let even = [];

arr.forEach(
    (elem) => {
        if (elem % 2 == 0) {
            if (elem > 0) {even.push(elem)}
        }
    }
);
console.log(even);

// Сума парних позитивних елементів

let evensum = 0;
for (let i = 0; i < even.length; i++) {
    if (even[i] > 0) {
        evensum += even[i];
    }
}
console.log(evensum);

// Сума непарних позитивних елементів

let oddsum = 0;
for (let i = 0; i < odd.length; i++) {
    if (odd[i] > 0) {
        oddsum += odd[i];
    }
}
console.log(oddsum);

// Добуток позитивних елементів

let product = 1;
for (let i = 0; i < positive.length; i++) {
       product *= positive[i];
}
console.log(product);

// Найбільший серед елементів масиву, ост альні обнулити
let maxnull = arr[0];
let maxnulli = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > maxnull) {
    maxnull = arr[i];
    arr[maxnulli] = 0;
    maxnulli = i;
  } else {
    arr[i] = 0;
  }
}

console.log(arr);