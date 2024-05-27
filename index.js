const applicationsData = [
    {
        category: "chatbots",
        applications: [
            {
                name: "Snap",
                description: "Snapchat's chatbot uses AI to chat with users and improve based on feedback."
            },
            {
                name: "ChatGPT",
                description: "ChatGPT is a chatbot used for various purposes like generating text content."
            },
            {
                name: "Bing",
                description: "Bing's chat feature uses GPT-4 technology for generating content."
            }
        ]
    },
    {
        category: "imageEditing",
        applications: [
            {
                name: "Smartly",
                description: "Smartly is an AI-powered platform for creating ads with generative AI."
            },
            {
                name: "Lensa",
                description: "Lensa creates artistic edits of selfies using neural networks."
            },
            {
                name: "StarryAI",
                description: "StarryAI generates art from text prompts using GANs."
            }
        ]
    },
    {
        category: "virtualAssistants",
        applications: [
            {
                name: "Alexa",
                description: "Amazon's Alexa is a voice assistant for tasks like setting alarms and ordering products."
            },
            {
                name: "Google Assistant",
                description: "Google Assistant supports voice and text commands for internet searches and device control."
            },
            {
                name: "Siri",
                description: "Siri performs tasks like sending messages and identifying songs on Apple devices."
            }
        ]
    },
    {
        category: "education",
        applications: [
            {
                name: "Duolingo",
                description: "Duolingo offers gamified language exercises with AI-based lessons."
            },
            {
                name: "ELSA Speak",
                description: "ELSA Speak improves English speaking skills using voice recognition technology."
            },
            {
                name: "Socratic",
                description: "Socratic provides homework help with advanced text and speech recognition."
            }
        ]
    },
    {
        category: "personalFinance",
        applications: [
            {
                name: "Ally Financial",
                description: "Ally Financial's AI chatbot handles transactions and streamlines loan processes."
            },
            {
                name: "Cleo",
                description: "Cleo provides financial advice, budgeting, and spending tracking."
            },
            {
                name: "Fyle",
                description: "Fyle simplifies expense management with real-time data extraction and integration."
            }
        ]
    },
    {
        category: "healthWellness",
        applications: [
            {
                name: "Calm",
                description: "Calm offers meditation, sleep, and relaxation with personalized experiences."
            },
            {
                name: "FitnessAI",
                description: "FitnessAI creates personalized workouts with AI based on user goals."
            },
            {
                name: "Youper",
                description: "Youper provides mental health support with personalized advice and mood tracking."
            }
        ]
    },
    {
        category: "mapsNavigation",
        applications: [
            {
                name: "Google Maps",
                description: "Google Maps provides navigation, traffic monitoring, and location-based services."
            },
            {
                name: "Waze",
                description: "Waze offers real-time traffic data and alternative routes for navigation."
            },
            {
                name: "Gaia GPS",
                description: "Gaia GPS provides maps for outdoor activities like hiking and skiing."
            }
        ]
    },
    {
        category: "transcription",
        applications: [
            {
                name: "Google Recorder",
                description: "Google Recorder records and transcribes calls with search and edit features."
            },
            {
                name: "Otter.ai",
                description: "Otter.ai transcribes video calls and generates outlines with AI."
            },
            {
                name: "Trint",
                description: "Trint records, transcribes, and translates content with mobile app support."
            }
        ]
    }
];


document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionContent = header.nextElementSibling;
            const currentlyActive = document.querySelector('.accordion-content.active');

            if (currentlyActive && currentlyActive !== accordionContent) {
                currentlyActive.style.maxHeight = 0;
                currentlyActive.classList.remove('active');
            }

            if (accordionContent.classList.contains('active')) {
                accordionContent.style.maxHeight = 0;
                accordionContent.classList.remove('active');
            } else {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
                accordionContent.classList.add('active');
            }
        });
    });
});


const applicationButtons = document.querySelectorAll('.applications-content > .types-of-applications button');
const applicationInfo = document.querySelector('.application-info');

applicationButtons.forEach(button => {
    button.addEventListener('click', () => {
        const categoryId = button.id;
        const categoryData = applicationsData.find(category => category.category === categoryId);
        if (categoryData) {
            displayApplications(categoryData.applications);
        } else {
            console.log("No matching category found!");
        }
    });
});

function displayApplications(applications) {
    applicationInfo.innerHTML = '';
    applications.forEach(app => {
        const appElement = document.createElement('div');
        const heading = document.createElement('h3');
        heading.textContent = app.name;
        heading.addEventListener('mouseover', () => {
            appDescription.style.display = 'block';
        });
        heading.addEventListener('mouseout', () => {
            appDescription.style.display = 'none';
        });
        const appDescription = document.createElement('p');
        appDescription.textContent = app.description;
        appDescription.style.display = 'none';
        appElement.appendChild(heading);
        appElement.appendChild(appDescription);
        applicationInfo.appendChild(appElement);
    });
}
