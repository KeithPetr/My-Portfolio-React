const data = [
  {
    id: 1,
    linkDescription: "This app creates random Quizzes using a trivia API and React.",
    src: "../images/Quizzical-App.png",
    title: "Qizzical App",
    subheading: "A React Based Project",
    detailsTitle: "A Scrimba FrontEnd Developer Path Project",
    details: `This project accesses the Open Trivia Database to generate random
                quizzes. The quiz page generates random questions and the
                associcated answers to them. The user can then select an answer to
                each question. Finally, the user can click the chekc answer button
                to see how many questions they correctly answered.`,
    languages: ["HTML", "CSS", "JavaScript", "JSX", "React"],
    requirements: `There were 4 main requirements for this project. The first one
                    required me to create 2 screens, a start page and a quiz page. The
                    second requirement was to pull at least 5 questions from the API and
                    display them. The third requirement was to tally all of the correct
                    answers after the &rsquo;Check Answers&rsquo; button was clicked.
                    The final requirement was to style the app according to a Figma
                    file.`,
    githubLink: "https://github.com/KeithPetr/Quizzical-App",
    netlify: "https://keith-quizzical-app.netlify.app/",
    gif: "../gifs/Quizzical-Gif.gif",
    gifAlt: "quizical app gif"
  },
  {
    id: 2,
    linkDescription: `This app lets users select the profiles they like and displays
    the results.`,
    src: "../images/Tindog-screenshot.png",
    title: "Tindog App",
    subheading: "A JavaScript Class Based Project",
    detailsTitle: "A Scrimba FrontEnd Developer Path Project",
    details: ` This project recreates smialr functions on the Tinder dating app. It
    allows the user to view multiple files and read a brief bio about
    each dog. There are 2 buttons available instead of swiping for
    liking and rejecting each profile. When the users either likes or
    rejects a profile, a stamp is placed on the profile and the next one
    is loaded onto the screen. After all the profiles have been viewed,
    a list of all 'liked' profiles appears.`,
    languages: ["HTML", "CSS", "JavaScript"],
    requirements: `This project had 3 main requirements. The first one was to follow
    the Figma design that was provided to create the layout of the app.
    The second requirement was to use JavaScript classes. the classes
    were used to create new dogs and store their information and methods
    that could be applied to each new profile as it was created. The
    final requirement was to use JavaScript modules. This was needed as
    the Dog class was stored in one file, each dogs data was stored in
    another, and all of that information needed to be brought to the
    index.js file so that functions running the app had the correct
    information to display. As a stretch goal, I added a page at the end
    that displays all of the profiles that were liked, if any.`,
    githubLink: "https://github.com/KeithPetr/Tindog",
    netlify: "https://keith-tindog-site.netlify.app/",
    gif: "../gifs/Tindog.gif",
    gifAlt: "tindog app gif"
  },
  {
    id: 3,
    linkDescription: `This app lets users select the profiles they like and displays
    the results.`,
    src: "../images/Invoice-Creator-App.png",
    title: "Invoice Creator",
    subheading: "A JavaScript Project",
    detailsTitle: "A Scrimba Bootcamp Project",
    details: `This project involved creating an application where you could enter
    in a specific task and assign a price to it. Those tasks would then
    be listed and their totals calculated. It also allows for the
    removal of any particular item from the list. Clicking the 'Send
    Invoice' button would then reset the list so you could start over
    and add new items.`,
    languages: ["HTML", "CSS", "JavaScript"],
    requirements: `There were 6 main requirements for this project. The first was I
    needed to create an array to hold all of the tasks that were entered
    onto the list. The secodn requirement was to create a button that
    would add each task to this array. The third was displaying the
    array data and making sure that it changed as the array was updated.
    The fourth requirement was to ensure that the same item could not be
    added twice to the list. The fifth was updating the total amount by
    keeping track of the price assigned to each task as it was added or
    removed. The last requirement was to have the 'Send Invoice' button
    reset the entire list.`,
    requirementsTwo: `As extra stretch goals, I added an input field so the user could
    type in what they wanted rather than choose from predetermined
    options. The final stretch goal was to be able to remove each
    specific item from the list.`,
    githubLink: "https://github.com/KeithPetr/Invoice-Creator",
    netlify: "https://keith-invoice-creator.netlify.app/",
    gif: "../gifs/Invoice-Creator.gif",
    gifAlt: "invoice creator app gif"
  },
  {
    id: 4,
    linkDescription: `This app lets users select the profiles they like and displays
    the results.`,
    src: "../images/Texterly-App.png",
    title: "Texterly AI",
    subheading: "A JavaScript OpenAI API Project",
    detailsTitle: "A Scrimba Bootcamp Project",
    details: `This project involved creating an app that allows the user to edit
    text. The user could copy and paste or type text directly into the
    text area. They can then hit the 'Process' button to have the app
    make spelling, grammar, and punctuation corrections. The app will
    also tell the user how many characters and words are in the given
    text. The newly edited text can then be copied to the clipboard and
    the 'Reset' button can be clicked to empty the text area.`,
    languages: ["HTML", "CSS", "JavaScript"],
    requirements: `There were 6 main requirements for this project. The first was I
    needed to create an array to hold all of the tasks that were entered
    onto the list. The secodn requirement was to create a button that
    would add each task to this array. The third was displaying the
    array data and making sure that it changed as the array was updated.
    The fourth requirement was to ensure that the same item could not be
    added twice to the list. The fifth was updating the total amount by
    keeping track of the price assigned to each task as it was added or
    removed. The last requirement was to have the 'Send Invoice' button
    reset the entire list.`,
    requirementsTwo: `As extra stretch goals, I added an input field so the user could
    type in what they wanted rather than choose from predetermined
    options. The final stretch goal was to be able to remove each
    specific item from the list.`,
    requirementsThree: `For this project there is no live demo. I was not able to save my
    API key to GitHub due to security issues. If you wish to test the
    project out yourself, you can follow the GitHub link and copy or
    clone the project. Then you can create your own API key with OpenAI
    and insert it into the project to see it work live. I have included
    the gif below to demonstrate the functionality.`,
    githubLink: "https://github.com/KeithPetr/Invoice-Creator",
    netlify: "https://keith-invoice-creator.netlify.app/",
    gif: "../gifs/Invoice-Creator.gif",
    gifAlt: "invoice creator app gif"
  },
];

export default data;
