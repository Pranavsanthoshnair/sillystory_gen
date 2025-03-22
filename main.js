// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS

// Extended story template with more detail and variation
const storyTemplates = [
  "On a :temperature: day, :insertx: decided to venture out for an adventure. Wearing their favorite :clothing:, they made their way to :inserty:. Upon arrival, they encountered :insertw: who was busy :activity:. What happened next was extraordinary - :insertz:. :insertv: witnessed everything and later remarked, ':quote:.' To this day, people still remember how :insertx:, weighing :weight:, changed the history of :inserty: forever.",
  
  "The weather was a scorching :temperature: when :insertx: received a mysterious invitation. The letter directed them to :inserty:, where :insertw: was supposedly guarding an ancient :item:. As they approached, :activity: could be heard in the distance. Suddenly, :insertz:. :insertv:, who happened to be passing by, couldn't believe their eyes. ':quote:,' they exclaimed. The local newspaper reported that :insertx:, known for weighing :weight:, had become an overnight sensation.",
  
  "Despite the :temperature: weather, :insertx: had an important mission at :inserty:. They were meeting :insertw: to discuss :item:. The meeting started normally with some :activity:, but things took an unexpected turn when :insertz:. :insertv: later told reporters, ':quote:.' The incident went viral, especially the part about how :insertx:, at :weight:, managed to save the day.",
  
  "It was just another :temperature: morning when :insertx:, dressed in :clothing:, discovered a peculiar :item: at :inserty:. While examining it, they met :insertw: who suggested they try :activity:. No one expected what happened next - :insertz:. :insertv: captured the whole thing on video and commented, ':quote:.' Scientists are still trying to explain how :insertx:, with their modest weight of :weight:, defied the laws of physics that day.",
  
  "Breaking news: On a :temperature: evening at :inserty:, local resident :insertx: was spotted wearing :clothing: while :activity:. Eyewitnesses report that :insertw: was present when suddenly :insertz:. :insertv:, a regular at the scene, was quoted saying ':quote:.' Experts are baffled how :insertx:, weighing only :weight:, accomplished such a feat.",
  
  "In a shocking turn of events, during a :temperature: afternoon, :insertx: arrived at :inserty: carrying a mysterious :item:. They were greeted by :insertw:, who had been :activity:. Without warning, :insertz:. :insertv: documented the incident and wrote in their blog, ':quote:.' Historians note that :insertx:, despite weighing :weight:, had just made history.",
  
  "The annual festival at :inserty: took an unexpected turn when :insertx:, wearing :clothing:, showed up on a :temperature: day. They were demonstrating :activity: alongside :insertw: when suddenly :insertz:. :insertv: live-streamed the whole event, commenting ':quote:.' The fact that :insertx: weighed exactly :weight: made the whole situation even more remarkable."
];

// Expanded word arrays for more variety
const insertX = [
  "the Mysterious Wanderer",
  "Captain Wonderpants",
  "Professor Puzzlemaker",
  "Lady Stardust",
  "Sir Giggles-a-lot",
  "the Quantum Quester",
  "Doctor Dreamweaver"
];

const insertY = [
  "the Enchanted Garden",
  "the Secret Laboratory",
  "the Cloud Castle",
  "the Underground Library",
  "the Floating Market",
  "the Time-Twisted Tower",
  "the Rainbow Café"
];

const insertW = [
  "a talking penguin",
  "a retired superhero",
  "a time-traveling chef",
  "a breakdancing librarian",
  "a singing scientist",
  "a skateboarding grandma",
  "a philosophical cat"
];

const insertZ = [
  "they all started floating in mid-air while singing opera",
  "everything turned into chocolate except their left shoe",
  "a parade of dancing vegetables marched through",
  "time started moving backwards for exactly 5 minutes",
  "they accidentally invented a new form of anti-gravity",
  "they discovered they could speak to houseplants",
  "the whole place transformed into a giant bounce house"
];

const insertV = [
  "the local mailman",
  "a famous food critic",
  "the town's oldest turtle",
  "a passing circus performer",
  "the neighborhood's wisest child",
  "a confused time traveler",
  "the city's most dramatic pigeon"
];

const quotes = [
  "I've seen some strange things in my life, but this takes the cake... and the bakery!",
  "Well, that's not something you see every Tuesday... or any day, really",
  "If my grandmother could see this, she'd drop her knitting needles in shock",
  "In all my years of professional people-watching, this is a first",
  "I should have brought my camera... no one will ever believe this",
  "This definitely wasn't in the tourist guide",
  "And I thought my morning coffee was weird"
];

const clothing = [
  "a sparkly jumpsuit",
  "a cape made of recycled dreams",
  "mismatched time-traveling boots",
  "a hat that changes color with the weather",
  "pants that play music when walking",
  "a tie that tells jokes",
  "glasses that translate bird language"
];

const activities = [
  "organizing a flash mob for squirrels",
  "teaching clouds how to dance",
  "writing a dictionary for silent thoughts",
  "collecting leftover rainbows",
  "knitting sweaters for statues",
  "alphabetizing the wind",
  "painting portraits of passing thoughts"
];

const items = [
  "the world's only left-handed umbrella",
  "a map of uncharted giggles",
  "the original blueprint for happiness",
  "a jar of bottled sunsets",
  "the first-ever rhyme",
  "tomorrow's weather in a bottle",
  "the last echo of yesterday"
];

function result() {
  // Add loading animation to button
  randomize.textContent = "Generating...";
  randomize.disabled = true;
  
  // Small delay to show the loading state
  setTimeout(() => {
    // Select a random story template
    let newStory = randomValueFromArray(storyTemplates);
    
    // Replace all placeholders with random values
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const wItem = randomValueFromArray(insertW);
    const zItem = randomValueFromArray(insertZ);
    const vItem = randomValueFromArray(insertV);
    const quoteItem = randomValueFromArray(quotes);
    const clothingItem = randomValueFromArray(clothing);
    const activityItem = randomValueFromArray(activities);
    const itemItem = randomValueFromArray(items);

    newStory = newStory.replaceAll(':insertx:', xItem);
    newStory = newStory.replaceAll(':inserty:', yItem);
    newStory = newStory.replaceAll(':insertw:', wItem);
    newStory = newStory.replaceAll(':insertz:', zItem);
    newStory = newStory.replaceAll(':insertv:', vItem);
    newStory = newStory.replaceAll(':quote:', quoteItem);
    newStory = newStory.replaceAll(':clothing:', clothingItem);
    newStory = newStory.replaceAll(':activity:', activityItem);
    newStory = newStory.replaceAll(':item:', itemItem);

    // Replace name if provided
    if(customName.value !== '') {
      const name = customName.value;
      newStory = newStory.replaceAll(':insertx:', name);
    }

    // Convert temperature and weight based on region
    if(document.getElementById('uk').checked) {
      const weight = `${Math.round(300 * 0.0714286)} stone`;
      const temperature = `${Math.round((94 - 32) * 5 / 9)} centigrade`;
      newStory = newStory.replaceAll(':temperature:', temperature);
      newStory = newStory.replaceAll(':weight:', weight);
    } else {
      newStory = newStory.replaceAll(':temperature:', '94 fahrenheit');
      newStory = newStory.replaceAll(':weight:', '300 pounds');
    }

    // Show the story with animation
    story.style.visibility = 'visible';
    story.classList.add('visible');
    story.textContent = newStory;
    
    // Reset button
    randomize.textContent = "Generate Story";
    randomize.disabled = false;
    
    // Scroll to the story if needed
    if (window.innerHeight < 768) {
      story.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, 400);
}

// Add event listener for the generate button
randomize.addEventListener('click', result);

// Add interactivity for input field
customName.addEventListener('focus', function() {
  this.placeholder = '';
});

customName.addEventListener('blur', function() {
  if (!this.value) {
    this.placeholder = 'Type a name...';
  }
});
