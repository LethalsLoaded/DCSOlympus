export function getAircraftLabelsByRole(role: string)
{
   var aircrafts = [];
   for (let aircraft in aircraftDatabase)
   {
      //@ts-ignore
      for (let loadout of aircraftDatabase[aircraft]["loadouts"])
      {
         if (loadout["roles"].includes(role))
         {
            //@ts-ignore
            aircrafts.push(aircraftDatabase[aircraft]["label"])
            break;
         }
      }
   }
   return aircrafts;
}

export function getLoadoutNamesByRole(aircraft: string, role: string)
{
   var loadouts = [];
   //@ts-ignore
   for (let loadout of aircraftDatabase[aircraft]["loadouts"])
   {
      if (loadout["roles"].includes(role) || loadout["roles"].includes(""))
      {
         loadouts.push(loadout["name"])
      }
   }
   return loadouts;
}

export function getLoadoutsByName(aircraft: string, loadoutName: string)
{
   //@ts-ignore
   for (let loadout of aircraftDatabase[aircraft]["loadouts"])
   {
      if (loadout["name"] === loadoutName)
      {
         return loadout;
      }
   }
   return null;
}

export function getUnitLabel(name: string)
{
   //@ts-ignore TODO
   return aircraftDatabase[name] === undefined? name: aircraftDatabase[name].label;
}

export var aircraftDatabase = {
   "A-10C": {
      "name": "A-10C",
      "label": "A-10CII",
      "loadouts": [
         {
            "fuel": 1,
            "items": [
               {
                  "name": "Mk-84",
                  "quantity": 2
               },
               {
                  "name": "ECM",
                  "quantity": 1
               },
               {
                  "name": "AIM-9M",
                  "quantity": 2
               },
               {
                  "name": "Mk-82",
                  "quantity": 6
               }
            ],
            "roles": ["cas"],
            "code": "Mk-82*6,Mk-84*2,AIM-9*2,ECM",
            "name": "Heavy / Mk-84 / Short Range",
         },
         {
            "fuel": 1,
            "items": [],
            "roles": [""],
            "code": "",
            "name": "Empty Loadout",
         },
      ]
   },

   "F-5E": {
      "name": "F-5E",
      "label": "F-5E",
      "loadouts": [
         {
            "fuel": 1,
            "items": [
               {
                  "name": "Fuel 275",
                  "quantity": 3
               },
               {
                  "name": "AIM-9P5",
                  "quantity": 2
               }
            ],
            "roles": ["cap"],
            "code": "AIM-9P5*2, Fuel 275*3",
            "name": "Light / Fox 2 / Long Range"
         },
         {
            "fuel": 1,
            "items": [],
            "roles": [""],
            "code": "",
            "name": "Empty Loadout",
         },
      ]
   },

   "A-50": {
      "name": "A-50",
      "label": "A-50",
      "loadouts": [
         {
            "fuel": 1,
            "items": [],
            "roles": ["awacs"],
            "code": "",
            "name": "Default AWACS"
         },
         {
            "fuel": 1,
            "items": [],
            "roles": [""],
            "code": "",
            "name": "Empty Loadout",
         },
      ]
   },

   "An-26B": {
      "name": "An-26B",
      "label": "An-26B",
      "loadouts": [
         {
            "fuel": 1,
            "items": [],
            "roles": ["transport"],
            "code": "",
            "name": "Default Transport"
         },
      ]
   },

   "An-30M": {
      "name": "An-30M",
      "label": "An-30M",
      "loadouts": [
         {
            "fuel": 1,
            "items": [],
            "roles": ["reconnaissance"],
            "code": "",
            "name": "Default Reconnaissance"
         },
      ]
   },

   "B-1B": {
      "name": "B-1B",
      "label": "B-1B",
      "loadouts": [
         {
            "fuel": 1,
            "items": [
               {
                  "name": "Mk-84",
                  "quantity": 24
               }
            ],
            "roles": ["strike"],
            "code": "Mk-84*24",
            "name": "Heavy / Mk-84 / Long Range"
         },
         {
            "fuel": 1,
            "items": [],
            "roles": [""],
            "code": "",
            "name": "Empty Loadout",
         },
      ]
   },

   "B-52H": {
      "name": "B-52H",
      "label": "B-52H",
      "loadouts": [
         {
            "fuel": 1,
            "items": [
               {
                  "name": "Mk-84",
                  "quantity": 18
               }
            ],
            "roles": ["strike"],
            "code": "Mk-84*18",
            "name": "Heavy / Mk-84 / Long Range"
         },
         {
            "fuel": 1,
            "items": [],
            "roles": [""],
            "code": "",
            "name": "Empty Loadout",
         },
      ]
   },

   "C-130": {
      "name": "C-130",
      "label": "C-130",
      "loadouts": [
         {
            "fuel": 1,
            "items": [],
            "roles": ["transport"],
            "code": "C-130",
            "name": "Default Transport"
         },
      ]
   },

   "C-17A": {
      "name": "C-17A",
      "label": "C-17A",
      "loadouts": [
         {
            "fuel": 1,
            "items": [],
            "roles": ["transport"],
            "code": "",
            "name": "Default Transport"
         },
      ]
   },

   "E-3A": {
      "name": "E-3A",
      "label": "E-3A",
      "loadouts": [
         {
            "fuel": 1,
            "items": [],
            "roles": ["awacs"],
            "code": "",
            "name": "Default AWACS"
         },
      ]
   },

   "F-117A": {
      "name": "F-117A",
      "label": "F-117A",
      "loadouts": [
         {
            "fuel": 1,
            "items": [
               {
                  "name": "GBU-10",
                  "quantity": 2
               }
            ],
            "roles": ["strike"],
            "code": "GBU-10*2",
            "name": "Heavy / GBU-10 / Long Range"
         },
         {
            "fuel": 1,
            "items": [],
            "roles": [""],
            "code": "",
            "name": "Empty Loadout",
         },
      ]
   },

   "F-14A": {
      "name": "F-14A",
      "label": "F-14A",
      "loadouts": [
         {
            "fuel": 1,
            "items": [
               {
                  "name": "Fuel",
                  "quantity": 2
               },
               {
                  "name": "AIM-24C",
                  "quantity": 4
               },
               {
                  "name": "AIM-7",
                  "quantity": 4
               },
               {
                  "name": "AIM-9M",
                  "quantity": 2
               }
            ],
            "roles": ["cap"],
            "code": "AIM-54C*4,AIM-9*2,AIM-7*2",
            "name": "Heavy / Fox 3 / Short Range"
         },
         {
            "fuel": 1,
            "items": [],
            "roles": [""],
            "code": "",
            "name": "Empty Loadout",
         },
      ]
   },

   "F-15C": {
      "name": "F-15C",
      "label": "F-15C",
      "loadouts": [
         {
            "fuel": 1,
            "items": [
               {
                  "name": "Fuel",
                  "quantity": 3
               },
               {
                  "name": "AIM-120B",
                  "quantity": 6
               },
               {
                  "name": "AIM-9M",
                  "quantity": 2
               }
            ],
            "roles": ["cap"],
            "code": "AIM-9*2,AIM-120*6,Fuel*3",
            "name": "Heavy / Fox 3 / Long Range"
         },
         {
            "fuel": 1,
            "items": [],
            "roles": [""],
            "code": "",
            "name": "Empty Loadout",
         },
      ]
   },

   "F-15E": {
      "name": "F-15E",
      "label": "F-15E",
      "loadouts": [
         {
            "fuel": 1,
            "items": [
               {
                  "name": "Fuel",
                  "quantity": 2
               },
               {
                  "name": "AIM-120B",
                  "quantity": 2
               },
               {
                  "name": "AIM-9M",
                  "quantity": 2
               },
               {
                  "name": "Mk-84",
                  "quantity": 8
               }
            ],
            "roles": ["cas"],
            "code": "AIM-120B*2,AIM-9M*2,FUEL*3,Mk-84*8",
            "name": "Heavy / Fox 3, Mk-84 / Long Range"
         },
         {
            "fuel": 1,
            "items": [],
            "roles": [""],
            "code": "",
            "name": "Empty Loadout",
         },
      ]
   },

   "F-16C bl.52d": {
      "name": "F-16C bl.52d",
      "label": "F-16C bl.52d",
      "loadouts": [
         {
            "fuel": 1,
            "items": [
               {
                  "name": "Fuel",
                  "quantity": 2
               },
               {
                  "name": "AIM-120C",
                  "quantity": 4
               },
               {
                  "name": "AIM-9M",
                  "quantity": 2
               },
               {
                  "name": "ECM",
                  "quantity": 1
               }
            ],
            "roles": ["cap"],
            "code": "AIM-120C*4,AIM-9M*2,ECM,Fuel*2",
            "name": "Heavy / Fox 3 / Long Range"
         },
         {
            "fuel": 1,
            "items": [
               {
                  "name": "Fuel",
                  "quantity": 2
               },
               {
                  "name": "AIM-120C",
                  "quantity": 2
               },
               {
                  "name": "ECM",
                  "quantity": 1
               },
               {
                  "name": "LIGHTNING",
                  "quantity": 1
               },
               {
                  "name": "Mk-84",
                  "quantity": 2
               }
            ],
            "roles": ["strike"],
            "code": "Mk-84*2,AIM-120*2,ECM,Fuel*2,LIGHTNING",
            "name": "Heavy / Fox 3, Mk-84 / Long Range"
         },
         {
            "fuel": 1,
            "items": [],
            "roles": [""],
            "code": "",
            "name": "Empty Loadout",
         },
      ]
   },

   "F-4E": {
      "name": "F-4E",
      "label": "F-4E",
      "loadouts": [
         {
            "fuel": 1,
            "items": [
               {
                  "name": "Fuel",
                  "quantity": 2
               },
               {
                  "name": "AIM-7M",
                  "quantity": 4
               },
               {
                  "name": "AIM-9M",
                  "quantity": 4
               },
            ],
            "roles": ["cap"],
            "code": "AIM-9*4,AIM-7*4,Fuel*2",
            "name": "Heavy / Fox 1 / Long Range"
         },
         {
            "fuel": 1,
            "items": [
               {
                  "name": "ECM",
                  "quantity": 1
               },
               {
                  "name": "AIM-7",
                  "quantity": 2
               },
               {
                  "name": "Mk-82",
                  "quantity": 18
               }
            ],
            "roles": ["cas"],
            "code": "Mk-82*18,AIM-7*2,ECM",
            "name": "Heavy / Fox 1, Mk-84 / Long Range"
         },
         {
            "fuel": 1,
            "items": [],
            "roles": [""],
            "code": "",
            "name": "Empty Loadout",
         },
      ]
   },

   "FA-18C_hornet": {
      "name": "FA-18C_hornet",
      "label": "F/A-18C",
      "loadouts": [
         {
            "fuel": 1,
            "items": [
               {
                  "name": "Fuel",
                  "quantity": 3
               },
               {
                  "name": "AIM-120C",
                  "quantity": 4
               },
               {
                  "name": "AIM-9M",
                  "quantity": 2
               },
            ],
            "roles": ["cap"],
            "code": "AIM-120*4,AIM-9*2,Fuel*3",
            "name": "Heavy / Fox 3 / Long Range"
         },
         {
            "fuel": 1,
            "items": [
               {
                  "name": "Fuel",
                  "quantity": 3
               },
               {
                  "name": "GBU-10",
                  "quantity": 2
               },
               {
                  "name": "AIM-9M",
                  "quantity": 2
               },
               {
                  "name": "FLIR Pod",
                  "quantity": 1
               },
               {
                  "name": "AIM-7",
                  "quantity": 1
               }
            ],
            "roles": ["strike"],
            "code": "GBU-10*2,AIM-9*2,AIM-7,FLIR Pod,Fuel*3",
            "name": "Heavy / Fox 1, Mk-84 / Long Range"
         },
         {
            "fuel": 1,
            "items": [],
            "roles": [""],
            "code": "",
            "name": "Empty Loadout",
         },
      ]
   },

   "IL-76MD": {
      "name": "IL-76MD",
      "label": "IL-76MD",
      "loadouts": [
         {
            "fuel": 1,
            "items": [],
            "roles": ["transport"],
            "code": "",
            "name": "Default Transport"
         },
      ]
   },

   "IL-78M": {
      "name": "IL-78M",
      "label": "IL-78M",
      "loadouts": [
         {
            "fuel": 1,
            "items": [],
            "roles": ["tanker"],
            "code": "",
            "name": "Default Tanker"
         }
      ]
   },

   "KC-135": {
      "name": "KC-135",
      "label": "KC-135",
      "loadouts": [
         {
            "fuel": 1,
            "items": [],
            "roles": ["tanker"],
            "code": "",
            "name": "Default Tanker"
         }
      ]
   },

   "MiG-23MLD": {
      "name": "MiG-23MLD",
      "label": "MiG-23MLD",
      "loadouts": [
         {
            "fuel": 1,
            "items": [
               {
                  "name": "Fuel-800",
                  "quantity": 1
               },
               {
                  "name": "R-60M",
                  "quantity": 4
               },
               {
                  "name": "R-24R",
                  "quantity": 2
               },
            ],
            "roles": ["cap"],
            "code": "R-24R*2,R-60M*4,Fuel-800",
            "name": "Heavy / Fox 1 / Long Range"
         },
         {
            "fuel": 1,
            "items": [
               {
                  "name": "Fuel-800",
                  "quantity": 1
               },
               {
                  "name": "FAB-500",
                  "quantity": 2
               },
               {
                  "name": "R-60M",
                  "quantity": 2
               },
            ],
            "roles": ["strike"],
            "code": "FAB-500*2,R-60M*2,Fuel-800",
            "name": "Heavy / FAB-500 / Long Range"
         },
         {
            "fuel": 1,
            "items": [],
            "roles": [""],
            "code": "",
            "name": "Empty Loadout",
         },
      ]
   },

   "MiG-25RBT": {
      "name": "MiG-25RBT",
      "label": "MiG-25RBT",
      "loadouts": [
         {
            "fuel": 1,
            "items": [
               {
                  "name": "R-60M",
                  "quantity": 2
               },
            ],
            "roles": ["cap"],
            "code": "R-60M*2",
            "name": "Heavy / Fox 2 / Long Range"
         },
         {
            "fuel": 1,
            "items": [
               {
                  "name": "FAB-500",
                  "quantity": 2
               },
               {
                  "name": "R-60M",
                  "quantity": 2
               },
            ],
            "roles": ["strike"],
            "code": "FAB-500x2_60x2",
            "name": "Heavy / FAB-500 / Long Range"
         },
         {
            "fuel": 1,
            "items": [],
            "roles": [""],
            "code": "",
            "name": "Empty Loadout",
         },
      ]
   },

   "MiG-27K": {
      "name": "MiG-27K",
      "label": "MiG-27K",
      "loadouts": [
         {
            "fuel": 1,
            "items": [
               {
                  "name": "B-8",
                  "quantity": 4
               },
            ],
            "roles": ["cas"],
            "code": "B-8*4",
            "name": "Heavy / B-8 / Short Range"
         },
         {
            "fuel": 1,
            "items": [],
            "roles": [""],
            "code": "",
            "name": "Empty Loadout",
         },
      ]
   },

   "MiG-29S": {
      "name": "MiG-29S",
      "label": "MiG-29S",
      "loadouts": [
         {
            "fuel": 1,
            "items": [
               {
                  "name": "R-73M",
                  "quantity": 2
               },
               {
                  "name": "R-77",
                  "quantity": 4
               },
               {
                  "name": "Fuel-1500",
                  "quantity": 1
               },
            ],
            "roles": ["cap"],
            "code": "R-73*2,R-60M*2,R-27R*2",
            "name": "Heavy / Fox 3 / Long Range"
         },
         {
            "fuel": 1,
            "items": [],
            "roles": [""],
            "code": "",
            "name": "Empty Loadout",
         },
      ]
   },

   "MiG-31": { 
      "name": "MiG-31",
      "label": "MiG-31", 
      "loadouts": [
         {
            "fuel": 1,
            "items": [
               { 
                  "name": "R-33", 
                  "quantity": 4 
               }, 
               { 
                  "name": "R-40T", 
                  "quantity": 2 
               }
            ], 
            "roles": ["cap"],
            "code": "R-40T*2,R-33*4",
            "name": "Heavy / Fox 3 / Short Range" 
         },
         {
            "fuel": 1,
            "items": [],
            "roles": [""],
            "code": "",
            "name": "Empty Loadout",
         },
      ] 
   },

   "Mirage 2000-5": {
      "name": "Mirage 2000-5",  
      "label": "Mirage 2000-5", 
      "loadouts": [
         {
            "fuel": 1,
            "items": [
               {
                  "name": "R 550",  
                  "quantity": 2     
               },
               {
                  "name": "SUPER 530F",  
                  "quantity": 2     
               },
               {
                  "name": "Fuel",   
                  "quantity": 1     
               }
            ],
            "roles": ["cap"],
            "code": "R 550*2,SUPER 530F*2,Fuel",
            "name": "Heavy / Fox 1 / Long Range"
         },
         {
            "fuel": 1,
            "items": [],
            "roles": [""],
            "code": "",
            "name": "Empty Loadout",
         },
      ]
   },

   "MQ-9 Reaper": {
      "name": "MQ-9 Reaper",
      "label": "MQ-9 Reaper",
      "loadouts": [
         {
            "fuel": 1,
            "items": [
               {
                  "name": "AGM-114K",
                  "quantity": 12
               }
            ],
            "roles": ["drone"],
            "code": "AGM-114K*12",
            "name": "Default Drone"
         },
         {
            "fuel": 1,
            "items": [],
            "roles": [""],
            "code": "",
            "name": "Empty Loadout",
         },
      ]
   }, 

   "Su-17M4": {
      "name": "Su-17M4",
      "label": "Su-17M4",
      "loadouts": [
         {
            "fuel": 1,
            "items": [
               {
                  "name": "R-60M",
                  "quantity": 2
               },
               {
                  "name": "B-8",
                  "quantity": 4
               },
               {
                  "name": "Fuel",
                  "quantity": 2
               }
            ],
            "roles": ["cas"],
            "code": "B-8*4,R-60M*2,Fuel*2",
            "name": "Heavy / B-8 / Long Range"
         },
         {
            "fuel": 1,
            "items": [],
            "roles": [""],
            "code": "",
            "name": "Empty Loadout",
         },
      ]
   },
                 
   "Su-24M": {
      "name": "Su-24M",
      "label": "Su-24M",
      "loadouts": [
         {
               "fuel": 1,
               "items": [
               {
                  "name": "R-60M",
                  "quantity": 2
               },
               {
                  "name": "FAB-1500",
                  "quantity": 2
               },
           ],
            "roles": ["strike"],
            "code": "FAB-1500*2,R-60M*2",
            "name": "Heavy / FAB-500 / Short Range"
         },
         {
            "fuel": 1,
            "items": [],
            "roles": [""],
            "code": "",
            "name": "Empty Loadout",
         },
      ]
   },
   
   "Su-25": {
      "name": "Su-25",
      "label": "Su-25",
      "loadouts": [
         {
            "fuel": 1,
            "items": [
               {
                  "name": "R-60M",
                  "quantity": 2
               },
               {
                  "name": "UB-13",
                  "quantity": 6
               },
               {
                  "name": "Fuel",
                  "quantity": 2
               },
            ],
            "roles": ["cas"],
            "code": "UB-13*6,R-60M*2,Fuel*2",
            "name": "Heavy / Rockets / Short Range"
         },
         {
            "fuel": 1,
            "items": [],
            "roles": [""],
            "code": "",
            "name": "Empty Loadout",
         },
      ]
   },

   "Su-27": {
      "name": "Su-27",
      "label": "Su-27",
      "loadouts": [
         {
            "fuel": 1,
            "items": [
               {
                  "name": "R-73",
                  "quantity": 4
               },
               {
                  "name": "R-27ER",
                  "quantity": 6
               }
            ],
            "roles": ["cap"],
            "code": "R-73*4,R-27ER*6",
            "name": "Heavy / Fox 3 / Short Range"
         },
         {
            "fuel": 1,
            "items": [],
            "roles": [""],
            "code": "",
            "name": "Empty Loadout",
         },
      ]
   },
   
   "Su-30": {
      "name": "Su-30",
      "label": "Su-30",
      "loadouts": [
         {
            "fuel": 1,
            "items": [
               {
                  "name": "R-73",
                  "quantity": 2
               },
               {
                  "name": "R-77",
                  "quantity": 4
               },
               {
                  "name": "R-27ER",
                  "quantity": 2
               }
            ],
            "roles": ["cap"],
            "code": "R-40T*2,R-33*4",
            "name": "Heavy / Fox 3 / Short Range"
         },
         {
            "fuel": 1,
            "items": [],
            "roles": [""],
            "code": "",
            "name": "Empty Loadout",
         },
      ]
   },

   "Su-33": {
      "name": "Su-33",
      "label": "Su-33",
      "loadouts": [
         {
            "fuel": 1,
            "items": [
               {
                  "name": "R-73",
                  "quantity": 4
               },
               {
                  "name": "R-27ER",
                  "quantity": 6
               },
               {
                  "name": "R-27R",
                  "quantity": 2
               }
            ],
            "roles": ["cap"],
            "code": "R-73*4,R-27R*2,R-27ER*6",
            "name": "Heavy / Fox 3 / Short Range"
         },
         {
            "fuel": 1,
            "items": [],
            "roles": [""],
            "code": "",
            "name": "Empty Loadout",
         },
      ]
   },
 
   "Su-34": {
      "name": "Su-34",
      "label": "Su-34",
      "loadouts": [
        {
            "fuel": 1,
            "items": [
               {
                  "name": "R-73",
                  "quantity": 2
               },
               {
                  "name": "FAB-250",
                  "quantity": 4
               },
               {
                  "name": "UB-13",
                  "quantity": 4
               },
               {
                  "name": "ECM",
                  "quantity": 1
               },
            ],
            "roles": ["cas"],
            "code": "UB-13*4,FAB-250*4,R-73*2,ECM",
            "name": "Heavy / Mixed Ground Ordinance / Short Range"
         },
         {
            "fuel": 1,
            "items": [],
            "roles": [""],
            "code": "",
            "name": "Empty Loadout",
         },
      ]
   },

   "Tornado IDS": {
      "name": "Tornado IDS",
      "label": "Tornado IDS",
      "loadouts": [
         {
            "fuel": 1,
            "items": [
               {
                  "name": "AIM-9M",
                  "quantity": 2
               },
               {
                  "name": "Fuel",
                  "quantity": 2
               },
               {
                  "name": "Mk-82",
                  "quantity": 4
               }
            ],
            "roles": ["cas"],
            "code": "Mk-82*4,AIM-9*2,Fuel*2",
            "name": "Heavy / Mk-84 / Long Range"
         },
         {
            "fuel": 1,
            "items": [],
            "roles": [""],
            "code": "",
            "name": "Empty Loadout",
         },
      ]
   },

   "Tu-142": {
      "name": "Tu-142",
      "label": "Tu-142",
      "loadouts": [
         {
            "fuel": 1,
            "items": [
               {
                  "name": "Kh-35",
                  "quantity": 6
               }
            ],
            "roles": ["strike"],
            "code": "Kh-35*6",
            "name": "Heavy / Kh-35 / Long Range"
         },
         {
            "fuel": 1,
            "items": [],
            "roles": [""],
            "code": "",
            "name": "Empty Loadout",
         },
      ]
   },

   "Tu-160": {
      "name": "Tu-160",
      "label": "Tu-160",
      "loadouts": [
         {
            "fuel": 1,
            "items": [
               {
                  "name": "Kh-65",
                  "quantity": 12
               }
            ],
            "roles": ["strike"],
            "code": "Kh-65*12",
            "name": "Heavy / Kh-65 / Long Range"
         },
         {
            "fuel": 1,
            "items": [],
            "roles": [""],
            "code": "",
            "name": "Empty Loadout",
         },
      ]
   },

   "Tu-22M3": {
      "name": "Tu-22M3",
      "label": "Tu-22M3",
      "loadouts": [
         {
            "fuel": 1,
            "items": [
               {
                  "name": "Kh-22n",
                  "quantity": 2
               },
            ],
            "roles": ["strike"],
            "code": "Kh-22N*2",
            "name": "Heavy / Kh-22n / Long Range"
         },
         {
            "fuel": 1,
            "items": [],
            "roles": [""],
            "code": "",
            "name": "Empty Loadout",
         },
      ]
   },

   "Tu-95MS": {
      "name": "Tu-95MS",
      "label": "Tu-95MS",
      "loadouts": [
         {
            "fuel": 1,
            "items": [
               {
                  "name": "Kh-65",
                  "quantity": 6
               },
            ],
            "roles": ["strike"],
            "code": "Kh-65*6",
            "name": "Heavy / Kh-65 / Long Range"
         },
         {
            "fuel": 1,
            "items": [],
            "roles": [""],
            "code": "",
            "name": "Empty Loadout"
         }
      ]
   },
}