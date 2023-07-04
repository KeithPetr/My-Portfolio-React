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
    linkTitle: "Tindog App",
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
];

export default data;
