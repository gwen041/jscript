let names = ['Alice', 'Eve', 'John'];
function showName(element) {
     console.log(element);
}
names.forEach(showName);


let showName1 = element => console.log(element);
names.forEach(showName1);


let showName2 = (element) => {
	console.log(element);
}
names.forEach(showName2)


names.forEach(element => console.log(element));

