// Element Data (All 118 elements)
const elementsData = [
  { atomicNumber: 1, name: "Hydrogen", symbol: "H", atomicMass: "1.008", electronConfig: "1s1", oxidationStates: "+1, -1", state: "gas", group: "non-metal" },
  { atomicNumber: 2, name: "Helium", symbol: "He", atomicMass: "4.0026", electronConfig: "1s2", oxidationStates: "0", state: "gas", group: "noble-gas" },
  { atomicNumber: 3, name: "Lithium", symbol: "Li", atomicMass: "6.94", electronConfig: "[He] 2s1", oxidationStates: "+1", state: "solid", group: "alkali-metal" },
  { atomicNumber: 4, name: "Beryllium", symbol: "Be", atomicMass: "9.0122", electronConfig: "[He] 2s2", oxidationStates: "+2", state: "solid", group: "alkaline-earth" },
  { atomicNumber: 5, name: "Boron", symbol: "B", atomicMass: "10.81", electronConfig: "[He] 2s2 2p1", oxidationStates: "+3", state: "solid", group: "non-metal" },
  { atomicNumber: 6, name: "Carbon", symbol: "C", atomicMass: "12.01", electronConfig: "[He] 2s2 2p2", oxidationStates: "+4, -4", state: "solid", group: "non-metal" },
  { atomicNumber: 7, name: "Nitrogen", symbol: "N", atomicMass: "14.01", electronConfig: "[He] 2s2 2p3", oxidationStates: "+5, +4, +3, +2, +1, -1, -2, -3", state: "gas", group: "non-metal" },
  { atomicNumber: 8, name: "Oxygen", symbol: "O", atomicMass: "16.00", electronConfig: "[He] 2s2 2p4", oxidationStates: "-2", state: "gas", group: "non-metal" },
  { atomicNumber: 9, name: "Fluorine", symbol: "F", atomicMass: "19.00", electronConfig: "[He] 2s2 2p5", oxidationStates: "-1", state: "gas", group: "halogen" },
  { atomicNumber: 10, name: "Neon", symbol: "Ne", atomicMass: "20.18", electronConfig: "[He] 2s2 2p6", oxidationStates: "0", state: "gas", group: "noble-gas" },
  { atomicNumber: 11, name: "Sodium", symbol: "Na", atomicMass: "22.99", electronConfig: "[Ne] 3s1", oxidationStates: "+1", state: "solid", group: "alkali-metal" },
  { atomicNumber: 12, name: "Magnesium", symbol: "Mg", atomicMass: "24.31", electronConfig: "[Ne] 3s2", oxidationStates: "+2", state: "solid", group: "alkaline-earth" },
  { atomicNumber: 13, name: "Aluminum", symbol: "Al", atomicMass: "26.98", electronConfig: "[Ne] 3s2 3p1", oxidationStates: "+3", state: "solid", group: "metal" },
  { atomicNumber: 14, name: "Silicon", symbol: "Si", atomicMass: "28.09", electronConfig: "[Ne] 3s2 3p2", oxidationStates: "+4, -4", state: "solid", group: "non-metal" },
  { atomicNumber: 15, name: "Phosphorus", symbol: "P", atomicMass: "30.97", electronConfig: "[Ne] 3s2 3p3", oxidationStates: "+5, +3, -3", state: "solid", group: "non-metal" },
  { atomicNumber: 16, name: "Sulfur", symbol: "S", atomicMass: "32.07", electronConfig: "[Ne] 3s2 3p4", oxidationStates: "+6, +4, -2", state: "solid", group: "non-metal" },
  { atomicNumber: 17, name: "Chlorine", symbol: "Cl", atomicMass: "35.45", electronConfig: "[Ne] 3s2 3p5", oxidationStates: "+7, +5, +3, +1, -1", state: "gas", group: "halogen" },
  { atomicNumber: 18, name: "Argon", symbol: "Ar", atomicMass: "39.95", electronConfig: "[Ne] 3s2 3p6", oxidationStates: "0", state: "gas", group: "noble-gas" },
  { atomicNumber: 19, name: "Potassium", symbol: "K", atomicMass: "39.10", electronConfig: "[Ar] 4s1", oxidationStates: "+1", state: "solid", group: "alkali-metal" },
  { atomicNumber: 20, name: "Calcium", symbol: "Ca", atomicMass: "40.08", electronConfig: "[Ar] 4s2", oxidationStates: "+2", state: "solid", group: "alkaline-earth" },
  { atomicNumber: 21, name: "Scandium", symbol: "Sc", atomicMass: "44.96", electronConfig: "[Ar] 3d1 4s2", oxidationStates: "+3", state: "solid", group: "transition-metal" },
  { atomicNumber: 22, name: "Titanium", symbol: "Ti", atomicMass: "47.87", electronConfig: "[Ar] 3d2 4s2", oxidationStates: "+4, +3", state: "solid", group: "transition-metal" },
  { atomicNumber: 23, name: "Vanadium", symbol: "V", atomicMass: "50.94", electronConfig: "[Ar] 3d3 4s2", oxidationStates: "+5, +4, +3, +2", state: "solid", group: "transition-metal" },
  { atomicNumber: 24, name: "Chromium", symbol: "Cr", atomicMass: "52.00", electronConfig: "[Ar] 3d5 4s1", oxidationStates: "+6, +3, +2", state: "solid", group: "transition-metal" },
  { atomicNumber: 25, name: "Manganese", symbol: "Mn", atomicMass: "54.94", electronConfig: "[Ar] 3d5 4s2", oxidationStates: "+7, +6, +4, +3, +2", state: "solid", group: "transition-metal" },
  { atomicNumber: 26, name: "Iron", symbol: "Fe", atomicMass: "55.85", electronConfig: "[Ar] 3d6 4s2", oxidationStates: "+3, +2", state: "solid", group: "transition-metal" },
  { atomicNumber: 27, name: "Cobalt", symbol: "Co", atomicMass: "58.93", electronConfig: "[Ar] 3d7 4s2", oxidationStates: "+3, +2", state: "solid", group: "transition-metal" },
  { atomicNumber: 28, name: "Nickel", symbol: "Ni", atomicMass: "58.69", electronConfig: "[Ar] 3d8 4s2", oxidationStates: "+2", state: "solid", group: "transition-metal" },
  { atomicNumber: 29, name: "Copper", symbol: "Cu", atomicMass: "63.55", electronConfig: "[Ar] 3d10 4s1", oxidationStates: "+2, +1", state: "solid", group: "transition-metal" },
  { atomicNumber: 30, name: "Zinc", symbol: "Zn", atomicMass: "65.38", electronConfig: "[Ar] 3d10 4s2", oxidationStates: "+2", state: "solid", group: "transition-metal" },
  { atomicNumber: 31, name: "Gallium", symbol: "Ga", atomicMass: "69.72", electronConfig: "[Ar] 3d10 4s2 4p1", oxidationStates: "+3", state: "solid", group: "metal" },
  { atomicNumber: 32, name: "Germanium", symbol: "Ge", atomicMass: "72.63", electronConfig: "[Ar] 3d10 4s2 4p2", oxidationStates: "+4, +2", state: "solid", group: "non-metal" },
  { atomicNumber: 33, name: "Arsenic", symbol: "As", atomicMass: "74.92", electronConfig: "[Ar] 3d10 4s2 4p3", oxidationStates: "+5, +3, -3", state: "solid", group: "non-metal" },
  { atomicNumber: 34, name: "Selenium", symbol: "Se", atomicMass: "78.97", electronConfig: "[Ar] 3d10 4s2 4p4", oxidationStates: "+6, +4, -2", state: "solid", group: "non-metal" },
  { atomicNumber: 35, name: "Bromine", symbol: "Br", atomicMass: "79.90", electronConfig: "[Ar] 3d10 4s2 4p5", oxidationStates: "+7, +5, +3, +1, -1", state: "liquid", group: "halogen" },
  { atomicNumber: 36, name: "Krypton", symbol: "Kr", atomicMass: "83.80", electronConfig: "[Ar] 3d10 4s2 4p6", oxidationStates: "0", state: "gas", group: "noble-gas" },
  { atomicNumber: 37, name: "Rubidium", symbol: "Rb", atomicMass: "85.47", electronConfig: "[Kr] 5s1", oxidationStates: "+1", state: "solid", group: "alkali-metal" },
{ atomicNumber: 38, name: "Strontium", symbol: "Sr", atomicMass: "87.62", electronConfig: "[Kr] 5s2", oxidationStates: "+2", state: "solid", group: "alkaline-earth" },
{ atomicNumber: 39, name: "Yttrium", symbol: "Y", atomicMass: "88.91", electronConfig: "[Kr] 4d1 5s2", oxidationStates: "+3", state: "solid", group: "transition-metal" },
  { atomicNumber: 40, name: "Zirconium", symbol: "Zr", atomicMass: "91.22", electronConfig: "[Kr] 4d2 5s2", oxidationStates: "+4", state: "solid", group: "transition-metal" },
  { atomicNumber: 41, name: "Niobium", symbol: "Nb", atomicMass: "92.91", electronConfig: "[Kr] 4d4 5s1", oxidationStates: "+5, +3", state: "solid", group: "transition-metal" },
  { atomicNumber: 42, name: "Molybdenum", symbol: "Mo", atomicMass: "95.95", electronConfig: "[Kr] 4d5 5s1", oxidationStates: "+6, +5, +4, +3", state: "solid", group: "transition-metal" },
  { atomicNumber: 43, name: "Technetium", symbol: "Tc", atomicMass: "98", electronConfig: "[Kr] 4d5 5s2", oxidationStates: "+7, +6, +4", state: "solid", group: "transition-metal" },
  { atomicNumber: 44, name: "Ruthenium", symbol: "Ru", atomicMass: "101.07", electronConfig: "[Kr] 4d7 5s1", oxidationStates: "+8, +6, +4, +3", state: "solid", group: "transition-metal" },
  { atomicNumber: 45, name: "Rhodium", symbol: "Rh", atomicMass: "102.91", electronConfig: "[Kr] 4d8 5s1", oxidationStates: "+4, +3", state: "solid", group: "transition-metal" },
  { atomicNumber: 46, name: "Palladium", symbol: "Pd", atomicMass: "106.42", electronConfig: "[Kr] 4d10", oxidationStates: "+4, +2", state: "solid", group: "transition-metal" },
  { atomicNumber: 47, name: "Silver", symbol: "Ag", atomicMass: "107.87", electronConfig: "[Kr] 4d10 5s1", oxidationStates: "+1", state: "solid", group: "transition-metal" },
  { atomicNumber: 48, name: "Cadmium", symbol: "Cd", atomicMass: "112.41", electronConfig: "[Kr] 4d10 5s2", oxidationStates: "+2", state: "solid", group: "transition-metal" },
  { atomicNumber: 49, name: "Indium", symbol: "In", atomicMass: "114.82", electronConfig: "[Kr] 4d10 5s2 5p1", oxidationStates: "+3", state: "solid", group: "metal" },
  { atomicNumber: 50, name: "Tin", symbol: "Sn", atomicMass: "118.71", electronConfig: "[Kr] 4d10 5s2 5p2", oxidationStates: "+4, +2", state: "solid", group: "metal" },
  { atomicNumber: 51, name: "Antimony", symbol: "Sb", atomicMass: "121.76", electronConfig: "[Kr] 4d10 5s2 5p3", oxidationStates: "+5, +3, -3", state: "solid", group: "non-metal" },
  { atomicNumber: 52, name: "Tellurium", symbol: "Te", atomicMass: "127.60", electronConfig: "[Kr] 4d10 5s2 5p4", oxidationStates: "+6, +4, -2", state: "solid", group: "non-metal" },
  { atomicNumber: 53, name: "Iodine", symbol: "I", atomicMass: "126.90", electronConfig: "[Kr] 4d10 5s2 5p5", oxidationStates: "+7, +5, +1, -1", state: "solid", group: "halogen" },
  { atomicNumber: 54, name: "Xenon", symbol: "Xe", atomicMass: "131.29", electronConfig: "[Kr] 4d10 5s2 5p6", oxidationStates: "0", state: "gas", group: "noble-gas" },
  { atomicNumber: 55, name: "Cesium", symbol: "Cs", atomicMass: "132.91", electronConfig: "[Xe] 6s1", oxidationStates: "+1", state: "solid", group: "alkali-metal" },
  { atomicNumber: 56, name: "Barium", symbol: "Ba", atomicMass: "137.33", electronConfig: "[Xe] 6s2", oxidationStates: "+2", state: "solid", group: "alkaline-earth" },
  { atomicNumber: 57, name: "Lanthanum", symbol: "La", atomicMass: "138.91", electronConfig: "[Xe] 5d1 6s2", oxidationStates: "+3", state: "solid", group: "lanthanide" },
  { atomicNumber: 58, name: "Cerium", symbol: "Ce", atomicMass: "140.12", electronConfig: "[Xe] 4f1 5d1 6s2", oxidationStates: "+4, +3", state: "solid", group: "lanthanide" },
  { atomicNumber: 59, name: "Praseodymium", symbol: "Pr", atomicMass: "140.91", electronConfig: "[Xe] 4f3 6s2", oxidationStates: "+4, +3", state: "solid", group: "lanthanide" },
  { atomicNumber: 60, name: "Neodymium", symbol: "Nd", atomicMass: "144.24", electronConfig: "[Xe] 4f4 6s2", oxidationStates: "+3", state: "solid", group: "lanthanide" },
  { atomicNumber: 61, name: "Promethium", symbol: "Pm", atomicMass: "145", electronConfig: "[Xe] 4f5 6s2", oxidationStates: "+3", state: "solid", group: "lanthanide" },
  { atomicNumber: 62, name: "Samarium", symbol: "Sm", atomicMass: "150.36", electronConfig: "[Xe] 4f6 6s2", oxidationStates: "+3, +2", state: "solid", group: "lanthanide" },
  { atomicNumber: 63, name: "Europium", symbol: "Eu", atomicMass: "151.96", electronConfig: "[Xe] 4f7 6s2", oxidationStates: "+3, +2", state: "solid", group: "lanthanide" },
  { atomicNumber: 64, name: "Gadolinium", symbol: "Gd", atomicMass: "157.25", electronConfig: "[Xe] 4f7 5d1 6s2", oxidationStates: "+3", state: "solid", group: "lanthanide" },
  { atomicNumber: 65, name: "Terbium", symbol: "Tb", atomicMass: "158.93", electronConfig: "[Xe] 4f9 6s2", oxidationStates: "+4, +3", state: "solid", group: "lanthanide" },
  { atomicNumber: 66, name: "Dysprosium", symbol: "Dy", atomicMass: "162.50", electronConfig: "[Xe] 4f10 6s2", oxidationStates: "+3", state: "solid", group: "lanthanide" },
  { atomicNumber: 67, name: "Holmium", symbol: "Ho", atomicMass: "164.93", electronConfig: "[Xe] 4f11 6s2", oxidationStates: "+3", state: "solid", group: "lanthanide" },
  { atomicNumber: 68, name: "Erbium", symbol: "Er", atomicMass: "167.26", electronConfig: "[Xe] 4f12 6s2", oxidationStates: "+3", state: "solid", group: "lanthanide" },
  { atomicNumber: 69, name: "Thulium", symbol: "Tm", atomicMass: "168.93", electronConfig: "[Xe] 4f13 6s2", oxidationStates: "+3, +2", state: "solid", group: "lanthanide" },
  { atomicNumber: 70, name: "Ytterbium", symbol: "Yb", atomicMass: "173.05", electronConfig: "[Xe] 4f14 6s2", oxidationStates: "+3, +2", state: "solid", group: "lanthanide" },
  { atomicNumber: 71, name: "Lutetium", symbol: "Lu", atomicMass: "174.97", electronConfig: "[Xe] 4f14 5d1 6s2", oxidationStates: "+3", state: "solid", group: "lanthanide" },
  { atomicNumber: 72, name: "Hafnium", symbol: "Hf", atomicMass: "178.49", electronConfig: "[Xe] 4f14 5d2 6s2", oxidationStates: "+4", state: "solid", group: "transition-metal" },
  { atomicNumber: 73, name: "Tantalum", symbol: "Ta", atomicMass: "180.95", electronConfig: "[Xe] 4f14 5d3 6s2", oxidationStates: "+5", state: "solid", group: "transition-metal" },
  { atomicNumber: 74, name: "Tungsten", symbol: "W", atomicMass: "183.84", electronConfig: "[Xe] 4f14 5d4 6s2", oxidationStates: "+6, +5, +4", state: "solid", group: "transition-metal" },
  { atomicNumber: 75, name: "Rhenium", symbol: "Re", atomicMass: "186.21", electronConfig: "[Xe] 4f14 5d5 6s2", oxidationStates: "+7, +6, +4", state: "solid", group: "transition-metal" },
  { atomicNumber: 76, name: "Osmium", symbol: "Os", atomicMass: "190.23", electronConfig: "[Xe] 4f14 5d6 6s2", oxidationStates: "+8, +6, +4", state: "solid", group: "transition-metal" },
  { atomicNumber: 77, name: "Iridium", symbol: "Ir", atomicMass: "192.22", electronConfig: "[Xe] 4f14 5d7 6s2", oxidationStates: "+6, +4, +3", state: "solid", group: "transition-metal" },
  { atomicNumber: 78, name: "Platinum", symbol: "Pt", atomicMass: "195.08", electronConfig: "[Xe] 4f14 5d9 6s1", oxidationStates: "+4, +2", state: "solid", group: "transition-metal" },
  { atomicNumber: 79, name: "Gold", symbol: "Au", atomicMass: "196.97", electronConfig: "[Xe] 4f14 5d10 6s1", oxidationStates: "+3, +1", state: "solid", group: "transition-metal" },
  { atomicNumber: 80, name: "Mercury", symbol: "Hg", atomicMass: "200.59", electronConfig: "[Xe] 4f14 5d10 6s2", oxidationStates: "+2, +1", state: "liquid", group: "transition-metal" },
  { atomicNumber: 81, name: "Thallium", symbol: "Tl", atomicMass: "204.38", electronConfig: "[Xe] 4f14 5d10 6s2 6p1", oxidationStates: "+3, +1", state: "solid", group: "metal" },
  { atomicNumber: 82, name: "Lead", symbol: "Pb", atomicMass: "207.2", electronConfig: "[Xe] 4f14 5d10 6s2 6p2", oxidationStates: "+4, +2", state: "solid", group: "metal" },
  { atomicNumber: 83, name: "Bismuth", symbol: "Bi", atomicMass: "208.98", electronConfig: "[Xe] 4f14 5d10 6s2 6p3", oxidationStates: "+5, +3", state: "solid", group: "metal" },
  { atomicNumber: 84, name: "Polonium", symbol: "Po", atomicMass: "209", electronConfig: "[Xe] 4f14 5d10 6s2 6p4", oxidationStates: "+6, +4, +2", state: "solid", group: "non-metal" },
  { atomicNumber: 85, name: "Astatine", symbol: "At", atomicMass: "210", electronConfig: "[Xe] 4f14 5d10 6s2 6p5", oxidationStates: "+7, +5, +1, -1", state: "solid", group: "halogen" },
  { atomicNumber: 86, name: "Radon", symbol: "Rn", atomicMass: "222", electronConfig: "[Xe] 4f14 5d10 6s2 6p6", oxidationStates: "0", state: "gas", group: "noble-gas" },
  { atomicNumber: 87, name: "Francium", symbol: "Fr", atomicMass: "223", electronConfig: "[Rn] 7s1", oxidationStates: "+1", state: "solid", group: "alkali-metal" },
  { atomicNumber: 88, name: "Radium", symbol: "Ra", atomicMass: "226", electronConfig: "[Rn] 7s2", oxidationStates: "+2", state: "solid", group: "alkaline-earth" },
  { atomicNumber: 89, name: "Actinium", symbol: "Ac", atomicMass: "227", electronConfig: "[Rn] 6d1 7s2", oxidationStates: "+3", state: "solid", group: "actinide" },
  { atomicNumber: 90, name: "Thorium", symbol: "Th", atomicMass: "232.04", electronConfig: "[Rn] 6d2 7s2", oxidationStates: "+4", state: "solid", group: "actinide" },
  { atomicNumber: 91, name: "Protactinium", symbol: "Pa", atomicMass: "231.04", electronConfig: "[Rn] 5f2 6d1 7s2", oxidationStates: "+5, +4", state: "solid", group: "actinide" },
  { atomicNumber: 92, name: "Uranium", symbol: "U", atomicMass: "238.03", electronConfig: "[Rn] 5f3 6d1 7s2", oxidationStates: "+6, +4, +3", state: "solid", group: "actinide" },
  { atomicNumber: 93, name: "Neptunium", symbol: "Np", atomicMass: "237", electronConfig: "[Rn] 5f4 6d1 7s2", oxidationStates: "+6, +5, +4, +3", state: "solid", group: "actinide" },
  { atomicNumber: 94, name: "Plutonium", symbol: "Pu", atomicMass: "244", electronConfig: "[Rn] 5f6 7s2", oxidationStates: "+6, +5, +4, +3", state: "solid", group: "actinide" },
  { atomicNumber: 95, name: "Americium", symbol: "Am", atomicMass: "243", electronConfig: "[Rn] 5f7 7s2", oxidationStates: "+6, +5, +4, +3", state: "solid", group: "actinide" },
  { atomicNumber: 96, name: "Curium", symbol: "Cm", atomicMass: "247", electronConfig: "[Rn] 5f7 6d1 7s2", oxidationStates: "+4, +3", state: "solid", group: "actinide" },
  { atomicNumber: 97, name: "Berkelium", symbol: "Bk", atomicMass: "247", electronConfig: "[Rn] 5f9 7s2", oxidationStates: "+4, +3", state: "solid", group: "actinide" },
  { atomicNumber: 98, name: "Californium", symbol: "Cf", atomicMass: "251", electronConfig: "[Rn] 5f10 7s2", oxidationStates: "+4, +3", state: "solid", group: "actinide" },
  { atomicNumber: 99, name: "Einsteinium", symbol: "Es", atomicMass: "252", electronConfig: "[Rn] 5f11 7s2", oxidationStates: "+3", state: "solid", group: "actinide" },
  { atomicNumber: 100, name: "Fermium", symbol: "Fm", atomicMass: "257", electronConfig: "[Rn] 5f12 7s2", oxidationStates: "+3", state: "solid"} ,
  { atomicNumber: 101, name: "Mendelevium", symbol: "Md", atomicMass: "258", electronConfig: "[Rn] 5f13 7s2", oxidationStates: "+3, +2", state: "solid", group: "actinide" },
  { atomicNumber: 102, name: "Nobelium", symbol: "No", atomicMass: "259", electronConfig: "[Rn] 5f14 7s2", oxidationStates: "+3, +2", state: "solid", group: "actinide" },
  { atomicNumber: 103, name: "Lawrencium", symbol: "Lr", atomicMass: "262", electronConfig: "[Rn] 5f14 6d1 7s2", oxidationStates: "+3", state: "solid", group: "actinide" },
  { atomicNumber: 104, name: "Rutherfordium", symbol: "Rf", atomicMass: "267", electronConfig: "[Rn] 5f14 6d2 7s2", oxidationStates: "+4", state: "solid", group: "transition-metal" },
  { atomicNumber: 105, name: "Dubnium", symbol: "Db", atomicMass: "268", electronConfig: "[Rn] 5f14 6d3 7s2", oxidationStates: "+5, +4", state: "solid", group: "transition-metal" },
  { atomicNumber: 106, name: "Seaborgium", symbol: "Sg", atomicMass: "269", electronConfig: "[Rn] 5f14 6d4 7s2", oxidationStates: "+6, +5", state: "solid", group: "transition-metal" },
  { atomicNumber: 107, name: "Bohrium", symbol: "Bh", atomicMass: "270", electronConfig: "[Rn] 5f14 6d5 7s2", oxidationStates: "+7, +5", state: "solid", group: "transition-metal" },
  { atomicNumber: 108, name: "Hassium", symbol: "Hs", atomicMass: "277", electronConfig: "[Rn] 5f14 6d6 7s2", oxidationStates: "+8, +6", state: "solid", group: "transition-metal" },
  { atomicNumber: 109, name: "Meitnerium", symbol: "Mt", atomicMass: "278", electronConfig: "[Rn] 5f14 6d7 7s2", oxidationStates: "+6, +4", state: "solid", group: "transition-metal" },
  { atomicNumber: 110, name: "Darmstadtium", symbol: "Ds", atomicMass: "281", electronConfig: "[Rn] 5f14 6d9 7s1", oxidationStates: "+6, +4", state: "solid", group: "transition-metal" },
  { atomicNumber: 111, name: "Roentgenium", symbol: "Rg", atomicMass: "282", electronConfig: "[Rn] 5f14 6d10 7s1", oxidationStates: "+3, +1", state: "solid", group: "transition-metal" },
  { atomicNumber: 112, name: "Copernicium", symbol: "Cn", atomicMass: "285", electronConfig: "[Rn] 5f14 6d10 7s2", oxidationStates: "+2", state: "liquid", group: "transition-metal" },
  { atomicNumber: 113, name: "Nihonium", symbol: "Nh", atomicMass: "286", electronConfig: "[Rn] 5f14 6d10 7s2 7p1", oxidationStates: "+3, +1", state: "solid", group: "metal" },
  { atomicNumber: 114, name: "Flerovium", symbol: "Fl", atomicMass: "289", electronConfig: "[Rn] 5f14 6d10 7s2 7p2", oxidationStates: "+4, +2", state: "solid", group: "metal" },
  { atomicNumber: 115, name: "Moscovium", symbol: "Mc", atomicMass: "290", electronConfig: "[Rn] 5f14 6d10 7s2 7p3", oxidationStates: "+3, +1", state: "solid", group: "metal" },
  { atomicNumber: 116, name: "Livermorium", symbol: "Lv", atomicMass: "293", electronConfig: "[Rn] 5f14 6d10 7s2 7p4", oxidationStates: "+4, +2", state: "solid", group: "metal" },
  { atomicNumber: 117, name: "Tennessine", symbol: "Ts", atomicMass: "294", electronConfig: "[Rn] 5f14 6d10 7s2 7p5", oxidationStates: "+7, +5, +1, -1", state: "solid", group: "halogen" },
  { atomicNumber: 118, name: "Oganesson", symbol: "Og", atomicMass: "294", electronConfig: "[Rn] 5f14 6d10 7s2 7p6", oxidationStates: "+6, +4, +2", state: "gas", group: "noble-gas" }, 
// Continue up to atomic number 118...
  // Add the remaining elements up to atomic number 118...
];

// DOM Elements
const periodicTable = document.getElementById("periodic-table");
const searchInput = document.getElementById("search-input");
const detailsPanel = document.getElementById("details-panel");
const themeToggle = document.getElementById("theme-toggle");
const exportCsvButton = document.getElementById("export-csv");
const exportJsonButton = document.getElementById("export-json");
const filterGroup = document.getElementById("filter-group");
const filterState = document.getElementById("filter-state");

// Render Periodic Table
function renderPeriodicTable(elements = elementsData) {
  periodicTable.innerHTML = "";
  elements.forEach(element => {
    const elementDiv = document.createElement("div");
    elementDiv.className = `element ${element.group}`;
    elementDiv.textContent = element.symbol;
    elementDiv.setAttribute("data-atomic-number", element.atomicNumber);
    elementDiv.setAttribute("data-name", element.name);
    elementDiv.setAttribute("data-symbol", element.symbol);
    periodicTable.appendChild(elementDiv);
  });
}

// Display Element Details
function displayDetails(element) {
  document.getElementById("element-name").textContent = element.name;
  document.getElementById("atomic-number").textContent = element.atomicNumber;
  document.getElementById("symbol").textContent = element.symbol;
  document.getElementById("atomic-mass").textContent = element.atomicMass;
  document.getElementById("electron-config").textContent = element.electronConfig;
  document.getElementById("oxidation-states").textContent = element.oxidationStates;
  document.getElementById("state").textContent = element.state;
  document.getElementById("group").textContent = element.group;
}

// Search Functionality
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filteredElements = elementsData.filter(element =>
    element.name.toLowerCase().includes(query) ||
    element.symbol.toLowerCase().includes(query) ||
    element.atomicNumber.toString().includes(query)
  );
  renderPeriodicTable(filteredElements);
});

// Filter by Group
filterGroup.addEventListener("change", () => {
  const group = filterGroup.value;
  const filteredElements = group ? elementsData.filter(element => element.group === group) : elementsData;
  renderPeriodicTable(filteredElements);
});

// Filter by State
filterState.addEventListener("change", () => {
  const state = filterState.value;
  const filteredElements = state ? elementsData.filter(element => element.state === state) : elementsData;
  renderPeriodicTable(filteredElements);
});

// Export as CSV
exportCsvButton.addEventListener("click", () => {
  const csvContent = "data:text/csv;charset=utf-8," +
    "Atomic Number,Name,Symbol,Atomic Mass,Electron Configuration,Oxidation States,State,Group\n" +
    elementsData.map(element => Object.values(element).join(",")).join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "periodic_table.csv");
  document.body.appendChild(link);
  link.click();
});

// Export as JSON
exportJsonButton.addEventListener("click", () => {
  const jsonContent = JSON.stringify(elementsData, null, 2);
  const blob = new Blob([jsonContent], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", "periodic_table.json");
  document.body.appendChild(link);
  link.click();
});

// Dark/Light Mode Toggle
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Click to Show Details
periodicTable.addEventListener("click", (event) => {
  if (event.target.classList.contains("element")) {
    const atomicNumber = event.target.getAttribute("data-atomic-number");
    const element = elementsData.find(el => el.atomicNumber == atomicNumber);
    displayDetails(element);
  }
});

// Initialize
renderPeriodicTable();