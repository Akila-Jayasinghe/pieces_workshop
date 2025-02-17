# pieces_workshop

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fun Facts Generator</title>
    <style>
      body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container {
    text-align: center;
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

button {
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    background-color: #007BFF;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #0056b3;
}

.fact {
    margin-top: 20px;
    font-size: 18px;
    animation: fadeIn 0.5s;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
    </style>
  
</head>
<body>
    <div class="container">
        <h1>Random Fun Facts</h1>
        <button id="generateFact">Generate Fact</button>
        <p id="factDisplay" class="fact"></p>
    </div>
    <script >
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

    </script>
</body>
</html>
