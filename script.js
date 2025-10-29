// Wait for the DOM to be fully loaded before running code
document.addEventListener('DOMContentLoaded', function() {
    // Country data for North and Central America
    const countries = [
        { name: "USA", code: "🇺🇸", demographics: [
            { ethnicity: "White", chance: 60 },
            { ethnicity: "Black", chance: 13 },
            { ethnicity: "Hispanic", chance: 18 },
            { ethnicity: "Asian", chance: 6 },
            { ethnicity: "Other", chance: 3 }
        ]},
        { name: "Canada", code: "🇨🇦", demographics: [
            { ethnicity: "White", chance: 70 },
            { ethnicity: "Asian", chance: 15 },
            { ethnicity: "Black", chance: 5 },
            { ethnicity: "Indigenous", chance: 5 },
            { ethnicity: "Other", chance: 5 }
        ]},
        { name: "Mexico", code: "🇲🇽", demographics: [
            { ethnicity: "Hispanic", chance: 85 },
            { ethnicity: "Indigenous", chance: 10 },
            { ethnicity: "Other", chance: 5 }
        ]},
        { name: "Cuba", code: "🇨🇺", demographics: [
            { ethnicity: "Hispanic", chance: 90 },
            { ethnicity: "Black", chance: 9 },
            { ethnicity: "Other", chance: 1 }
        ]},
        { name: "Guatemala", code: "🇬🇹", demographics: [
            { ethnicity: "Indigenous", chance: 40 },
            { ethnicity: "Hispanic", chance: 60 }
        ]},
        { name: "Panama", code: "🇵🇦", demographics: [
            { ethnicity: "Hispanic", chance: 65 },
            { ethnicity: "Black", chance: 10 },
            { ethnicity: "Indigenous", chance: 12 },
            { ethnicity: "Other", chance: 13 }
        ]}
    ];

    // Names by ethnicity and gender - Expanded lists
    const names = {
        White: {
            male: [
                "James", "Robert", "John", "Michael", "William", "David", "Thomas", "Richard", "Joseph", "Charles",
                "Christopher", "Daniel", "Matthew", "Anthony", "Mark", "Donald", "Steven", "Andrew", "Paul", "Joshua",
                "Kenneth", "Kevin", "Brian", "George", "Timothy", "Ronald", "Jason", "Edward", "Jeffrey", "Ryan",
                "Jacob", "Gary", "Nicholas", "Eric", "Jonathan", "Stephen", "Larry", "Justin", "Scott", "Brandon",
                "Benjamin", "Samuel", "Gregory", "Alexander", "Patrick", "Frank", "Raymond", "Jack", "Dennis", "Jerry",
                "Walter", "Douglas", "Henry", "Carl", "Arthur", "Roger", "Joe", "Albert", "Harry", "Eugene",
                "Ralph", "Roy", "Louis", "Russell", "Philip", "Howard", "Willie", "Fred", "Wayne", "Billy",
                "Bobby", "Jimmy", "Ernest", "Randy", "Lawrence", "Johnny", "Nathan", "Jeremy", "Aaron", "Kyle",
                "Sean", "Jesse", "Carl", "Dylan", "Jordan", "Austin", "Zachary", "Russell", "Tyler", "Cody",
                "Travis", "Derek", "Bradley", "Trevor", "Wesley", "Keith", "Chad", "Craig", "Colin", "Brett"
            ],
            female: [
                "Mary", "Patricia", "Jennifer", "Elizabeth", "Linda", "Barbara", "Susan", "Jessica", "Sarah", "Karen",
                "Nancy", "Lisa", "Margaret", "Betty", "Sandra", "Ashley", "Dorothy", "Kimberly", "Emily", "Donna",
                "Michelle", "Carol", "Amanda", "Melissa", "Deborah", "Stephanie", "Rebecca", "Laura", "Sharon", "Cynthia",
                "Kathleen", "Amy", "Shirley", "Anna", "Angela", "Ruth", "Brenda", "Pamela", "Nicole", "Katherine",
                "Virginia", "Catherine", "Christine", "Debra", "Rachel", "Janet", "Emma", "Carolyn", "Maria", "Heather",
                "Helen", "Diane", "Julie", "Joyce", "Victoria", "Kelly", "Christina", "Lauren", "Joan", "Evelyn",
                "Judith", "Cheryl", "Megan", "Andrea", "Olivia", "Ann", "Jean", "Alice", "Kathryn", "Hannah",
                "Doris", "Gloria", "Marie", "Teresa", "Sara", "Janice", "Kathryn", "Madison", "Beverly", "Denise",
                "Amber", "Danielle", "Brittany", "Diana", "Abigail", "Natalie", "Samantha", "Brittney", "Jacqueline", "Theresa",
                "Judy", "Rose", "Beverly", "Marilyn", "Bonnie", "Julia", "Ruby", "Lori", "Phyllis", "Norma"
            ]
        },
        Black: {
            male: [
                "Jamal", "DeShawn", "Tyrone", "Malik", "Darius", "Terrell", "Xavier", "DeAndre", "Jalen", "Lamar",
                "Andre", "Marquis", "Demetrius", "Reginald", "Tyree", "Dominique", "Darryl", "Trevon", "Tremayne", "Deon",
                "Jermaine", "Hakeem", "Rashad", "Maurice", "Terrence", "Isaiah", "Jaquan", "Darnell", "Jerome", "Tyrell",
                "Jaheim", "Antwan", "Raheem", "Trevante", "Kendrick", "Marquise", "Dwayne", "Antoine", "Curtis", "Khalil",
                "Kareem", "Jacoby", "Javon", "Deshawn", "Antwon", "Shamar", "Tyshawn", "Lamont", "Marlon", "Kadeem",
                "Devonte", "Treyvon", "Devin", "Desmond", "Keon", "Jamari", "Rodney", "Julius", "Marcus", "Elijah",
                "Deonte", "Cameron", "Corey", "Vernon", "Damian", "DeAngelo", "Quincy", "Shemar", "Sterling", "Tavon",
                "Brandon", "Dante", "Jarvis", "Kelvin", "Malcolm", "Orlando", "Rashawn", "Tevin", "Cedric", "Cortez",
                "Emanuel", "Jaquez", "Kamari", "Montrell", "Rayshawn", "Trent", "Amari", "Davon", "Jamaal", "Keegan",
                "Leroy", "Marquell", "Raekwon", "Shaun", "Trevon", "Dashawn", "Isiah", "Kenan", "Romell", "Tyquan"
            ],
            female: [
                "Aaliyah", "Keisha", "Latoya", "Ebony", "Imani", "Shanice", "Jasmine", "Destiny", "Zoe", "Nia",
                "Latasha", "Tanisha", "Aliyah", "Monique", "Shaniqua", "Kiara", "Tamika", "Jada", "Kenya", "Tiara",
                "Diamond", "Shaquita", "Latonya", "Deja", "Shantel", "Precious", "Asia", "Keyana", "Raven", "Jayda",
                "Aisha", "Tiana", "Shante", "Bianca", "Janelle", "Shayla", "Tierra", "Ayanna", "Lakisha", "Latrice",
                "Chanel", "Kimora", "Sasha", "Malika", "Nakia", "Maya", "Khadijah", "Essence", "Briana", "Faith",
                "Amara", "Amiyah", "Aniya", "Camille", "Ciara", "Denise", "Diamond", "India", "Gabrielle", "Ivory",
                "Jamila", "Jazmin", "Kiana", "Kyra", "Laila", "Lashonda", "Makenna", "Monet", "Nia", "Octavia",
                "Paris", "Porsha", "Rihanna", "Sanaa", "Serenity", "Shania", "Simone", "Tamara", "Tanisha", "Tatiana",
                "Toni", "Trinity", "Tyra", "Unique", "Vanessa", "Whitney", "Yolanda", "Zaria", "Chantel", "Dominique",
                "Eboni", "Felicia", "Janae", "Jayla", "Kaliyah", "Karla", "Mya", "Nyla", "Samara", "Tiffany"
            ]
        },
        Hispanic: {
            male: [
                "Jose", "Carlos", "Juan", "Miguel", "Luis", "Jorge", "Diego", "Alejandro", "Pedro", "Roberto",
                "Antonio", "Francisco", "Hector", "Fernando", "Ricardo", "Rafael", "Javier", "Manuel", "Guillermo", "Jesus",
                "Alberto", "Raul", "Ernesto", "Enrique", "Gerardo", "Salvador", "Cesar", "Mario", "Victor", "Eduardo",
                "Sergio", "Andres", "Armando", "Pablo", "Adrian", "Daniel", "Omar", "Julio", "Alfredo", "Ruben",
                "Marco", "Gabriel", "Felix", "Gustavo", "Arturo", "Ramon", "Christian", "Lorenzo", "Alfonso", "Ignacio",
                "Rodrigo", "Emilio", "Ivan", "Leonardo", "Esteban", "Mauricio", "Santiago", "Benjamin", "Sebastian", "Mateo",
                "Lucas", "Joaquin", "Felipe", "Bruno", "Fabian", "Ramiro", "Cristian", "Damian", "Angel", "Erick",
                "Jaime", "Martin", "Oscar", "Ismael", "Saul", "Hugo", "Rene", "Marcos", "Gonzalo", "Adan",
                "Elias", "Matias", "Nicolas", "Samuel", "Tomas", "Ulises", "Valentin", "Wilfredo", "Xavier", "Yosef",
                "Zachariah", "Agustin", "Bautista", "Camilo", "Dante", "Emanuel", "Fidel", "Giovanni", "Humberto", "Isaac"
            ],
            female: [
                "Maria", "Sofia", "Isabella", "Valentina", "Camila", "Gabriela", "Victoria", "Lucia", "Elena", "Ana",
                "Carmen", "Rosa", "Adriana", "Mariana", "Daniela", "Fernanda", "Natalia", "Valeria", "Claudia", "Monica",
                "Paula", "Sara", "Alejandra", "Andrea", "Teresa", "Alma", "Gloria", "Diana", "Julia", "Veronica",
                "Silvia", "Leticia", "Marisol", "Yolanda", "Catalina", "Pilar", "Patricia", "Rocio", "Lourdes", "Esperanza",
                "Juana", "Alicia", "Consuelo", "Raquel", "Miriam", "Liliana", "Cecilia", "Lidia", "Magdalena", "Beatriz",
                "Carolina", "Cristina", "Emilia", "Estrella", "Fabiola", "Francisca", "Graciela", "Isabel", "Jimena", "Karina",
                "Laura", "Lucia", "Luz", "Manuela", "Margarita", "Marina", "Marta", "Mercedes", "Minerva", "Nadia",
                "Noemi", "Ofelia", "Olga", "Paloma", "Paulina", "Paz", "Ramona", "Regina", "Rosario", "Roxana",
                "Sandra", "Selena", "Soledad", "Susana", "Tatiana", "Ursula", "Vanesa", "Veronica", "Ximena", "Yasmin",
                "Zaira", "Zulema", "Alba", "Angelica", "Antonia", "Aurelia", "Berenice", "Bianca", "Blanca", "Brenda"
            ]
        },
        Asian: {
            male: [
                "Aiden", "Daniel", "Andrew", "Justin", "Ryan", "Kevin", "Brian", "Jason", "Eric", "Alex",
                "William", "David", "Michael", "Richard", "Joseph", "Thomas", "Charles", "Christopher", "Matthew", "Anthony",
                "Steven", "Mark", "Paul", "Kenneth", "George", "Ronald", "Edward", "Timothy", "Jeffrey", "Tony",
                "Vincent", "Lawrence", "Philip", "Henry", "Jonathan", "Peter", "Benjamin", "Raymond", "Victor", "Martin",
                "Nicholas", "Stephen", "Ethan", "Nathan", "Samuel", "Patrick", "Harold", "Simon", "Gary", "Aaron",
                "Brandon", "Derek", "Dennis", "Eugene", "Franklin", "Gregory", "Howard", "Ivan", "Jack", "Keith",
                "Leonard", "Marcus", "Norman", "Oscar", "Preston", "Quincy", "Ralph", "Stanley", "Terrence", "Vernon",
                "Walter", "Xavier", "Yale", "Zachary", "Albert", "Bernard", "Calvin", "Douglas", "Edwin", "Felix",
                "Gilbert", "Harvey", "Irving", "Jerome", "Kenneth", "Leon", "Milton", "Nelson", "Oliver", "Paul",
                "Quentin", "Roger", "Stanley", "Theodore", "Ulysses", "Vernon", "Wallace", "Wesley", "Yale", "Zachary"
            ],
            female: [
                "Emily", "Emma", "Hannah", "Grace", "Sophia", "Olivia", "Ava", "Mia", "Lily", "Chloe",
                "Madison", "Abigail", "Ella", "Natalie", "Samantha", "Julia", "Isabella", "Maya", "Victoria", "Charlotte",
                "Amelia", "Evelyn", "Harper", "Aria", "Scarlett", "Zoe", "Riley", "Elizabeth", "Aubrey", "Addison",
                "Claire", "Avery", "Lillian", "Audrey", "Leah", "Allison", "Sarah", "Jessica", "Lauren", "Alexis",
                "Michelle", "Jennifer", "Stephanie", "Rachel", "Rebecca", "Amanda", "Katherine", "Megan", "Christine", "Angela",
                "Anna", "Ashley", "Brianna", "Caroline", "Danielle", "Elena", "Faith", "Gabriella", "Haley", "Isabel",
                "Jasmine", "Kayla", "Laura", "Melissa", "Nicole", "Paige", "Quinn", "Rose", "Sydney", "Taylor",
                "Valerie", "Wendy", "Yvonne", "Zoey", "Alexandra", "Bethany", "Celeste", "Destiny", "Elaine", "Fiona",
                "Georgia", "Heather", "Iris", "Jade", "Kelly", "Lindsay", "Monica", "Nancy", "Olive", "Patricia",
                "Ruby", "Shannon", "Tiffany", "Vanessa", "Whitney", "Yvette", "Zara", "Allison", "Brooke", "Cassandra"
            ]
        },
        Indigenous: {
            male: [
                "Santiago", "Mateo", "Sebastian", "Joaquin", "Emmanuel", "Leonardo", "Fernando", "Eduardo", "Hugo", "Pablo",
                "Lucas", "Agustin", "Jeronimo", "Diego", "Nicolas", "Martin", "Rodrigo", "Emiliano", "Manuel", "Francisco",
                "Jose", "Juan", "Pedro", "Luis", "Carlos", "Jorge", "Angel", "Gabriel", "Emilio", "Rafael",
                "Ricardo", "Mario", "Tomas", "Alberto", "Benito", "Cristobal", "Esteban", "Javier", "Gerardo", "Ignacio",
                "Raul", "Marco", "Guillermo", "Arturo", "Mauricio", "Salvador", "Saul", "Felix", "Orlando", "Ernesto",
                "Alejandro", "Andres", "Antonio", "Armando", "Cesar", "Daniel", "David", "Edgar", "Elias", "Enrique",
                "Fabian", "Federico", "Felipe", "Gonzalo", "Gustavo", "Hector", "Ivan", "Jaime", "Jesus", "Julio",
                "Lorenzo", "Marcelo", "Miguel", "Nestor", "Oscar", "Patricio", "Ramon", "Rene", "Roberto", "Rodolfo",
                "Ruben", "Samuel", "Sergio", "Vicente", "Victor", "Xavier", "Adrian", "Agustin", "Alejandro", "Alfonso",
                "Alvaro", "Anibal", "Bruno", "Camilo", "Claudio", "Damian", "Dario", "Elian", "Ezequiel", "Facundo"
            ],
            female: [
                "Luisa", "Carmen", "Dolores", "Rosalba", "Yolanda", "Mercedes", "Esperanza", "Guadalupe", "Soledad", "Marisol",
                "Sofia", "Isabella", "Valentina", "Camila", "Gabriela", "Victoria", "Lucia", "Elena", "Ana", "Rosa",
                "Adriana", "Mariana", "Daniela", "Fernanda", "Natalia", "Valeria", "Claudia", "Monica", "Paula", "Sara",
                "Alejandra", "Andrea", "Teresa", "Alma", "Gloria", "Diana", "Julia", "Veronica", "Silvia", "Leticia",
                "Pilar", "Patricia", "Rocio", "Lourdes", "Juana", "Alicia", "Consuelo", "Raquel", "Miriam", "Liliana",
                "Angelica", "Beatriz", "Carolina", "Cecilia", "Cristina", "Delia", "Emilia", "Estela", "Fabiola", "Francisca",
                "Graciela", "Hilda", "Ines", "Josefina", "Karina", "Laura", "Magdalena", "Margarita", "Marina", "Marta",
                "Norma", "Olga", "Paloma", "Paulina", "Ramona", "Regina", "Rosario", "Sandra", "Sonia", "Susana",
                "Tatiana", "Ursula", "Vanesa", "Virginia", "Ximena", "Yazmin", "Zoila", "Alba", "Antonia", "Aurelia",
                "Blanca", "Catalina", "Concepcion", "Dominga", "Edith", "Elisa", "Elvira", "Flor", "Gisela", "Hortensia"
            ]
        },
        Other: {
            male: [
                "Noah", "Liam", "Ethan", "Mason", "Logan", "Caleb", "Elijah", "Benjamin", "Lucas", "Oliver",
                "Aiden", "Jackson", "Jayden", "Owen", "Gabriel", "Carter", "Wyatt", "Hunter", "Isaiah", "Luke",
                "Isaac", "Grayson", "Jack", "Julian", "Levi", "Adam", "Jaxon", "Blake", "Leo", "Evan",
                "Gavin", "Theodore", "Harrison", "Xavier", "Landon", "Eli", "Ezra", "Cooper", "Colton", "Hudson",
                "Max", "Jace", "Camden", "Chase", "Kai", "Parker", "Brayden", "Emmett", "Miles", "Atlas",
                "Asher", "Austin", "Axel", "Bennett", "Bentley", "Brody", "Brooks", "Bryson", "Carson", "Cole",
                "Connor", "Declan", "Dominic", "Easton", "Elliot", "Felix", "Finn", "Graham", "Greyson", "Hayes",
                "Holden", "Ian", "Jude", "Kingston", "Knox", "Lincoln", "Maddox", "Micah", "Nash", "Nolan",
                "Pierce", "Preston", "Reid", "Rhett", "River", "Rowan", "Ryder", "Sawyer", "Silas", "Theo",
                "Tristan", "Tucker", "Vincent", "Weston", "Zane", "Archer", "Beckett", "Caden", "Callum", "Cohen"
            ],
            female: [
                "Charlotte", "Amelia", "Harper", "Evelyn", "Abigail", "Ella", "Madison", "Scarlett", "Victoria", "Aria",
                "Grace", "Chloe", "Camila", "Penelope", "Lily", "Riley", "Zoey", "Nora", "Mila", "Aubrey",
                "Hannah", "Layla", "Savannah", "Brooklyn", "Zoe", "Audrey", "Claire", "Eleanor", "Alice", "Stella",
                "Skylar", "Violet", "Addison", "Leah", "Lucy", "Ellie", "Maya", "Anna", "Caroline", "Sarah",
                "Natalie", "Bella", "Mia", "Hazel", "Eva", "Naomi", "Piper", "Ruby", "Sadie", "Willow",
                "Ariana", "Aurora", "Autumn", "Bailey", "Blake", "Brielle", "Brynn", "Callie", "Clara", "Cora",
                "Daisy", "Delilah", "Eden", "Elena", "Eliana", "Emery", "Emilia", "Faith", "Fiona", "Gemma",
                "Georgia", "Gianna", "Hadley", "Hailey", "Hope", "Ivy", "Jade", "Jasmine", "Josie", "Julia",
                "Keira", "Kennedy", "Kinsley", "Lila", "Lillian", "Luna", "Lydia", "Mackenzie", "Madeline", "Maeve",
                "Paige", "Peyton", "Phoebe", "Quinn", "Raelynn", "Reagan", "Rosalie", "Sage", "Serenity", "Sienna"
            ]
        }
    };

    // Last names by ethnicity - Expanded lists
    const lastNames = {
        White: [
            "Smith", "Johnson", "Williams", "Brown", "Jones", "Miller", "Davis", "Wilson", "Anderson", "Taylor",
            "Thomas", "Jackson", "White", "Harris", "Martin", "Thompson", "Garcia", "Martinez", "Robinson", "Clark",
            "Rodriguez", "Lewis", "Lee", "Walker", "Hall", "Allen", "Young", "Hernandez", "King", "Wright",
            "Lopez", "Hill", "Scott", "Green", "Adams", "Baker", "Gonzalez", "Nelson", "Carter", "Mitchell",
            "Perez", "Roberts", "Turner", "Phillips", "Campbell", "Parker", "Evans", "Edwards", "Collins", "Stewart",
            "Morris", "Rogers", "Reed", "Cook", "Morgan", "Bell", "Murphy", "Bailey", "Cooper", "Richardson",
            "Cox", "Howard", "Ward", "Peterson", "Gray", "Ramirez", "James", "Watson", "Brooks", "Sanders"
        ],
        Black: [
            "Williams", "Johnson", "Smith", "Jones", "Brown", "Jackson", "Washington", "Harris", "Thompson", "Davis",
            "Robinson", "Lewis", "Walker", "Allen", "Young", "King", "Wright", "Scott", "Green", "Baker",
            "Nelson", "Mitchell", "Thomas", "Taylor", "Moore", "Martin", "Anderson", "Wilson", "Parker", "Evans",
            "Edwards", "Collins", "Stewart", "Sanchez", "Morris", "Rogers", "Reed", "Cook", "Morgan", "Bell",
            "Murphy", "Bailey", "Rivera", "Cooper", "Richardson", "Cox", "Howard", "Ward", "Torres", "Peterson",
            "Gray", "Ramirez", "James", "Watson", "Brooks", "Kelly", "Sanders", "Price", "Bennett", "Wood",
            "Barnes", "Ross", "Henderson", "Coleman", "Jenkins", "Perry", "Powell", "Long", "Patterson", "Hughes"
        ],
        Hispanic: [
            "Garcia", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Perez", "Sanchez", "Ramirez", "Torres",
            "Flores", "Rivera", "Gomez", "Diaz", "Reyes", "Morales", "Cruz", "Ortiz", "Gutierrez", "Chavez",
            "Ramos", "Gonzales", "Ruiz", "Alvarez", "Mendoza", "Vasquez", "Castillo", "Jimenez", "Moreno", "Romero",
            "Herrera", "Medina", "Aguilar", "Delgado", "Soto", "Contreras", "Castro", "Salazar", "Carrillo", "Navarro",
            "Alvarado", "Silva", "Cortes", "Munoz", "Sandoval", "Rojas", "Maldonado", "Vega", "Suarez", "Campos",
            "Pena", "Guzman", "Vargas", "Leon", "Fuentes", "Espinoza", "Guerrero", "Nunez", "Estrada", "Pacheco",
            "Acosta", "Valencia", "Figueroa", "Ayala", "Duarte", "Rivas", "Cardenas", "Cervantes", "Mejia", "Solis"
        ],
        Asian: [
            "Kim", "Lee", "Park", "Nguyen", "Chen", "Wong", "Tran", "Wu", "Liu", "Yang",
            "Zhang", "Li", "Wang", "Choi", "Lin", "Chang", "Huang", "Patel", "Shah", "Sharma",
            "Singh", "Kumar", "Zhou", "Sun", "Yu", "Liang", "Zhao", "Ma", "Xu", "Ye",
            "Dong", "Lu", "Jiang", "Xie", "Feng", "Zheng", "Deng", "Zeng", "Luo", "Gu",
            "Hong", "He", "Gao", "Tang", "Yamamoto", "Tanaka", "Suzuki", "Sato", "Nakamura", "Ito",
            "Watanabe", "Kobayashi", "Takahashi", "Kang", "Han", "Yoon", "Jang", "Lim", "Bae", "Oh",
            "Gupta", "Reddy", "Desai", "Mehta", "Joshi", "Verma", "Agarwal", "Rao", "Iyer", "Nair"
        ],
        Indigenous: [
            "Hernandez", "Ortiz", "Cruz", "Morales", "Reyes", "Diaz", "Flores", "Rivera", "Castillo", "Gomez",
            "Garcia", "Rodriguez", "Martinez", "Lopez", "Gonzalez", "Perez", "Sanchez", "Ramirez", "Torres", "Gutierrez",
            "Ramos", "Ruiz", "Alvarez", "Mendoza", "Vasquez", "Jimenez", "Moreno", "Romero", "Herrera", "Medina",
            "Aguilar", "Delgado", "Soto", "Contreras", "Castro", "Salazar", "Carrillo", "Navarro", "Alvarado", "Cortes",
            "Munoz", "Sandoval", "Rojas", "Maldonado", "Vega", "Nunez", "Padilla", "Valencia", "Montoya", "Juarez",
            "Pena", "Guzman", "Vargas", "Leon", "Fuentes", "Espinoza", "Guerrero", "Estrada", "Pacheco", "Acosta",
            "Figueroa", "Ayala", "Duarte", "Rivas", "Cardenas", "Cervantes", "Mejia", "Solis", "Zavala", "Ochoa"
        ],
        Other: [
            "Murphy", "Walsh", "Kelly", "O'Brien", "Ryan", "McCarthy", "Byrne", "Sullivan", "Connor", "Doyle",
            "Gallagher", "Daly", "O'Connor", "Fitzpatrick", "Brennan", "Nolan", "Quinn", "Flynn", "Burke", "Kennedy",
            "O'Neill", "O'Sullivan", "Duffy", "O'Reilly", "Maguire", "Lynch", "Murray", "Sweeney", "Farrell", "McDonnell",
            "Boyle", "McKenna", "Hayes", "O'Donnell", "Collins", "Griffin", "McLaughlin", "Dunne", "Moran", "Casey",
            "O'Shea", "Regan", "Delaney", "Foley", "Kenny", "Kavanagh", "Healy", "Clarke", "McGuire", "Keogh",
            "McMahon", "O'Mahony", "Doherty", "McCarthy", "Sheehan", "Donovan", "MacCarthy", "Hogan", "Flanagan", "Connolly",
            "Carroll", "MacDonald", "Ferguson", "Cameron", "Campbell", "Robertson", "MacLeod", "Stewart", "Fraser", "Ross"
        ]
    };

    // Baby emoji based on ethnicity - Fixed White emoji to match Asian light skin tone
    const babyEmojis = {
        White: "👶🏻",  // Now using light skin tone, same as Asian
        Black: "👶🏿",
        Hispanic: "👶🏽",
        Asian: "👶🏻",
        Indigenous: "👶🏽",
        Other: "👶"
    };

    // Occupations list (61 jobs + unemployed)
    const occupations = [
        "Unemployed",
        "Teacher", "Doctor", "Nurse", "Engineer", "Lawyer", "Accountant", "Architect",
        "Software Developer", "Police Officer", "Firefighter", "Paramedic", "Chef",
        "Waiter/Waitress", "Bartender", "Retail Worker", "Cashier", "Bank Teller",
        "Real Estate Agent", "Insurance Agent", "Financial Advisor", "Marketing Manager",
        "Sales Representative", "Customer Service Rep", "Administrative Assistant",
        "Construction Worker", "Electrician", "Plumber", "Mechanic", "Truck Driver",
        "Bus Driver", "Taxi Driver", "Delivery Driver", "Pilot", "Flight Attendant",
        "Pharmacist", "Dentist", "Veterinarian", "Psychologist", "Social Worker",
        "Librarian", "Journalist", "Writer", "Artist", "Musician", "Actor/Actress",
        "Photographer", "Graphic Designer", "Interior Designer", "Fashion Designer",
        "Hair Stylist", "Makeup Artist", "Personal Trainer", "Coach", "Athlete",
        "Farmer", "Gardener", "Janitor", "Security Guard", "Military Personnel",
        "Scientist", "Researcher", "Professor"
    ];

    // Birth scenario templates - 500 scenarios combining circumstances
    const birthScenarios = {
        // 75% chance both parents present (scenarios 0-374)
        bothParents: [
            "I was born in a hospital with both of my parents by my side.",
            "My parents welcomed me into the world on a beautiful sunny day.",
            "I arrived a few weeks early, surprising my parents.",
            "My birth was perfectly timed, arriving right on my due date.",
            "I was born during a thunderstorm, making my arrival quite dramatic.",
            "My parents had been trying for years before I finally arrived.",
            "I was born at home with the help of a midwife.",
            "My arrival brought immense joy to my parents who had been waiting so long.",
            "I was born in the early morning hours, just as the sun was rising.",
            "My parents rushed to the hospital just in time for my birth.",
            "I was delivered by emergency C-section, but everyone was safe.",
            "My birth went smoothly and both my parents were overjoyed.",
            "I was born on a holiday, making the day even more special for my family.",
            "My parents threw a huge celebration when I was born.",
            "I came into this world during the coldest night of winter.",
            "My birth was announced to all the relatives immediately.",
            "I was born in a small rural hospital close to home.",
            "My parents said I was the most beautiful baby they'd ever seen.",
            "I arrived weighing more than expected, a healthy baby.",
            "I was born during the summer, in the warmest month of the year.",
            "My parents chose my name months before I was born.",
            "I was born after a long and difficult labor, but we all made it through.",
            "My arrival completed our family in my parents' eyes.",
            "I was born on the same day as one of my parents, sharing a birthday.",
            "My parents documented every moment of my birth with photos.",
            "I was born in a bustling city hospital with excellent care.",
            "My birth brought my parents closer together than ever.",
            "I arrived right after midnight, making my birthday memorable.",
            "My parents hadn't found out my gender, so my birth was a surprise.",
            "I was born during the spring when flowers were blooming everywhere.",
            "My parents prepared everything perfectly before my arrival.",
            "I came into the world smaller than expected but healthy.",
            "My birth was calm and peaceful, just as my parents hoped.",
            "I was born during autumn when the leaves were changing colors.",
            "My parents took turns holding me for hours after I was born.",
            "I arrived during a snowstorm, making the hospital trip adventurous.",
            "My birth certificate was filled out with care by both my parents.",
            "I was born after my mother went into labor at home.",
            "My parents immediately fell in love with me when they saw me.",
            "I was born in a private hospital room with all the comforts.",
            "My arrival was announced to friends and family via phone calls.",
            "I was born after a quick labor that surprised the doctors.",
            "My parents said I had a full head of hair when I was born.",
            "I came into this world crying loudly, letting everyone know I'd arrived.",
            "My birth was featured in the local newspaper's birth announcements.",
            "I was born just before dawn, greeting the new day.",
            "My parents chose a traditional name from our family's heritage.",
            "I arrived after my parents took one last trip before my birth.",
            "My birth brought together family members from far away.",
            "I was born in the same hospital where one of my parents was born."
        ],
        // ~20% chance only mother present (scenarios 375-474)
        motherOnly: [
            "My mother raised me on her own from the very beginning.",
            "I was born with only my mother there to greet me.",
            "My mother was incredibly strong, bringing me into the world alone.",
            "I never knew my father, but my mother gave me all the love I needed.",
            "My mother worked hard to provide for me from day one.",
            "I was born into a single-parent household led by my brave mother.",
            "My mother's family supported her when I was born.",
            "I arrived during a difficult time, but my mother persevered.",
            "My mother chose to raise me independently.",
            "I was born and my mother vowed to give me the best life possible.",
            "My mother was young when she had me, but determined.",
            "I came into a world where my mother was my only parent.",
            "My mother worked two jobs to support us from the start.",
            "I was born and immediately became my mother's whole world.",
            "My mother faced challenges, but never let it affect her love for me.",
            "I arrived during a time when my mother was finding her own strength.",
            "My mother's resilience shaped my early days.",
            "I was born to a mother who would move mountains for me.",
            "My mother and I formed an unbreakable bond from birth.",
            "I came into this world with one parent, but never felt like I was missing anything."
        ],
        // ~5% chance only father present (scenarios 475-499)
        fatherOnly: [
            "My father took on the role of both parents from the start.",
            "I was born and my father vowed to be there for everything.",
            "My father raised me single-handedly with determination.",
            "I never knew my mother, but my father made sure I felt loved.",
            "My father's dedication to me began the moment I was born.",
            "I arrived into my father's caring hands, and he never let go.",
            "My father worked tirelessly to provide for me from day one.",
            "I was born during a time when my father had to be strong for both of us.",
            "My father's love was enough to fill any void in my life.",
            "I came into this world with my father ready to take on any challenge.",
            "My father proved that single parents can be amazing too.",
            "I was born and became the center of my father's universe.",
            "My father's family helped him raise me with love.",
            "I arrived during difficult circumstances, but my father adapted.",
            "My father showed me what true strength and love looked like.",
            "I was born to a father who would do anything for me.",
            "My father balanced work and parenting from my first day.",
            "I came into a home filled with my father's unwavering support.",
            "My father made sure I never felt like anything was missing.",
            "I was born into my father's capable and loving care.",
            "My father's determination shaped my early years.",
            "I arrived and my father embraced his role wholeheartedly.",
            "My father proved every day that love comes in many forms.",
            "I was born to a single father who exceeded all expectations.",
            "My father created a wonderful life for us from the beginning."
        ]
    };

    // Generate 500 birth scenarios by combining and modifying templates
    function getRandomBirthScenario(parentSituation) {
        let scenarios = [];
        if (parentSituation === 'both') {
            scenarios = birthScenarios.bothParents;
        } else if (parentSituation === 'mother') {
            scenarios = birthScenarios.motherOnly;
        } else {
            scenarios = birthScenarios.fatherOnly;
        }
        return scenarios[Math.floor(Math.random() * scenarios.length)];
    }

    // Store character data globally to access it in the popup
    let characterData = {
        name: "",
        firstName: "",
        lastName: "",
        gender: "",
        age: 0,
        country: "",
        ethnicity: "",
        emoji: "",
        stats: {
            happiness: 0,
            health: 0,
            smarts: 0,
            looks: 0
        },
        birthScenario: "",
        parents: {
            mother: null,
            father: null
        }
    };

    // Function to generate parent data
    function generateParent(role, childCountry, childAge) {
        const parent = {};
        parent.role = role; // 'mother' or 'father'
        parent.gender = role === 'mother' ? 'female' : 'male';

        // Parent age: 16-60, with high chance of narrow age gap
        const minAge = 16;
        const maxAge = 60;
        parent.age = Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge;

        // Rare chance parent is from different country (10% chance)
        if (Math.random() < 0.10) {
            parent.country = countries[Math.floor(Math.random() * countries.length)];
        } else {
            parent.country = childCountry;
        }

        // Determine ethnicity based on parent's country
        parent.ethnicity = determineEthnicity(parent.country.demographics);

        // Generate parent's name
        parent.firstName = names[parent.ethnicity][parent.gender][Math.floor(Math.random() * names[parent.ethnicity][parent.gender].length)];
        parent.lastName = lastNames[parent.ethnicity][Math.floor(Math.random() * lastNames[parent.ethnicity].length)];
        parent.fullName = parent.firstName + ' ' + parent.lastName;

        // Determine occupation based on age
        if (parent.age >= 13 && parent.age <= 15) {
            parent.occupation = "Middle School Student";
            parent.education = "Middle School";
            parent.inSchool = true;
        } else if (parent.age >= 16 && parent.age <= 17) {
            parent.occupation = "High School Student";
            parent.education = "High School";
            parent.inSchool = true;
        } else if (parent.age >= 18 && parent.age <= 21) {
            // Random chance: university or job
            if (Math.random() < 0.5) {
                parent.occupation = "University Student";
                parent.education = "University";
                parent.inSchool = true;
                parent.willGraduate = true; // Will get job at 22
            } else {
                // Get a job
                if (Math.random() < 0.15 && parent.age > 17) { // 15% unemployment chance for 18+
                    parent.occupation = "Unemployed";
                } else {
                    parent.occupation = occupations[Math.floor(Math.random() * (occupations.length - 1)) + 1]; // Skip "Unemployed" at index 0
                }
                parent.education = "High School";
                parent.inSchool = false;
            }
        } else {
            // Over 21
            if (Math.random() < 0.15) { // 15% unemployment chance
                parent.occupation = "Unemployed";
            } else {
                parent.occupation = occupations[Math.floor(Math.random() * (occupations.length - 1)) + 1];
            }
            parent.education = "High School"; // Default, could be upgraded
            if (Math.random() < 0.3) { // 30% chance of university education
                parent.education = "University";
            }
            parent.inSchool = false;
        }

        // Generate parent emoji based on age and ethnicity
        if (parent.age >= 13 && parent.age <= 17) {
            // Teen emoji
            parent.emoji = parent.gender === 'female' ? '👧' : '👦';
            if (parent.ethnicity === 'Black') parent.emoji = parent.gender === 'female' ? '👧🏿' : '👦🏿';
            else if (parent.ethnicity === 'Hispanic' || parent.ethnicity === 'Indigenous') parent.emoji = parent.gender === 'female' ? '👧🏽' : '👦🏽';
            else if (parent.ethnicity === 'White' || parent.ethnicity === 'Asian') parent.emoji = parent.gender === 'female' ? '👧🏻' : '👦🏻';
        } else if (parent.age >= 18 && parent.age <= 64) {
            // Adult emoji
            parent.emoji = parent.gender === 'female' ? '👩' : '👨';
            if (parent.ethnicity === 'Black') parent.emoji = parent.gender === 'female' ? '👩🏿' : '👨🏿';
            else if (parent.ethnicity === 'Hispanic' || parent.ethnicity === 'Indigenous') parent.emoji = parent.gender === 'female' ? '👩🏽' : '👨🏽';
            else if (parent.ethnicity === 'White' || parent.ethnicity === 'Asian') parent.emoji = parent.gender === 'female' ? '👩🏻' : '👨🏻';

            // 45.55% chance of gray hair at 45+
            if (parent.age >= 45 && Math.random() < 0.4555) {
                parent.hasGrayHair = true;
            }
        } else {
            // 65+ elderly emoji
            parent.emoji = parent.gender === 'female' ? '👵' : '👴';
            if (parent.ethnicity === 'Black') parent.emoji = parent.gender === 'female' ? '👵🏿' : '👴🏿';
            else if (parent.ethnicity === 'Hispanic' || parent.ethnicity === 'Indigenous') parent.emoji = parent.gender === 'female' ? '👵🏽' : '👴🏽';
            else if (parent.ethnicity === 'White' || parent.ethnicity === 'Asian') parent.emoji = parent.gender === 'female' ? '👵🏻' : '👴🏻';
            parent.hasGrayHair = true;
        }

        // Generate stats
        parent.stats = {
            relationship: 100, // Always 100% for newborn
            religiousness: Math.floor(Math.random() * 100) + 1,
            generosity: Math.random() < 0.8 ? (Math.floor(Math.random() * 41) + 60) : (Math.floor(Math.random() * 100) + 1), // 80% chance 60-100%
            money: calculateParentMoney(parent)
        };

        return parent;
    }

    // Calculate parent money based on occupation and country
    function calculateParentMoney(parent) {
        let baseMoney = 50;

        // Adjust based on occupation
        const highPayingJobs = ["Doctor", "Lawyer", "Engineer", "Architect", "Software Developer", "Dentist", "Pilot", "Professor"];
        const mediumPayingJobs = ["Teacher", "Nurse", "Accountant", "Police Officer", "Pharmacist", "Real Estate Agent"];

        if (parent.occupation === "Unemployed" || parent.inSchool) {
            baseMoney = Math.floor(Math.random() * 30) + 10; // 10-40%
        } else if (highPayingJobs.includes(parent.occupation)) {
            baseMoney = Math.floor(Math.random() * 21) + 70; // 70-90%
        } else if (mediumPayingJobs.includes(parent.occupation)) {
            baseMoney = Math.floor(Math.random() * 31) + 40; // 40-70%
        } else {
            baseMoney = Math.floor(Math.random() * 41) + 20; // 20-60%
        }

        // Adjust based on country (USA/Canada typically higher wages)
        if (parent.country.name === "USA" || parent.country.name === "Canada") {
            baseMoney = Math.min(100, baseMoney + 10);
        }

        return baseMoney;
    }

    // Generate parents with proper age gaps
    function generateParents(childCountry, childAge, parentSituation) {
        const parents = { mother: null, father: null };

        if (parentSituation === 'both') {
            // Generate mother first
            parents.mother = generateParent('mother', childCountry, childAge);

            // Generate father with age gap (0-4 years, 75% chance)
            parents.father = generateParent('father', childCountry, childAge);

            // Adjust father's age to be close to mother's age (75% chance of 0-4 year gap)
            if (Math.random() < 0.75) {
                const ageGap = Math.floor(Math.random() * 5); // 0-4 years
                const olderParent = Math.random() < 0.5 ? 'mother' : 'father';
                if (olderParent === 'mother') {
                    parents.father.age = Math.max(16, Math.min(60, parents.mother.age - ageGap));
                } else {
                    parents.father.age = Math.max(16, Math.min(60, parents.mother.age + ageGap));
                }
            }
        } else if (parentSituation === 'mother') {
            parents.mother = generateParent('mother', childCountry, childAge);
        } else if (parentSituation === 'father') {
            parents.father = generateParent('father', childCountry, childAge);
        }

        return parents;
    }

    let hasAged = false;
    
    // Get DOM elements
    const ageButton = document.getElementById('ageButton');
    const speechBubble = document.getElementById('speechBubble');
    const mainProfile = document.getElementById('mainProfile');
    const overlay = document.getElementById('overlay');
    const profilePopup = document.getElementById('profilePopup');
    const closePopup = document.getElementById('closePopup');

    // Initialize popup position properly - make sure it's off-screen at start
    if (profilePopup) {
        profilePopup.style.top = '-100%';
        profilePopup.style.transform = 'translateX(-50%)';
    }
    
    // Initialize overlay to be invisible
    if (overlay) {
        overlay.style.opacity = '0';
        overlay.style.visibility = 'hidden';
    }

    // Set up profile popup
    if (mainProfile) {
        mainProfile.addEventListener('click', function(e) {
            e.preventDefault();
            if (hasAged) showProfilePopup();
        });
    }

    if (closePopup) {
        closePopup.addEventListener('click', function(e) {
            e.preventDefault();
            hideProfilePopup();
        });
    }

    // Function to get color based on percentage
    function getStatBarColor(percentage) {
        if (percentage >= 30) {
            return '#4CAF50'; // Green
        } else if (percentage >= 11) {
            return '#FF9800'; // Orange
        } else {
            return '#b71c1c'; // Dark red
        }
    }

    function showProfilePopup() {
        if (!hasAged) return; // Only show popup after character generation
        
        // Update popup with character data
        const popupAvatar = document.getElementById('popupAvatar');
        const popupName = document.getElementById('popupName');
        const popupGender = document.getElementById('popupGender');
        const popupAge = document.getElementById('popupAge');
        const popupLocation = document.getElementById('popupLocation');
        
        if (popupAvatar) popupAvatar.textContent = characterData.emoji;
        if (popupName) popupName.textContent = characterData.firstName + ' ' + characterData.lastName;
        if (popupGender) popupGender.textContent = characterData.gender === "male" ? "Male" : "Female";
        if (popupAge) popupAge.textContent = characterData.age;
        if (popupLocation) popupLocation.textContent = characterData.country;
        
        // Update stat bars in popup with appropriate colors based on percentage
        const happinessBar = document.getElementById('popupHappinessBar');
        const healthBar = document.getElementById('popupHealthBar');
        const smartsBar = document.getElementById('popupSmartsBar');
        const looksBar = document.getElementById('popupLooksBar');
        
        if (happinessBar) {
            happinessBar.style.width = characterData.stats.happiness + '%';
            happinessBar.style.backgroundColor = getStatBarColor(characterData.stats.happiness);
        }
        
        if (healthBar) {
            healthBar.style.width = characterData.stats.health + '%';
            healthBar.style.backgroundColor = getStatBarColor(characterData.stats.health);
        }
        
        if (smartsBar) {
            smartsBar.style.width = characterData.stats.smarts + '%';
            smartsBar.style.backgroundColor = getStatBarColor(characterData.stats.smarts);
        }
        
        if (looksBar) {
            looksBar.style.width = characterData.stats.looks + '%';
            looksBar.style.backgroundColor = getStatBarColor(characterData.stats.looks);
        }
        
        // Show overlay with fade in
        if (overlay) {
            overlay.style.visibility = 'visible';
            overlay.style.opacity = '1';
        }
        
        // Show popup with animation
        if (profilePopup) {
            profilePopup.style.top = '50%';
            profilePopup.style.transform = 'translate(-50%, -50%)';
        }
    }

    function hideProfilePopup() {
        // Hide overlay
        if (overlay) {
            overlay.style.opacity = '0';
            setTimeout(() => {
                overlay.style.visibility = 'hidden';
            }, 300);
        }
        
        // Hide popup
        if (profilePopup) {
            profilePopup.style.top = '-100%';
            profilePopup.style.transform = 'translateX(-50%)';
        }
    }

    // Create speedometer tick marks
    function createSpeedometerMarks(containerId) {
        const marksContainer = document.getElementById(containerId);
        if (!marksContainer) return; // Safety check
        
        // Add tick marks
        for (let i = 0; i <= 100; i += 10) {  // Changed from 5 to 10 for fewer marks
            const isMajor = i % 20 === 0;
            const mark = document.createElement('div');
            mark.className = `speedometer-mark ${isMajor ? 'major' : ''}`;
            
            // Calculate the rotation for a 180 degree semi-circle
            const rotation = -90 + (i * 180 / 100);
            mark.style.transform = `rotate(${rotation}deg)`;
            mark.style.left = '50%';
            
            marksContainer.appendChild(mark);
        }
    }

    function initSpeedometers() {
        createSpeedometerMarks('happiness-marks');
        createSpeedometerMarks('health-marks');
        createSpeedometerMarks('smarts-marks');
        createSpeedometerMarks('looks-marks');
    }

    // Run this on page load
    initSpeedometers();

    // Update journal with birth scenario and parent info
    function updateJournal(data) {
        const journal = document.querySelector('.journal');
        if (!journal) return;

        // Clear placeholder texts
        const placeholderTexts = journal.querySelectorAll('.placeholder-text');
        placeholderTexts.forEach(el => el.remove());

        // Add birth scenario text
        const ageInfo = journal.querySelector('.age-info');
        if (ageInfo) {
            const scenarioText = document.createElement('div');
            scenarioText.style.color = '#888';
            scenarioText.style.marginTop = '10px';
            scenarioText.style.lineHeight = '1.6';
            scenarioText.textContent = `My name is ${data.firstName} ${data.lastName}. ${data.birthScenario}`;
            ageInfo.appendChild(scenarioText);

            // Add mother info if exists
            if (data.parents.mother) {
                const motherText = document.createElement('div');
                motherText.style.color = '#888';
                motherText.style.marginTop = '15px';
                motherText.style.lineHeight = '1.6';
                motherText.textContent = `My mother is ${data.parents.mother.fullName}, a ${data.parents.mother.occupation.toLowerCase()}.`;
                ageInfo.appendChild(motherText);
            } else {
                const unknownMotherText = document.createElement('div');
                unknownMotherText.style.color = '#888';
                unknownMotherText.style.marginTop = '15px';
                unknownMotherText.style.lineHeight = '1.6';
                unknownMotherText.textContent = "My mother is unknown.";
                ageInfo.appendChild(unknownMotherText);
            }

            // Add father info if exists
            if (data.parents.father) {
                const fatherText = document.createElement('div');
                fatherText.style.color = '#888';
                fatherText.style.marginTop = '10px';
                fatherText.style.lineHeight = '1.6';
                fatherText.textContent = `My father is ${data.parents.father.fullName}, a ${data.parents.father.occupation.toLowerCase()}.`;
                ageInfo.appendChild(fatherText);
            } else {
                const unknownFatherText = document.createElement('div');
                unknownFatherText.style.color = '#888';
                unknownFatherText.style.marginTop = '10px';
                unknownFatherText.style.lineHeight = '1.6';
                unknownFatherText.textContent = "My father is unknown.";
                ageInfo.appendChild(unknownFatherText);
            }
        }
    }

    if (ageButton) {
        ageButton.addEventListener('click', function() {
            if (!hasAged) {
                // Flash the button to dark green temporarily
                this.style.backgroundColor = '#177722';
                setTimeout(() => {
                    this.style.backgroundColor = '#22bb33';
                }, 100);
                
                // Determine gender (50/50 chance)
                const isMale = Math.random() < 0.5;
                const gender = isMale ? "male" : "female";
                const genderSymbol = isMale ? "♂" : "♀";
                const genderIconColor = isMale ? "#3498db" : "#e84393";
                
                // Select random country
                const country = countries[Math.floor(Math.random() * countries.length)];
                
                // Determine ethnicity based on country demographics
                let ethnicity = determineEthnicity(country.demographics);
                
                // Select random first name based on ethnicity and gender
                const firstName = names[ethnicity][gender][Math.floor(Math.random() * names[ethnicity][gender].length)];
                
                // Select random last name based on ethnicity
                const lastName = lastNames[ethnicity][Math.floor(Math.random() * lastNames[ethnicity].length)];
                
                // Update avatar with baby emoji
                const avatar = document.getElementById('avatar');
                if (avatar) {
                    avatar.textContent = babyEmojis[ethnicity];
                    
                    // Re-add speech bubble to avatar since textContent removed it
                    avatar.appendChild(speechBubble);
                    
                    // Show speech bubble
                    speechBubble.style.opacity = '1';
                    setTimeout(() => {
                        speechBubble.style.opacity = '0';
                    }, 2000);
                }
                
                // Update character name with gender and country icons
                const characterName = document.getElementById('characterName');
                if (characterName) {
                    characterName.innerHTML = 
                        `${firstName} ${lastName} <span class="gender-icon" style="background-color: ${genderIconColor};">${genderSymbol}</span> <span class="country-icon">${country.code}</span>`;
                }
                
                // Update status to "Infant"
                const characterStatus = document.getElementById('characterStatus');
                if (characterStatus) {
                    characterStatus.textContent = "Infant";
                }
                
                // Change profile text to application
                const navButtons = document.querySelectorAll('.nav-button');
                if (navButtons.length > 0) {
                    // Get the text node (the last child node)
                    const textNode = navButtons[0].childNodes[navButtons[0].childNodes.length - 1];
                    if (textNode && textNode.nodeType === Node.TEXT_NODE) {
                        textNode.textContent = "Application";
                    }
                }
                
                // Add icons to navigation buttons
                const profileIcon = document.getElementById('profile-icon');
                const assetsIcon = document.getElementById('assets-icon');
                const relationshipsIcon = document.getElementById('relationships-icon');
                const activitiesIcon = document.getElementById('activities-icon');
                
                if (profileIcon) profileIcon.innerHTML = "👤";
                if (assetsIcon) assetsIcon.innerHTML = "💰";
                if (relationshipsIcon) relationshipsIcon.innerHTML = "❤️";
                if (activitiesIcon) activitiesIcon.innerHTML = "🎮";
                
                // Generate random stat values
                const happinessValue = Math.floor(Math.random() * 100) + 1;
                const healthValue = Math.floor(Math.random() * 100) + 1;
                const smartsValue = Math.floor(Math.random() * 100) + 1;
                const looksValue = Math.floor(Math.random() * 100) + 1;

                // Determine parent situation: 75% both, ~20% mother only, ~5% father only
                let parentSituation;
                const parentRoll = Math.random();
                if (parentRoll < 0.75) {
                    parentSituation = 'both';
                } else if (parentRoll < 0.95) {
                    parentSituation = 'mother';
                } else {
                    parentSituation = 'father';
                }

                // Generate parents
                const parents = generateParents(country, 0, parentSituation);

                // Get birth scenario
                const birthScenario = getRandomBirthScenario(parentSituation);

                // Update character data
                characterData = {
                    name: `${firstName} ${lastName}`,
                    firstName: firstName,
                    lastName: lastName,
                    gender: gender,
                    age: 0,
                    country: country.name,
                    ethnicity: ethnicity,
                    emoji: babyEmojis[ethnicity],
                    stats: {
                        happiness: happinessValue,
                        health: healthValue,
                        smarts: smartsValue,
                        looks: looksValue
                    },
                    birthScenario: birthScenario,
                    parents: parents
                };

                // Update journal with birth scenario and parent info
                updateJournal(characterData);

                // Randomize and animate stat bars with speedometer style
                animateSpeedometer('happiness', happinessValue);
                animateSpeedometer('health', healthValue);
                animateSpeedometer('smarts', smartsValue);
                animateSpeedometer('looks', looksValue);

                hasAged = true;
            }
        });
    }

    function determineEthnicity(demographics) {
        const total = demographics.reduce((sum, demo) => sum + demo.chance, 0);
        const rand = Math.random() * total;
        
        let running = 0;
        for (const demo of demographics) {
            running += demo.chance;
            if (rand <= running) {
                return demo.ethnicity;
            }
        }
        
        return demographics[0].ethnicity; // Fallback
    }

    function animateSpeedometer(statName, percentage) {
        const container = document.getElementById(`${statName}-container`);
        const speedometer = document.getElementById(`${statName}-speedometer`);
        
        if (!container || !speedometer) return;
        
        // Hide regular bar and show speedometer
        container.style.display = 'none';
        speedometer.style.display = 'block';
        
        // Set speedometer needle and text
        const needle = document.getElementById(`${statName}-needle`);
        const text = document.getElementById(`${statName}-text`);
        
        if (!needle || !text) return;
        
        // Calculate the rotation angle for the needle (180 degrees represents 100%)
        const rotation = -90 + (percentage * 180 / 100);
        needle.style.transform = `rotate(${rotation}deg)`;
        text.textContent = `${percentage}%`;
        
        // Determine and set emoji based on percentage and stat name
        const emojiElement = document.getElementById(`${statName}-emoji`);
        if (!emojiElement) return;
        
        if (statName === 'happiness') {
            if (percentage >= 50) {
                emojiElement.textContent = "😊";
            } else if (percentage >= 30) {
                emojiElement.textContent = "😐";
            } else {
                emojiElement.textContent = "😫";
            }
        } else if (statName === 'health') {
            if (percentage >= 81) {
                emojiElement.textContent = "💪"; // Strong/fit emoji for excellent health
            } else if (percentage >= 30) {
                emojiElement.textContent = "❤️";
            } else {
                emojiElement.textContent = "💔";
            }
        } else if (statName === 'smarts') {
            if (percentage >= 80) {
                emojiElement.textContent = "⚡"; // Lightning for genius
            } else if (percentage >= 30) {
                emojiElement.textContent = "🧠";
            } else {
                emojiElement.textContent = "📉"; // Stocks down for low intelligence
            }
        } else if (statName === 'looks') {
            if (percentage >= 81) {
                emojiElement.textContent = "🔥"; // Hot/fire for very attractive
            } else if (percentage >= 60) {
                emojiElement.textContent = "☀️"; // Sun for attractive
            } else if (percentage >= 30) {
                emojiElement.textContent = "☁️"; // Cloud for average
            } else if (percentage >= 10) {
                emojiElement.textContent = "⛈️"; // Storm cloud for unattractive
            } else {
                emojiElement.textContent = "👎"; // Thumbs down for very unattractive
            }
        }
    }

    // Relationship Menu System
    let isTransitioning = false; // Debounce flag
    let currentParentData = null; // Store current parent being viewed

    // Get relationship menu elements
    const relationshipButton = document.querySelectorAll('.nav-button')[3]; // Relationships button
    const relationshipOverlay = document.getElementById('relationshipOverlay');
    const relationshipMenu = document.getElementById('relationshipMenu');
    const relationshipClose = document.getElementById('relationshipClose');
    const parentsContainer = document.getElementById('parentsContainer');
    const parentMenu = document.getElementById('parentMenu');
    const parentBack = document.querySelector('.parent-back');
    const parentProfileBar = document.getElementById('parentProfileBar');
    const parentInfoPopup = document.getElementById('parentInfoPopup');
    const closeParentPopup = document.getElementById('closeParentPopup');

    // Open relationship menu
    if (relationshipButton) {
        relationshipButton.addEventListener('click', function() {
            if (!hasAged || isTransitioning) return; // Only work after age button pressed

            isTransitioning = true;

            // Show overlay and menu
            relationshipOverlay.classList.add('active');
            relationshipMenu.classList.add('active');

            // Populate parents
            populateParents();

            // Allow interactions after transition
            setTimeout(() => {
                isTransitioning = false;
            }, 300);
        });
    }

    // Close relationship menu
    if (relationshipClose) {
        relationshipClose.addEventListener('click', function() {
            if (isTransitioning) return;

            isTransitioning = true;

            relationshipOverlay.classList.remove('active');
            relationshipMenu.classList.remove('active');

            setTimeout(() => {
                isTransitioning = false;
            }, 300);
        });
    }

    // Populate parents in relationship menu
    function populateParents() {
        if (!parentsContainer) return;

        parentsContainer.innerHTML = '';

        // Add mother if exists
        if (characterData.parents.mother) {
            const motherItem = createParentItem(characterData.parents.mother, 'Mother');
            parentsContainer.appendChild(motherItem);
        }

        // Add father if exists
        if (characterData.parents.father) {
            const fatherItem = createParentItem(characterData.parents.father, 'Father');
            parentsContainer.appendChild(fatherItem);
        }
    }

    // Create parent item for relationship menu
    function createParentItem(parent, role) {
        const item = document.createElement('div');
        item.className = 'parent-item';

        item.innerHTML = `
            <div class="parent-item-left">
                <div class="parent-item-avatar">${parent.emoji}</div>
                <div class="parent-item-info">
                    <div class="parent-item-name">
                        ${parent.fullName}
                        <span class="parent-role">(${role})</span>
                    </div>
                    <div class="parent-item-relationship">
                        <div class="relationship-bar-label">Bond</div>
                        <div class="relationship-bar">
                            <div class="relationship-bar-fill" style="width: ${parent.stats.relationship}%"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="parent-item-arrow">→</div>
        `;

        item.addEventListener('click', function() {
            if (isTransitioning) return;
            showParentProfile(parent, role);
        });

        return item;
    }

    // Show parent profile menu
    function showParentProfile(parent, role) {
        if (isTransitioning) return;

        isTransitioning = true;
        currentParentData = { parent, role };

        // Update parent menu content
        document.getElementById('parentTitle').textContent = role.toUpperCase();
        document.getElementById('parentAvatar').textContent = parent.emoji;
        document.getElementById('parentName').textContent = parent.fullName;
        document.getElementById('parentAge').textContent = `Age ${parent.age}`;

        // Update spy subtitle based on gender
        const spySubtitle = document.getElementById('spySubtitle');
        if (spySubtitle) {
            spySubtitle.textContent = `Spy on ${parent.gender === 'female' ? 'her' : 'him'}`;
        }

        // Show parent menu
        parentMenu.classList.add('active');

        setTimeout(() => {
            isTransitioning = false;
        }, 300);
    }

    // Back from parent profile
    if (parentBack) {
        parentBack.addEventListener('click', function() {
            if (isTransitioning) return;

            isTransitioning = true;

            parentMenu.classList.remove('active');

            setTimeout(() => {
                isTransitioning = false;
            }, 300);
        });
    }

    // Show parent info popup
    if (parentProfileBar) {
        parentProfileBar.addEventListener('click', function() {
            if (isTransitioning || !currentParentData) return;

            isTransitioning = true;

            const { parent, role } = currentParentData;

            // Update popup content
            document.getElementById('parentPopupAvatar').textContent = parent.emoji;
            document.getElementById('parentPopupName').textContent = parent.fullName;
            document.getElementById('parentPopupRelationship').textContent = role;
            document.getElementById('parentPopupAge').textContent = parent.age;
            document.getElementById('parentPopupEducation').textContent = parent.education || 'Unknown';
            document.getElementById('parentPopupOccupation').textContent = parent.occupation;

            // Update stat bars
            const relationshipBar = document.getElementById('parentPopupRelationshipBar');
            const religiousnessBar = document.getElementById('parentPopupReligiousnessBar');
            const generosityBar = document.getElementById('parentPopupGenerosityBar');
            const moneyBar = document.getElementById('parentPopupMoneyBar');

            if (relationshipBar) {
                relationshipBar.style.width = parent.stats.relationship + '%';
                relationshipBar.style.backgroundColor = getStatBarColor(parent.stats.relationship);
            }

            if (religiousnessBar) {
                religiousnessBar.style.width = parent.stats.religiousness + '%';
                religiousnessBar.style.backgroundColor = getStatBarColor(parent.stats.religiousness);
            }

            if (generosityBar) {
                generosityBar.style.width = parent.stats.generosity + '%';
                generosityBar.style.backgroundColor = getStatBarColor(parent.stats.generosity);
            }

            if (moneyBar) {
                moneyBar.style.width = parent.stats.money + '%';
                moneyBar.style.backgroundColor = getStatBarColor(parent.stats.money);
            }

            // Show popup
            relationshipOverlay.classList.add('active');
            parentInfoPopup.classList.add('active');

            setTimeout(() => {
                isTransitioning = false;
            }, 300);
        });
    }

    // Close parent info popup
    if (closeParentPopup) {
        closeParentPopup.addEventListener('click', function() {
            if (isTransitioning) return;

            isTransitioning = true;

            relationshipOverlay.classList.remove('active');
            parentInfoPopup.classList.remove('active');

            setTimeout(() => {
                isTransitioning = false;
            }, 300);
        });
    }

    // Close popups when clicking overlay (only for parent info popup, not relationship menu)
    if (relationshipOverlay) {
        relationshipOverlay.addEventListener('click', function() {
            if (isTransitioning) return;

            // Only close if parent info popup is active
            if (parentInfoPopup.classList.contains('active')) {
                closeParentPopup.click();
            }
        });
    }
});