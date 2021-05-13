objects = {
    'id': 4, 'name': 'abc',
    'id': 6, 'name': 'abc5',
    'id': 2, 'name': 'abc2',
    'id': 1, 'name': 'abcd',

};

sortObjEntries = (obj) => {
    return Object.keys(objects).sort().reduce((obj, key) => {
        obj[key]= objects[key];
        return obj;
    })
}