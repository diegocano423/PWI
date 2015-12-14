var dataRef = new Firebase('https://apperino.firebaseio.com/'),
	beveragesRef = dataRef.child("beverages"),
	foodRef = dataRef.child("food"),
	newFoodRef = dataRef.child("food"),
	newPrice = dataRef.child("beverages/0001"),
	deleteBread = dataRef.child("food/0005"),
	cokeNewPrice = dataRef.child("beverages/0003");

beveragesRef.set({
	"0001": {
		name: "Dr.Pepper",
		price: "$7"
	},

	"0002": {
		name: "Pepsi",
		price: "$6"
	},

	"0003": {
		name: "Coca Cola",
		price: "$5"
	}
});

foodRef.set({
	"0004": {
		name: "Doritos",
		price: "$8"
	},

	"0005": {
		name: "Bread",
		price: "$3"
	},

	"0006": {
		name: "Ice Cream",
		price: "$9"
	}
});

newFoodRef.push().set({
	name: "Pizza",
	price: "$12"
});

newPrice.update({
	"price": "$5"
});

deleteBread.remove();

cokeNewPrice.transaction(function() {
	cokeNewPrice.set({
		name: "Coke Cola",
		price: "$6"		
	})
});