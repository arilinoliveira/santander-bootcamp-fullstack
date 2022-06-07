function getAdmins(map){
    let adminList = [];

    for ([key, value] of crewMap){
        if (value === 'Admin'){
            adminList.push(key);
        }
    }
    return adminList;

}

const crewMap = new Map();

crewMap.set('Júlia', 'Admin');
crewMap.set('Carla', 'Admin');
crewMap.set('Lucas', 'User');
crewMap.set('Breno', 'Manager');
crewMap.set('Arilin', 'Admin');

console.log(getAdmins(crewMap));