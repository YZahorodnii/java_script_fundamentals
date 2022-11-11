
var new_json = [
                 {
                   "_id": "636acd4ba58b7a392f8fac3f",
                   ],
                   "friends": [
                     {
                       "id": 0,
                       "name": "Bolton Hernandez"
                     },
                     {
                       "id": 1,
                       "name": "Harriett Newton"
                     },
                     {
                       "id": 2,
                       "name": "Consuelo Nicholson"
                     }
                   ],
                   "greeting": "Hello, Noelle Bond! You have 7 unread messages.",
                   "favoriteFruit": "apple"
                 },
                 {
                   "_id": "636acd4b8e689bf40c2942a4",
                   ],
                   "friends": [
                     {
                       "id": 0,
                       "name": "Morrow Ruiz"
                     },
                     {
                       "id": 1,
                       "name": "Deirdre Sellers"
                     },
                     {
                       "id": 2,
                       "name": "Hoover Smith"
                     }
                   ],
                   "greeting": "Hello, Vonda Dorsey! You have 1 unread messages.",
                   "favoriteFruit": "strawberry"
                 },
                 {
                   "_id": "636acd4b81b84087c3599d70",
                   ],
                   "friends": [
                     {
                       "id": 0,
                       "name": "Wood Britt"
                     },
                     {
                       "id": 1,
                       "name": "Alford Hayden"
                     },
                     {
                       "id": 2,
                       "name": "Roxanne Morrow"
                     }
                   ],
                   "greeting": "Hello, Alejandra Osborne! You have 3 unread messages.",
                   "favoriteFruit": "strawberry"
                 },
                 {
                   "_id": "636acd4bcf90c7ee18880b5c",
                   ],
                   "friends": [
                     {
                       "id": 0,
                       "name": "Huber Phelps"
                     },
                     {
                       "id": 1,
                       "name": "Rios Petersen"
                     },
                     {
                       "id": 2,
                       "name": "Barrera Marshall"
                     }
                   ],
                   "greeting": "Hello, Helena Frazier! You have 9 unread messages.",
                   "favoriteFruit": "strawberry"
                 },
                 {
                   "_id": "636acd4beda7cb44dcd523da",
                   ],
                   "friends": [
                     {
                       "id": 0,
                       "name": "Paige Hays"
                     },
                     {
                       "id": 1,
                       "name": "Roach Rodriguez"
                     },
                     {
                       "id": 2,
                       "name": "Lopez Walls"
                     }
                   ],
                   "greeting": "Hello, Kate Barker! You have 9 unread messages.",
                   "favoriteFruit": "banana"
                 },
                 {
                   "_id": "636acd4b84bc61a4aeb00037",
                   ],
                   "friends": [
                     {
                       "id": 0,
                       "name": "Joyner Griffith"
                     },
                     {
                       "id": 1,
                       "name": "Lena Hewitt"
                     },
                     {
                       "id": 2,
                       "name": "Sharlene Steele"
                     }
                   ],
                   "greeting": "Hello, Ellison Holmes! You have 8 unread messages.",
                   "favoriteFruit": "apple"
                 },
                 {
                   "_id": "636acd4b48b260720f27afab",
                   ],
                   "friends": [
                     {
                       "id": 0,
                       "name": "Sonya Potts"
                     },
                     {
                       "id": 1,
                       "name": "Jordan Cherry"
                     },
                     {
                       "id": 2,
                       "name": "Jessie Holman"
                     }
                   ],
                   "greeting": "Hello, Ashley Gentry! You have 8 unread messages.",
                   "favoriteFruit": "apple"
                 }
               ]

// return "_id"
for (var i = 0; i < new_json.length; i++) {
    console.log(new_json[i]["_id"]);

// return "_id" and "name"

for (var i = 0; i < new_json.length; i++) {
    reconsole.log(new_json[i]["_id"]);
     for (var j = 0; j < Object.keys(new_json[i]["friends"]).length; j++) {
        console.log(new_json[i]["friends"][j]["name"]);
    }
}

// return "tags" for each "_id"

for (var i = 0; i < new_json.length; i++) {
    console.log(new_json[i]["_id"]);
    for (var j = 0; j < Object.keys(new_json[i]["tags"]).length; j++) {
        console.log(new_json[i]["tags"][j]);
    }
}


//  return [{"_id": {"friends": [all names]}}]

for (var item in new_json) {
    var new_dict = {};
    new_dict[new_json[item]["_id"]] = {"friends": []};
    for (var name in new_json[item]["friends"]) {
        var names_dict = new_json[item]["friends"][name]["name"];
        var new_obj = [];
        new_dict[new_json[item]["_id"]]["friends"].push(names_dict);
        new_obj.push(new_dict);
    }
    console.log(new_obj);
}


//  return [{"_id": {"friends": [all names]}}]

for (var i = 0; i < new_json.length; i++) {
    var new_dict = {};
    console.log(typeof(new_dict));
    new_dict[new_json[i]["_id"]] = {"friends": []};
    for (j = 0; j < new_json[i]["friends"].length; j++) {
        var new_obj = [];
        var new_name = new_json[i]["friends"][j]["name"];
        new_dict[new_json[i]["_id"]]["friends"].push(new_name);
        new_obj.push(new_dict);

    }
    console.log(JSON.stringify(new_obj))
}
