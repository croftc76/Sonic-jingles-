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
                "Benjamin", "Samuel", "Gregory", "Alexander", "Patrick", "Frank", "Raymond", "Jack", "Dennis", "Jerry"
            ],
            female: [
                "Mary", "Patricia", "Jennifer", "Elizabeth", "Linda", "Barbara", "Susan", "Jessica", "Sarah", "Karen",
                "Nancy", "Lisa", "Margaret", "Betty", "Sandra", "Ashley", "Dorothy", "Kimberly", "Emily", "Donna",
                "Michelle", "Carol", "Amanda", "Melissa", "Deborah", "Stephanie", "Rebecca", "Laura", "Sharon", "Cynthia",
                "Kathleen", "Amy", "Shirley", "Anna", "Angela", "Ruth", "Brenda", "Pamela", "Nicole", "Katherine",
                "Virginia", "Catherine", "Christine", "Debra", "Rachel", "Janet", "Emma", "Carolyn", "Maria", "Heather"
            ]
        },
        Black: {
            male: [
                "Jamal", "DeShawn", "Tyrone", "Malik", "Darius", "Terrell", "Xavier", "DeAndre", "Jalen", "Lamar",
                "Andre", "Marquis", "Demetrius", "Reginald", "Tyree", "Dominique", "Darryl", "Trevon", "Tremayne", "Deon",
                "Jermaine", "Hakeem", "Rashad", "Maurice", "Terrence", "Isaiah", "Jaquan", "Darnell", "Jerome", "Tyrell",
                "Jaheim", "Antwan", "Raheem", "Trevante", "Kendrick", "Marquise", "Dwayne", "Antoine", "Curtis", "Khalil",
                "Kareem", "Jacoby", "Javon", "Deshawn", "Antwon", "Shamar", "Tyshawn", "Lamont", "Marlon", "Kadeem"
            ],
            female: [
                "Aaliyah", "Keisha", "Latoya", "Ebony", "Imani", "Shanice", "Jasmine", "Destiny", "Zoe", "Nia",
                "Latasha", "Tanisha", "Aliyah", "Monique", "Shaniqua", "Kiara", "Tamika", "Jada", "Kenya", "Tiara",
                "Diamond", "Shaquita", "Latonya", "Deja", "Shantel", "Precious", "Asia", "Keyana", "Raven", "Jayda",
                "Aisha", "Tiana", "Shante", "Bianca", "Janelle", "Shayla", "Tierra", "Ayanna", "Lakisha", "Latrice",
                "Chanel", "Kimora", "Sasha", "Malika", "Nakia", "Maya", "Khadijah", "Essence", "Briana", "Faith"
            ]
        },
        Hispanic: {
            male: [
                "Jose", "Carlos", "Juan", "Miguel", "Luis", "Jorge", "Diego", "Alejandro", "Pedro", "Roberto",
                "Antonio", "Francisco", "Hector", "Fernando", "Ricardo", "Rafael", "Javier", "Manuel", "Guillermo", "Jesus",
                "Alberto", "Raul", "Ernesto", "Enrique", "Gerardo", "Salvador", "Cesar", "Mario", "Victor", "Eduardo",
                "Sergio", "Andres", "Armando", "Pablo", "Adrian", "Daniel", "Omar", "Julio", "Alfredo", "Ruben",
                "Marco", "Gabriel", "Felix", "Gustavo", "Arturo", "Ramon", "Christian", "Lorenzo", "Alfonso", "Ignacio"
            ],
            female: [
                "Maria", "Sofia", "Isabella", "Valentina", "Camila", "Gabriela", "Victoria", "Lucia", "Elena", "Ana",
                "Carmen", "Rosa", "Adriana", "Mariana", "Daniela", "Fernanda", "Natalia", "Valeria", "Claudia", "Monica",
                "Paula", "Sara", "Alejandra", "Andrea", "Teresa", "Alma", "Gloria", "Diana", "Julia", "Veronica",
                "Silvia", "Leticia", "Marisol", "Yolanda", "Catalina", "Pilar", "Patricia", "Rocio", "Lourdes", "Esperanza",
                "Juana", "Alicia", "Consuelo", "Raquel", "Miriam", "Liliana", "Cecilia", "Lidia", "Magdalena", "Beatriz"
            ]
        },
        Asian: {
            male: [
                "Aiden", "Daniel", "Andrew", "Justin", "Ryan", "Kevin", "Brian", "Jason", "Eric", "Alex",
                "William", "David", "Michael", "Richard", "Joseph", "Thomas", "Charles", "Christopher", "Matthew", "Anthony",
                "Steven", "Mark", "Paul", "Kenneth", "George", "Ronald", "Edward", "Timothy", "Jeffrey", "Tony",
                "Vincent", "Lawrence", "Philip", "Henry", "Jonathan", "Peter", "Benjamin", "Raymond", "Victor", "Martin",
                "Nicholas", "Stephen", "Ethan", "Nathan", "Samuel", "Patrick", "Harold", "Simon", "Gary", "Aaron"
            ],
            female: [
                "Emily", "Emma", "Hannah", "Grace", "Sophia", "Olivia", "Ava", "Mia", "Lily", "Chloe",
                "Madison", "Abigail", "Ella", "Natalie", "Samantha", "Julia", "Isabella", "Maya", "Victoria", "Charlotte",
                "Amelia", "Evelyn", "Harper", "Aria", "Scarlett", "Zoe", "Riley", "Elizabeth", "Aubrey", "Addison",
                "Claire", "Avery", "Lillian", "Audrey", "Leah", "Allison", "Sarah", "Jessica", "Lauren", "Alexis",
                "Michelle", "Jennifer", "Stephanie", "Rachel", "Rebecca", "Amanda", "Katherine", "Megan", "Christine", "Angela"
            ]
        },
        Indigenous: {
            male: [
                "Santiago", "Mateo", "Sebastian", "Joaquin", "Emmanuel", "Leonardo", "Fernando", "Eduardo", "Hugo", "Pablo",
                "Lucas", "Agustin", "Jeronimo", "Diego", "Nicolas", "Martin", "Rodrigo", "Emiliano", "Manuel", "Francisco",
                "Jose", "Juan", "Pedro", "Luis", "Carlos", "Jorge", "Angel", "Gabriel", "Emilio", "Rafael",
                "Ricardo", "Mario", "Tomas", "Alberto", "Benito", "Cristobal", "Esteban", "Javier", "Gerardo", "Ignacio",
                "Raul", "Marco", "Guillermo", "Arturo", "Mauricio", "Salvador", "Saul", "Felix", "Orlando", "Ernesto"
            ],
            female: [
                "Luisa", "Carmen", "Dolores", "Rosalba", "Yolanda", "Mercedes", "Esperanza", "Guadalupe", "Soledad", "Marisol",
                "Sofia", "Isabella", "Valentina", "Camila", "Gabriela", "Victoria", "Lucia", "Elena", "Ana", "Rosa",
                "Adriana", "Mariana", "Daniela", "Fernanda", "Natalia", "Valeria", "Claudia", "Monica", "Paula", "Sara",
                "Alejandra", "Andrea", "Teresa", "Alma", "Gloria", "Diana", "Julia", "Veronica", "Silvia", "Leticia",
                "Pilar", "Patricia", "Rocio", "Lourdes", "Juana", "Alicia", "Consuelo", "Raquel", "Miriam", "Liliana"
            ]
        },
        Other: {
            male: [
                "Noah", "Liam", "Ethan", "Mason", "Logan", "Caleb", "Elijah", "Benjamin", "Lucas", "Oliver",
                "Aiden", "Jackson", "Jayden", "Owen", "Gabriel", "Carter", "Wyatt", "Hunter", "Isaiah", "Luke",
                "Isaac", "Grayson", "Jack", "Julian", "Levi", "Adam", "Jaxon", "Blake", "Leo", "Evan",
                "Gavin", "Theodore", "Harrison", "Xavier", "Landon", "Eli", "Ezra", "Cooper", "Colton", "Hudson",
                "Max", "Jace", "Camden", "Chase", "Kai", "Parker", "Brayden", "Emmett", "Miles", "Atlas"
            ],
            female: [
                "Charlotte", "Amelia", "Harper", "Evelyn", "Abigail", "Ella", "Madison", "Scarlett", "Victoria", "Aria",
                "Grace", "Chloe", "Camila", "Penelope", "Lily", "Riley", "Zoey", "Nora", "Mila", "Aubrey",
                "Hannah", "Layla", "Savannah", "Brooklyn", "Zoe", "Audrey", "Claire", "Eleanor", "Alice", "Stella",
                "Skylar", "Violet", "Addison", "Leah", "Lucy", "Ellie", "Maya", "Anna", "Caroline", "Sarah",
                "Natalie", "Bella", "Mia", "Hazel", "Eva", "Naomi", "Piper", "Ruby", "Sadie", "Willow"
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
            "Perez", "Roberts", "Turner", "Phillips", "Campbell", "Parker", "Evans", "Edwards", "Collins", "Stewart"
        ],
        Black: [
            "Williams", "Johnson", "Smith", "Jones", "Brown", "Jackson", "Washington", "Harris", "Thompson", "Davis",
            "Robinson", "Lewis", "Walker", "Allen", "Young", "King", "Wright", "Scott", "Green", "Baker",
            "Nelson", "Mitchell", "Thomas", "Taylor", "Moore", "Martin", "Anderson", "Wilson", "Parker", "Evans",
            "Edwards", "Collins", "Stewart", "Sanchez", "Morris", "Rogers", "Reed", "Cook", "Morgan", "Bell",
            "Murphy", "Bailey", "Rivera", "Cooper", "Richardson", "Cox", "Howard", "Ward", "Torres", "Peterson"
        ],
        Hispanic: [
            "Garcia", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Perez", "Sanchez", "Ramirez", "Torres",
            "Flores", "Rivera", "Gomez", "Diaz", "Reyes", "Morales", "Cruz", "Ortiz", "Gutierrez", "Chavez",
            "Ramos", "Gonzales", "Ruiz", "Alvarez", "Mendoza", "Vasquez", "Castillo", "Jimenez", "Moreno", "Romero",
            "Herrera", "Medina", "Aguilar", "Delgado", "Soto", "Contreras", "Castro", "Salazar", "Carrillo", "Navarro",
            "Alvarado", "Silva", "Cortes", "Munoz", "Sandoval", "Rojas", "Maldonado", "Vega", "Suarez", "Campos"
        ],
        Asian: [
            "Kim", "Lee", "Park", "Nguyen", "Chen", "Wong", "Tran", "Wu", "Liu", "Yang",
            "Zhang", "Li", "Wang", "Choi", "Lin", "Chang", "Huang", "Patel", "Shah", "Sharma",
            "Singh", "Kumar", "Zhou", "Sun", "Yu", "Liang", "Zhao", "Ma", "Xu", "Ye",
            "Dong", "Lu", "Jiang", "Xie", "Feng", "Zheng", "Deng", "Zeng", "Luo", "Gu",
            "Hong", "He", "Gao", "Tang", "Yamamoto", "Tanaka", "Suzuki", "Sato", "Nakamura", "Ito"
        ],
        Indigenous: [
            "Hernandez", "Ortiz", "Cruz", "Morales", "Reyes", "Diaz", "Flores", "Rivera", "Castillo", "Gomez",
            "Garcia", "Rodriguez", "Martinez", "Lopez", "Gonzalez", "Perez", "Sanchez", "Ramirez", "Torres", "Gutierrez",
            "Ramos", "Ruiz", "Alvarez", "Mendoza", "Vasquez", "Jimenez", "Moreno", "Romero", "Herrera", "Medina",
            "Aguilar", "Delgado", "Soto", "Contreras", "Castro", "Salazar", "Carrillo", "Navarro", "Alvarado", "Cortes",
            "Munoz", "Sandoval", "Rojas", "Maldonado", "Vega", "Nunez", "Padilla", "Valencia", "Montoya", "Juarez"
        ],
        Other: [
            "Murphy", "Walsh", "Kelly", "O'Brien", "Ryan", "McCarthy", "Byrne", "Sullivan", "Connor", "Doyle",
            "Gallagher", "Daly", "O'Connor", "Fitzpatrick", "Brennan", "Nolan", "Quinn", "Flynn", "Burke", "Kennedy",
            "O'Neill", "O'Sullivan", "Duffy", "O'Reilly", "Maguire", "Lynch", "Murray", "Sweeney", "Farrell", "McDonnell",
            "Boyle", "McKenna", "Hayes", "O'Donnell", "Collins", "Griffin", "McLaughlin", "Dunne", "Moran", "Casey",
            "O'Shea", "Regan", "Delaney", "Foley", "Kenny", "Kavanagh", "Healy", "Clarke", "McGuire", "Keogh"
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
        }
    };

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
                    }
                };
                
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
});