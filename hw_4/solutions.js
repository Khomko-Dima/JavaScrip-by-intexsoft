module.exports = Collection;

/**
 * Конструктор коллекции
 */
function Collection() {
    this._items = [];

    this.setItems = function(items) {
        this._items = items.slice(0);
    }
};


// Методы коллекции
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
/**
 * Создание коллекции из массива значений
 */
Collection.from = function () {
    var collection =  new Collection(0),
		array = Array.prototype.slice.call(arguments);
		array = array.toString().split(',');
		collection.setItems(array);
		return collection;
};