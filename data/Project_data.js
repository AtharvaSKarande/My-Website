const AllProjects = [
  {
    id: 1,
    title: "🐍 Snake Xenzia",
    motive:
      "To create a basic snake game which can be played on command prompt/shell.",
    desc:
      "Even though this game don't have fancy UI, this is a good starting project designed in pure C language.",
    tools: ["Dev C++"],
    languages: ["C language"],
  },
  {
    id: 2,
    title: "📱 Mobile Purchasing App",
    motive:
      "To create an pure java application to purchase products like mobile phone.",
    desc:
      "A java application is crated with java applet for UI and oracle database as backend. We can treat this app as prototype of an e-commerce website.",
    tools: ["Netbeans", "JDBC", "Applet"],
    languages: ["JAVA"],
  },
  {
    id: 3,
    title: "👩‍💻 Coder's Hub",
    motive:
      "To create an android application for emerging coders for their CP practice.",
    desc:
      "An android application is created which can conduct coding quizzes and give reward in the form of coins. App also provides previously asked interview questions from big Tech giants.",
    tools: ["Android", "Firebase"],
    languages: ["JAVA"],
    github: "https://github.com/AtharvaSKarande/Coders_Hub",
  },
  {
    id: 4,
    title: "📨 Post Navigator",
    motive:
      "To create an android application to manage different types of postal packages.",
    desc:
      "Every postal package has a QR-Code paster on it. Whenever this QR code is scanned, the status of package is updated. Administrator can track/delete package from databse.",
    tools: ["Android", "Firebase"],
    languages: ["JAVA", "Kotlin"],
    github: "https://github.com/AtharvaSKarande/Post_Navigator",
  },
  {
    id: 5,
    title: "🔍 Mini Search Engine",
    motive:
      "To create a search engine that can return relevant documents for the given query.",
    desc:
      "The search engine can handle boolean, phrase and proximity queries. Retrives relevant documents from a given dataset. Stemming, TF-IDF speeds the search process.",
    tools: ["Flask", "Information Retrival", "TF-IDF"],
    languages: ["Python"],
  },
  {
    id: 6,
    title: "📝 Handwritten Expression Evaluator",
    motive:
      "To create a DL model which can evaluate an handwritten arithematic expression.",
    desc:
      "A DL model is created using Keras and dataset from kaggle. Model first identifies bounding rects for each digit/symbol. The detection and prefix evaluation of obtained expression is done.",
    tools: ["Flask", "OpenCV", "Deep Learning"],
    languages: ["Python"],
  },
  {
    id: 7,
    title: "🏥 Health Status Analyser",
    motive:
      "To create an android application which can collect health related from many different villages and will provide insights from data.",
    desc:
      "The survey officer need to visit a village and collect data. The Insights are shown to draw conclusions. Data is collected every 3 months and available for comparison with previous years.",
    tools: ["Android", "Firebase"],
    languages: ["JAVA"],
  },
  {
    id: 8,
    title: "♟ Wizzard's Chess",
    motive:
      "To create a chess application which can be played using hand-gestures or voice commands.",
    desc:
      "Chess game can be played between two players using mouse/ hand gestures(camera)/ voice commands. Hand gestures are detected using OpenCv and google voice detection api is used for voice commands.",
    tools: ["OpenCV", "PyGame"],
    languages: ["Python"],
  },
  {
    id: 9,
    title: "🏃🏻‍♂️ Multi-modal Human Action Recogition on UTD-MHAD",
    motive:
      "To develope a DL model to classify the action performed by the user in the given video.",
    desc:
      "Created a CNN using keras library. VGG-16 is used for initial feature extraction. OpenCV library for frame extraction from the video. Achieved 80.55% accuracy on UTD – MHAD dataset.",
    tools: ["Deep Learning", "Flask", "React"],
    languages: ["Python"],
  },
  {
    id: 10,
    title: "♟️ Chess Bot",
    motive:
      "To create a chess-bot that can predict a good move for the given situation of the chessboard in the least amount of time.",
    desc:
      "Developed a chess library from scratch. Average time taken by bot for move is 0.1, 0.9, 6.5 seconds for depth 2,3,4 respectively. Chess-bot can play nearly 800 ELO at depth 4.",
    tools: ["PyCharm", "Mini-Max", "PyGame"],
    languages: ["Python"],
    github:
      "https://github.com/AtharvaSKarande/Chess_Single_player_and_Mutiplayer",
  },
  {
    id: 11,
    title: "⏹🔗⏹ BlockVote",
    motive:
      "Creating a trustless block chain based voting system for the elections in the INDIA.",
    desc:
      "Created a blockchain based voting system that can held the election process and display result at end of election. Election official, Administrator, Voter/Candidate roles for the election process. Admins are provided for the illitrate voters.",
    tools: ["React", "Metamask", "Ganache"],
    languages: ["JavaScript", "Solidity"],
    github:
      "https://github.com/AtharvaSKarande/BlockVote-Blockchain-based-voting-system",
  },
];

export default AllProjects;
