function query(collection, select, filter) { 
    var massLib = [].slice.call(arguments);
    var finalArray = arguments[0];

    for (i = 1; i < massLib.length; i++) {
        if (massLib[i].name == 'filterIn') {
            finalArray = massLib[i].action(finalArray);
        }
    }

    for (i = 1; i < massLib.length; i++) {
        if (massLib[i].name == 'select') {
            finalArray = massLib[i].action(finalArray);
        }
    }
    return finalArray; 
};

function select() { 
    var massLib = [].slice.call(arguments);
    return {
        name: 'select',
        action: function (inputArr) {
            var outputArr = [];
            inputArr.forEach(function (objItem, i, arr) {
                var outputObject = {};
                massLib.forEach(function (argItem, i, arr) {
                    outputObject[argItem] = objItem[argItem];
                });
                outputArr.push(outputObject);
            });
            return outputArr;
        }
    } 
};

function filterIn(property, values) { 
    var massLib = [].slice.call(arguments);
    return {
        name: 'filterIn',
        action: function (inputArr) {
            outputArr = []
            inputArr.forEach(function (objItem) {
                var searchCheck = false;
                for (i = 0; i < massLib.length; i = i + 2) {
                    var fieldName = massLib[i];
                    var searchValues = massLib[i + 1];

                    searchCheck = searchValues.some(
                        function (value) { return value == objItem[fieldName] }
                    );
                    if (!searchCheck) {
                        break;
                    }
                }

                if (searchCheck) {
                    outputArr.push(objItem)
                }
            });
            return outputArr;
        }
    }
};

module.exports = {
    timeShift: function(date) {
    	return {
	        date: new Date(date),

	        toString: function () {
	            return this.date.getFullYear() + '-' +
	                ("00" + (this.date.getMonth() + 1)).slice(-2) + '-' +
	                ("00" + this.date.getDate()).slice(-2) + ' ' +

	                ("00" + this.date.getHours()).slice(-2) + ':' +
	                ("00" + this.date.getMinutes()).slice(-2);
	        },

	        add: function(arg, func) {
	            this.setValue(arg, this.method[func]);
	            this.value = this.toString();
	            return this;
	        },
	        
	        substract: function(arg, func) {
	            return this.add(-arg, func);
	        },

	        method: {
	            "years": "FullYear",
	            "months": "Month",
	            "days": "Date",
	            "hours": "Hours",
	            "minutes": "Minutes"
	        },

	        setValue: function(arg, func) {
	            this.date["setUTC" + func](arg + this.date["getUTC" + func]());
	            return this;
	        },
	    }
    },
    lib: {
        query: query,
        select: select,
        filterIn: filterIn
    }    
};