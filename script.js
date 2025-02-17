const facts = [
    "Crocodiles are reptiles that belong to the family Crocodylidae.",
    "They are found in tropical regions of Africa, Asia, the Americas, and Australia.",
    "Crocodiles can live for over 70 years in the wild.",
    "They are carnivorous and primarily eat fish, birds, and mammals.",
    "Crocodiles have powerful jaws that can exert tremendous pressure.",
    "They are excellent swimmers and can hold their breath underwater for up to an hour.",
    "Crocodiles are cold-blooded, meaning their body temperature is regulated by their environment.",
    "They have a unique ability to see in the dark due to a special layer of tissue in their eyes.",
    "Crocodiles communicate through a variety of vocalizations, including hissing and growling.",
    "The largest species of crocodile is the saltwater crocodile, which can grow up to 23 feet long."
];

document.getElementById('generateFact').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const factDisplay = document.getElementById('factDisplay');
    factDisplay.textContent = facts[randomIndex];
});
