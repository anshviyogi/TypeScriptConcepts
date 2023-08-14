"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login = {
    name: "Ansh",
    id: "4563"
};
// '|' - this symbol is for Union
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
    else {
        id.toString();
    }
    return id;
}
getDbId('1234');
// in an array
var array = [1, 2, 3, 4, 5, '6'];
