// – описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив – вам потрібно подумати. Нормальних варіантів опису – 2.
// Варіант, коли в вас буде одновимірний масив з 21 значенням виключаємо одразу

let weather = [
     {day: 'Sunday', temperature: [ 12, 20, 5]},
     {day: 'Monday', temperature: [ 10, 17, 2]},
     {day: 'Tuesday', temperature: [ 5, 10, 0]},
     {day: 'Wednesday', temperature: [ 13, 27, 10]},
     {day: 'Thursday', temperature: [ 15, 30, 15]},
     {day: 'Friday', temperature: [ 18, 32, 15]},
     {day: 'Saturday', temperature: [ 15, 30, 15]},
 ];

let weatherForecast = [
    {day: 'Sunday', temperature: [
            {morning : 12,}, {day: 20}, {night: 5}]
    },
    {day: 'Monday', temperature: [
            {morning : 12,}, {day: 20}, {night: 5}]
        },
    {day: 'Tuesday', temperature: [
            {morning : 12,}, {day: 20}, {night: 5}]
        },
    {day: 'Wednesday', temperature: [
        {morning : 12,}, {day: 20}, {night: 5}]
    },
    {day: 'Thursday', temperature: [
            {morning : 12,}, {day: 20}, {night: 5}]
        },
    {day: 'Friday', temperature: [
            {morning : 12,}, {day: 20}, {night: 5}]
        },
    {day: 'Saturday', temperature: [
            {morning : 12,}, {day: 20}, {night: 5}]
        }
];