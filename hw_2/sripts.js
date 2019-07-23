// var getWords = 'Прохожу #курс в компнии #intexsoft, по #javascript ##qwe #123 #,q #Q';

// var reg = /[#]([^\s]*)/ig;
// var result = (getWords.match(reg)+ "").replace(/#/, '').replace(/\,#/g, ' ').split(" ");
// console.log(result);

// function qwe(arr) {
// 	var result = (getWords.match(reg)+ "").replace(/#/, '').replace(/\,#/g, ' ').split(" ");
// 	console.log(result);
// 	return result;
// };
// console.log(qwe(getWords));


//2
// var mass = ['web', 'intexsoft', 'JavaScript', 'Intexsoft', 'script', 'programming'];
// normalizeWords = (normalizeWords+ "").toLowerCase().split(",");
// var filter = function (arr) {
// 	var mass = {};
// 	var noDublicate = arr.filter(function (argument) {
// 		return argument in mass ? 0 : mass[argument]=  1;
// 	});
// 	return noDublicate.join(', ');
// };
// console.log(filter(normalizeWords));

// normalizeWords: function (words) {
//         words = (words + "").toLowerCase().split(",");
//         var filter = function (arr) {
//             var noDublicate = arr.filter(function (argument) {
//                 return argument in mass ? 0 : mass[argument]=  1;
//             });
//             return noDublicate.join(', ');
//         };
//         return filter(words);
//     },

// function normalizeWords(words) {
//     words = (words + "").toLowerCase().split(",");
//     var filter = function (arr) {
//             var noDublicate = arr.filter(function (argument) {
//                 return argument in mass ? 0 : mass[argument]=  1;
//             });
//             return noDublicate.join(', ');
//         };
//         return filter(words);
// };
// console.log(normalizeWords(mass)); 

//3
var book = {};
function addressBook(command) {
    var cmd = command.split(' ');
        switch (cmd[0]) {
            case 'ADD':
                var name = cmd[1];
                var number = cmd[2].split(',');
                if (!(name in book)) {
                    book[name] = number;
                }
                else {
                    number.forEach(function (num) {
                        if (book[name].indexOf(num) === -1) {
                            book[name].push(num);
                        }
                    });
                }
                break;
            case 'REMOVE_PHONE':
                var numberDel = cmd[1];
                for (var name in book) {
                    var index = book[name].indexOf(numberDel);
                    if (index >= 0) {
                        if (book[name].length > 1) {
                            book[name].splice(index, 1);
                            console.log(true);
                        } else {
                            delete book[name];
                            console.log(false);
                        }
                            
                    }
                }
                break;
            case 'SHOW':
                var str = [];
                for (var name in book) {
                    str.push(name + ': ' + book[name].join(', '));
                }
                str.sort();
                console.log(str);
                break;
        }
};
addressBook('ADD Ivan 555-10-01,555-10-03');
addressBook('ADD Ivan 555-10-02');
addressBook('SHOW');
addressBook('REMOVE_PHONE 555-10-03');
addressBook('ADD Alex 555-20-01');
addressBook('SHOW');
addressBook('REMOVE_PHONE 555-20-01');
addressBook('SHOW');