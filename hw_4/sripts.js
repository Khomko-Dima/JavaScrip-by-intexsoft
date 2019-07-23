function Collection() {
    this._items = [];

    this.setItems = function(items) {
        this._items = items.slice(0);
    }
};

Collection.prototype.values = function () {
	return this._items;
};

Collection.prototype.at = function (index) {
	return (index < 1 || index > this._items.length) ? null : this._items[index - 1];
};

Collection.prototype.append = function (item) {
	if (item instanceof Collection || item instanceof Array){
		item = this._items.concat(item.values());
		this.setItems(item);
	} else {
		this._items.push(item);
	}
};

Collection.prototype.removeAt = function (index) {
	if (index < 1 || index > this._items.length) {
		return false;
	} else {
		this._items.splice(index - 1, 1);
		return true;
	}
};

Collection.prototype.count = function () {
	return this._items.length;
};

Collection.from = function () {
    let collection =  new Collection(0),
        array = Array.prototype.slice.call(arguments);
    	array = array.toString().split(',');
    	collection.setItems(array);
    	return collection;
};

// var letters = Collection.from(['a', 'qwe', 'b']);
// console.log(letters);
// console.log(letters.values());
// var numbers = new Collection();
// console.log(numbers.append(10));
// console.log(numbers.append(20));
// console.log(numbers.at(2));
// console.log(numbers.values());
// console.log(numbers.count());
// console.log(numbers.removeAt(1));
// console.log(numbers.values());







