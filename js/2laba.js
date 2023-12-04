function UserAvto(fname, name, oname, tel, address, postalCode, region, city, street, house, apartment) {
    this.fname = fname
    this.name = name
    this.oname = oname
    this.tel = tel
    this.address = {
        postalCode: postalCode,
        region: region,
        city: city,
        street: street,
        house: house,
        apartment: apartment,
    }
}

let users = [];
hjdjfhjdh
function createArrObject() {
    let question = confirm('Хотите продолжить?')
    while (question !== false) {
        let fname = prompt('Введите фамилию')
        let name = prompt('Введите имя')
        let oname = prompt('Введите отчество')
        let tel = prompt('Введите телефон')
        let address = prompt(' Введите адрес')
        let postalCode = prompt('Введите почтовый индекс')
        let region = prompt('Введите регион')
        let city = prompt('Введите город')
        let street = prompt('Введите улицу')
        let house = prompt('Введите дом')
        let apartment = prompt('Введите квартиру')

        let user = new UserAvto(fname, name, oname, tel, address, postalCode, region, city, street, house, apartment)
        users.push(user)
        question = confirm('Вопрос')
    }
}



function getSimilarity() {
    let userRequest = prompt('Что вы хотите найти?', '')
    let isFind = false;
    for (let i in users) {
        for (let key in users[i]) {
            if (typeof users[i][key] === 'object') {
                for (let nested_key in users[i][key]){
                    if (userRequest === users[i][key][nested_key])
                        console.log(users[i])
                        console.log(users[i][nested_key])
                        isFind = true
                }
            } else if (userRequest === users[i][key]) {
                console.log(users[i])
                isFind = true
            }
        }
    }
    if (!isFind) {
        console.log('Такого поле нет.Введите конкретное поле без ошибок')
    }
}

function getViewArray (){
    for(let i in users) {
        console.log(users[i])
    }
}

function getSortArray() {
    for (let i in users) {
        let keyValueArray = Object.entries(users);
        keyValueArray.sort((a, b) => a[0].localeCompare(b[0]));
        let sortedObject = Object.fromEntries(keyValueArray);
        console.log(sortedObject);
    }
}

function sortByNestedProperty(property) {
    return function (a, b) {
        const props = property.split('.');
        let propA = a;
        let propB = b;

        for (let i = 0; i < props.length; i++) {
            propA = propA[props[i]];
            propB = propB[props[i]];
        }

        if (propA < propB) {
            return -1;
        }
        if (propA > propB) {
            return 1;
        }
        return 0;
    };
}

function sortArray() {
    let sortParam = prompt('Введите какое поле нужно отсортировать (например, nestedObject.property)');
    users.sort(sortByNestedProperty(sortParam));
    console.log(users);
}


// for (let key in obj) {
//     if(obj.hasOwnProperty(key)){
//         console.log(`${key} : ${obj[key]}`)
//     }
// }

// function найтиИВывести(массив, свойство, значение) {
//     // Создаем пустой массив для хранения объектов с заданным значением свойства
//     var найденные = [];
//
//     // Проходим по массиву объектов
//     for (var i = 0; i < массив.length; i++) {
//         var объект = массив[i];
//
//         // Проверяем, имеет ли объект заданное значение свойства
//         if (объект.hasOwnProperty(свойство) && объект[свойство] === значение) {
//             найденные.push(объект); // Добавляем объект в массив найденных
//         }
//     }
//
//     // Выводим найденные объекты на экран
//     if (найденные.length > 0) {
//         console.log("Найденные объекты:");
//         for (var j = 0; j < найденные.length; j++) {
//             console.log(найденные[j]);
//         }
//     } else {
//         console.log("Объекты с заданным значением свойства не найдены.");
//     }
// }