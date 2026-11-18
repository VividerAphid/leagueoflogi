function getMaterialRecipes(){
    return {
        basicMaterial: {name:"Basic Material", cost:{scrap:2}, makes:1},
        refinedMaterial: {name: "Refined Material", cost:{scrap:2, chemical:2}, makes:1},
        constructionMaterial: {name:"Construction Material", cost:{scrap:2, rock:2}, makes:1},
        sand:{name:"Sand", cost:{rock:2}, makes:1},
        plastic:{name:"Plastic", cost:{chemical:2}, makes:1},
        explosivePowder:{name:"Explosive Powder", cost:{chemical:2}, makes:1},
        refinedChemical:{name:"Refined Chemical", cost:{chemical:2}, makes:1},
        fabric:{name:"Fabric", cost:{fiber:2}, makes:1},
    };
}

function getWeaponRecipes(){
    return {
        rifleT1:{name:"Rifle T1", cost:{basicMaterial:2}, makes:5},
        rifleT2:{name:"Rifle T2", cost:{basicMaterial:2, refinedMaterial:1}, makes:5},
        rifleT3:{name:"Rifle T3", cost:{basicMaterial:2, refinedMaterial:2}, makes:5},
        smgT1:{name:"SMG T1", cost:{basicMaterial:1, refinedMaterial:1}, makes:5},
        smgT2:{name:"SMG T2", cost:{basicMaterial:1, refinedMaterial:2}, makes:5},
        smgT3:{name:"SMG T3", cost:{basicMaterial:2, refinedMaterial:2}, makes:5},
        machineGunT1:{name:"Machine Gun T1", cost:{basicMaterial:3}, makes:3},
        machineGunT2:{name:"Machine Gun T2", cost:{basicMaterial:4}, makes:3},
        machineGunT3:{name:"Machine Gun T3", cost:{basicMaterial:5}, makes:3},
        rpg:{name:"RPG", cost:{explosivePowder:2, basicMaterial:2}, makes:5},
        grenade:{name:"Grenade", cost:{explosivePowder:2, basicMaterial:2}, makes:10},
        explosiveCharge:{name:"Explosive Charge", cost:{explosivePowder:2, refinedChemical:2}, makes:3},
    };
}

function getEquipmentRecipes(){
    return {
        bandage:{name:"Bandage", cost:{fabric:1}, makes:10},
        sandBag:{name:"Sandbag", cost:{fabric:1, sand:1}, makes:1},
        barbWire:{name:"Barb Wire", cost:{basicMaterial:2}, makes:1},
        toolKit:{name:"Toolkit", cost:{basicMaterial:2}, makes:5},
        radio:{name:"Radio", cost:{plastic:1, refinedChemical:1, basicMaterial:1}, makes:5},
        soldierSupply:{name:"Soldier Supply", cost:{fabric:1, basicMaterial:1}, makes:10},
        medkit:{name:"Medkit", cost:{bandage:1, plastic:1, refinedChemical:1}, makes:5},
        flagKit:{name:"Flag Kit", cost:{fabric:5, refinedMaterial:5, sandbag:1}, makes:1},
        vaultUnlocker:{name:"Vault Unlocker", cost:{basicMaterial:5, refinedMaterial:5, refinedChemical:5}, makes:1},
    };
}

function getVehicleRecipes(){
    return {
        scoutCar:{name:"Scout Car", cost:{refinedMaterial:5}, makes:1},
        tankT1:{name:"Tank T1", cost:{refinedMaterial:10}, makes:1},
        tankT2:{name:"Tank T2", cost:{refinedMaterial:12}, makes:1},
        tankT3:{name:"Tank T3", cost:{refinedMaterial:15}, makes:1},
        truckT1:{name:"Truck T1", cost:{basicMaterial:5}, makes:1},
        truckT2:{name:"Truck T2", cost:{basicMaterial:7}, makes:1},
        truckT3:{name:"Truck T3", cost:{basicMaterial:10}, makes:1},
    };
}

function getBuildingRecipes(){
   return {
    base:{name:"Base", cost:{constructionMaterial:50}},
    infantryPillbox:{name:"Infantry Pillbox", cost:{constructionMaterial:5}},
    vehiclePillbox:{name:"Vehicle Pillbox", cost:{constructionMaterial:10}},
    vehicleFactoryT1:{name:"Vehicle Factory T1", cost:{constructionMaterial:25}},
    vehicleFactoryT2:{name:"Vehicle Factory T2", cost:{constructionMaterial:30}},
    vehicleFactoryT3:{name:"Vehicle Factory T3", cost:{constructionMaterial:35}},
    garage:{name:"Garage", cost:{constructionMaterial:25}},
    factoryT1:{name:"Factory T1", cost:{constructionMaterial: 25}},
    factoryT2:{name:"Factory T2", cost:{constructionMaterial: 35}},
    factoryT3:{name:"Factory T3", cost:{constructionMaterial: 45}},
    workersQuarters:{name:"Workers Quarters", cost:{constructionMaterial:15}},
    refineryT1:{name:"Refinery T1", cost:{constructionMaterial:25}},
    refineryT2:{name:"Refinery T2", cost:{constructionMaterial:35}},
    refineryT3:{name:"Refinery T3", cost:{constructionMaterial:45}},
    warehouse:{name:"Warehouse", cost:{constructionMaterial:15}},
    techLab:{name:"Tech Lab", cost:{constructionMaterial:25}},
    sandbagWall:{name:"Sandbag Wall", cost:{sandBag: 3}},
   } 
}  