// ############## Sets And Maps ##########

// ################ Sets ############## 

// let data = new Set();
// // add elements 
// data.add(45);
// data.add("Majid Ali");
// data.add(undefined)
// data.add(null)
// data.add("")

// ############# access elements in Set########### 
// let [first,second] = data;  // by using destructurng
// console.log(first,second)

// let data2 = data.values();  // to make the set an iterator
// let data3 = data2.next();  // it'll only store first value from iterator
// let data4 = data3.value;  // it'll give first value
// console.log(data4) 
// console.log(data)

// iterate through the set 
// for(let element of data){
//     console.log(element)
// }
// let data2 = [15,"Majid Ali", 45,null,"Hamza"];
// let result = [];
// let obj = {};
// for(let element of data){
//     let sameElement = data2.filter(ele=>{
//         return ele===element;
//     });
//     result.push({obj :  sameElement})
// }
// console.log(result)

// let data = [22,33,44,22,55,66,33];
// // set also usefull to an array of unique elements
// let pureData = new Set(data)
// console.log(pureData)

// Union of sets 
// let a = [1,2,3,4,5];
// let b = [6,7,8,9,10];
// let c = [...a,...b];  // for array we use spread operator 
// console.log(c)

// let A = new Set(a);
// let B = new Set(b);
// let C = new Set(c);
// console.log(c)

// InterSection Of Sets 
// let a = [1,2,3,4,5,6];
// let b = [2,4,6,8];
// let A = new Set(a);
// let B = new Set(b);
// // to find intersection , we use filter method 
// let c = a.filter(num=>{
//     return B.has(num);
// })
// let C = new Set(c);
// console.log(C)

// Difference Of Sets 
// let a = [1,2,3,4,5,6];
// let b = [2,4,6,8];
// let A = new Set(a);
// let B = new Set(b);
// // we can find difference using filter and has methos 
// let c = a.filter(num=>{
//     return !B.has(num);
// })
// let C = new Set(c);
// console.log(C)

// ############# Maps ############### 
// let map = new Map();
// // map is use to store key value pairs as object 
// // as object can't store number as a key 
// // but map can store any kind of data type
// map.set('name',"Majid Ali")
// map.set("age",20)
// map.set('01001', "Is my roll number")
// console.log(map)
// set and map both are iterator
// for(let ele of map){
//     console.log(ele)
// } 
// for(let [value,ele] of map){
//     console.log( value + ":" + ele)
// }
// get element from a  map 
// let name = map.get('name')
// console.log(name)

// Delete a key pair from map 
// map.delete("01001");
// console.log(map)

// Clear the Map using clear method
// console.log(map.size) 
// map.clear()
// console.log(map.size)

// #################### Sets And Maps Exercise ############# 

// level 1 

// create an empty set
// Create a set containing 0 to 10 using loop
// Remove an element from a set
// Clear a set
// Create a set of 5 string elements from array
// Create a map of countries and number of characters of a country

// let set = new Set();
// for(let i=0; i<=10; i++){
//     set.add(i)
// }
// console.log(set)
// set.delete(4)
// console.log(set)
// set.clear()

// let names = ["Majid Ali","Asad Ali", "Sajad Ali"];
// let setOfStrings = new Set(names);
// console.log(setOfStrings)

// let map = new Map();
// map.set('muslim',"Pakistan")
// map.set('hindu', "India")
// map.set('farsi', "France")
// map.set('angrez', "America")
// map.set('chinies', "China")
// map.set('gory', "Australia")
// console.log(map)

// let countries = new Map();
// countries.set('muslim',"Pakistan")
// countries.set('hindu', "India")
// countries.set('farsi', "France")
// countries.set('angrez', "America")
// countries.set('chinies', "China")
// countries.set('gory', "Australia")

// console.log(countries);
// let charactersOfCountry = new Map();
// for(let [country, size] of countries){
//     // charactersOfCountry.set(country +":"+ size.lenght)
//     charactersOfCountry.set(size,size.length)
// }
// console.log(charactersOfCountry)

// Level 2 

// find a union b 
// let a = [22,33,44,55];
// let b = [11,55,66,77,33];
// let c = [...a,...b]
// let setA = new Set(a)
// let setB = new Set(b);
// let Union = new Set(c);
// console.log(Union)

// find a intersection b 
// let a = [22,33,44,55];
// let b = [11,55,66,77,33];
// let setA = new Set(a);
// let seetB = new Set(b);
// let c = a.filter(num=>{
//     return seetB.has(num)
// })
// let SetC = new Set(c);
// console.log(SetC)

// Lavel 3 
// how many countries in map 
// const countries = [
//     ['Finland', 'Helsinki'],
//     ['Sweden', 'Stockholm'],
//     ['Norway', 'Oslo'],
//   ]

// console.log(`There are ${countries.length} countries in the given array.`)

// const countries = [
//     'Afghanistan',
//     'Albania',
//     'Algeria',
//     'Andorra',
//     'Angola',
//     'Antigua and Barbuda',
//     'Argentina',
//     'Armenia',
//     'Australia',
//     'Austria',
//     'Azerbaijan',
//     'Bahamas',
//     'Bahrain',
//     'Bangladesh',
//     'Barbados',
//     'Belarus',
//     'Belgium',
//     'Belize',
//     'Benin',
//     'Bhutan',
//     'Bolivia',
//     'Bosnia and Herzegovina',
//     'Botswana',
//     'Brazil',
//     'Brunei',
//     'Bulgaria',
//     'Burkina Faso',
//     'Burundi',
//     'Cambodia',
//     'Cameroon',
//     'Canada',
//     'Cape Verde',
//     'Central African Republic',
//     'Chad',
//     'Chile',
//     'China',
//     'Colombi',
//     'Comoros',
//     'Congo (Brazzaville)',
//     'Congo',
//     'Costa Rica',
//     "Cote d'Ivoire",
//     'Croatia',
//     'Cuba',
//     'Cyprus',
//     'Czech Republic',
//     'Denmark',
//     'Djibouti',
//     'Dominica',
//     'Dominican Republic',
//     'East Timor (Timor Timur)',
//     'Ecuador',
//     'Egypt',
//     'El Salvador',
//     'Equatorial Guinea',
//     'Eritrea',
//     'Estonia',
//     'Ethiopia',
//     'Fiji',
//     'Finland',
//     'France',
//     'Gabon',
//     'Gambia, The',
//     'Georgia',
//     'Germany',
//     'Ghana',
//     'Greece',
//     'Grenada',
//     'Guatemala',
//     'Guinea',
//     'Guinea-Bissau',
//     'Guyana',
//     'Haiti',
//     'Honduras',
//     'Hungary',
//     'Iceland',
//     'India',
//     'Indonesia',
//     'Iran',
//     'Iraq',
//     'Ireland',
//     'Israel',
//     'Italy',
//     'Jamaica',
//     'Japan',
//     'Jordan',
//     'Kazakhstan',
//     'Kenya',
//     'Kiribati',
//     'Korea, North',
//     'Korea, South',
//     'Kuwait',
//     'Kyrgyzstan',
//     'Laos',
//     'Latvia',
//     'Lebanon',
//     'Lesotho',
//     'Liberia',
//     'Libya',
//     'Liechtenstein',
//     'Lithuania',
//     'Luxembourg',
//     'Macedonia',
//     'Madagascar',
//     'Malawi',
//     'Malaysia',
//     'Maldives',
//     'Mali',
//     'Malta',
//     'Marshall Islands',
//     'Mauritania',
//     'Mauritius',
//     'Mexico',
//     'Micronesia',
//     'Moldova',
//     'Monaco',
//     'Mongolia',
//     'Morocco',
//     'Mozambique',
//     'Myanmar',
//     'Namibia',
//     'Nauru',
//     'Nepal',
//     'Netherlands',
//     'New Zealand',
//     'Nicaragua',
//     'Niger',
//     'Nigeria',
//     'Norway',
//     'Oman',
//     'Pakistan',
//     'Palau',
//     'Panama',
//     'Papua New Guinea',
//     'Paraguay',
//     'Peru',
//     'Philippines',
//     'Poland',
//     'Portugal',
//     'Qatar',
//     'Romania',
//     'Russia',
//     'Rwanda',
//     'Saint Kitts and Nevis',
//     'Saint Lucia',
//     'Saint Vincent',
//     'Samoa',
//     'San Marino',
//     'Sao Tome and Principe',
//     'Saudi Arabia',
//     'Senegal',
//     'Serbia and Montenegro',
//     'Seychelles',
//     'Sierra Leone',
//     'Singapore',
//     'Slovakia',
//     'Slovenia',
//     'Solomon Islands',
//     'Somalia',
//     'South Africa',
//     'Spain',
//     'Sri Lanka',
//     'Sudan',
//     'Suriname',
//     'Swaziland',
//     'Sweden',
//     'Switzerland',
//     'Syria',
//     'Taiwan',
//     'Tajikistan',
//     'Tanzania',
//     'Thailand',
//     'Togo',
//     'Tonga',
//     'Trinidad and Tobago',
//     'Tunisia',
//     'Turkey',
//     'Turkmenistan',
//     'Tuvalu',
//     'Uganda',
//     'Ukraine',
//     'United Arab Emirates',
//     'United Kingdom',
//     'United States',
//     'Uruguay',
//     'Uzbekistan',
//     'Vanuatu',
//     'Vatican City',
//     'Venezuela',
//     'Vietnam',
//     'Yemen',
//     'Zambia',
//     'Zimbabwe'
//   ];
//   console.log(countries.length);
