angular.module("portfolio")
.controller("projectCtrl", ['$scope', 'ModalService', function($scope, ModalService) {

  $scope.showModal = function(project) {
    ModalService.showModal({
      templateUrl: "partials/modals/projectModal.html",
      controller: "modalCtrl",
        inputs: {
          project: project
        }
      // inputs: {
      //   title: project.title,
      //   headline: project.headline,
      //   status: project.status,
      //   description: project.long_description,
      //   technologies: project.technologies,
      //   icon: project.icon,
      //   video: project.video,
      //   repository: project.repository,
      //   site: project.site
      // }
    }).then(function(modal) {
      modal.element.modal();
      modal.close.then(function(result) {
        $scope.complexResult  = "Name: " + result.name + ", age: " + result.age;
      });
    });

  };

  $scope.projects = [
    {
      title: "Atreides",
      headline: "IoT Beer Tap Management",
      status: "In Development",
      short_description: "This project was completed as the capstone for the Galvanize Full Stack program and is designed to help operations staff manage the various keg taps located throughout the different Galvanize campuses.",
      long_description: [
        {
          paragraph: "This project was completed as the capstone for my Galvanize gSchool program. It’s to-date the only project that has been 100% sponsored by Galvanize. Atreides is designed to help operations staff manage the various keg taps located throughout the different Galvanize campuses.",
          order: 0
        },
        {
          paragraph: "The backbone of Atreides is built on a Raspberry Pi 3 B along with a flow meter, solenoid valve, and thermometer wrapped in an easily deployable device. This system communicates with a Node.js server and PostgreSQL database, which talks to an Angular 1.4 frontend dashboard.",
          order: 1
        },
        {
          paragraph: "While Atreides proper uses OAuth2 and additional API tokens to get and authenticate Galvanize staff, an additional demo repo is available and open-sourced for users and organizations who would like to use the application for their own purposes.",
          order: 2
        }
      ],
      technologies: [
        {
          name: "Node.js",
          short_description: "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.",
          repository: "https://nodejs.org",
          imgURL: "media/node.png"
        },
        {
          name: "AngularJS",
          short_description: "AngularJS is what HTML would have been, had it been designed for building web-apps. Declarative templates with data-binding, MVW, MVVM, MVC, dependency injection and great testability story all implemented with pure client-side JavaScript!",
          repository: "https://angularjs.org/",
          imgURL: "media/angular.png"
        },
        {
          name: "Bootstrap",
          short_description: "Built at Twitter by @mdo and @fat, Bootstrap utilizes LESS CSS, is compiled via Node, and is managed through GitHub to help nerds do awesome stuff on the web.",
          repository: "http://http://getbootstrap.com/",
          imgURL: "media/bootstrap.png"
        },
        {
          name: "Bower",
          short_description: "Web sites are made of lots of things — frameworks, libraries, assets, and utilities. Bower manages all these things for you.",
          repository: "http://bower.io",
          imgURL: "media/bower.png"
        },
      ],
      icon: null,
      video: null,
      repository: "https://github.com/Atreides-Pi",
      site: "https://atreides.herokuapp.com/#/dashboard/home"
    },
    {
      title: "Chyller",
      headline: "IoT Beer Tap Management",
      status: "Completed",
      short_description: "Chyller was a group project whose focus was to connect a remotely located Raspberry Pi acting as a microcontroller for a homebrewing fermentation chamber with a frontend ui.",
      long_description: [
        {
          paragraph: "Chyller was a group project whose focus was to connect a remotely located Raspberry Pi acting as a microcontroller for a homebrewing fermentation chamber with a frontend ui.",
          order: 0
        },
        {
          paragraph: "The project allows for a user to set up a schedule using both preset brewing profiles as well as custom profiles in order to build a fermentation plan for homebrewed beer, cider, and wine. This schedule is stored on the deployed node server and passed to the Raspberry Pi when initiated. The Raspberry Pi can then run the schedule autonomously, but reports back into the server every 5 seconds with up to date temperature info and will attempt to reconnect to the server should it lose connection after a set number of attempts.",
          order: 1
        },
        {
          paragraph: "The server then reports the logged temperature data back to the front end and will, with some additional work, allow for the modeling of that data.",
          order: 2
        },
        {
          paragraph: "This project was the result of roughly 5 days work between six people: Noah Roston, Michael Yeager, Lou Fontana, Eli Parkhurst, Dave Shibley, and myself.",
          order: 3
        }
      ],
      technologies: [
        {
          name: "Node.js",
          short_description: "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.",
          repository: "https://nodejs.org",
          imgURL: "media/node.png"
        },
        {
          name: "AngularJS",
          short_description: "AngularJS is what HTML would have been, had it been designed for building web-apps. Declarative templates with data-binding, MVW, MVVM, MVC, dependency injection and great testability story all implemented with pure client-side JavaScript!",
          repository: "https://angularjs.org/",
          imgURL: "media/angular.png"
        }
      ],
      icon: null,
      video: null,
      repository: "https://github.com/Atreides-Pi",
      site: "https://atreides.herokuapp.com/#/dashboard/home"
    }
  ]

  $scope.technologies = [
    {
      name: "Node.js",
      short_description: "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.",
      repository: "https://nodejs.org",
      imgURL: "media/node.png"
    },
    {
      name: "AngularJS",
      short_description: "AngularJS is what HTML would have been, had it been designed for building web-apps. Declarative templates with data-binding, MVW, MVVM, MVC, dependency injection and great testability story all implemented with pure client-side JavaScript!",
      repository: "https://angularjs.org/",
      imgURL: "media/angular.png"
    },
    {
      name: "Bootstrap",
      short_description: "Built at Twitter by @mdo and @fat, Bootstrap utilizes LESS CSS, is compiled via Node, and is managed through GitHub to help nerds do awesome stuff on the web.",
      repository: "http://http://getbootstrap.com/",
      imgURL: "media/bootstrap.png"
    },
    {
      name: "Bower",
      short_description: "Web sites are made of lots of things — frameworks, libraries, assets, and utilities. Bower manages all these things for you.",
      repository: "http://bower.io",
      imgURL: "media/bower.png"
    },
    {
      name: "CSS3",
      short_description: "CSS3 is the latest evolution of the Cascading Style Sheets language and aims at extending CSS2.1. It brings a lot of long-awaited novelties, like rounded corners, shadows, gradients, transitions or animations, as well as new layouts like multi-columns, flexible box or grid layouts.",
      repository: "https://www.w3.org/Style/CSS/members.en.php3",
      imgURL: "media/css.png"
    },
    {
      name: "Express",
      short_description: "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
      repository: "http://expressjs.com/",
      imgURL: "media/express.png"
    },
    {
      name: "GitHub",
      short_description: "GitHub fosters a fast, flexible, and collaborative development process that lets you work on your own or with others.",
      repository: "https://github.com/",
      imgURL: "media/git.png"
    },
    {
      name: "Gulp",
      short_description: "Build system automating tasks: minification and copying of all JavaScript files, static images, capable of watching files to automatically rerun the task when a file is updated.",
      repository: "http://gulpjs.com/",
      imgURL: "media/gulp.png"
    },
    {
      name: "HTML5",
      short_description: "HTML5 is the latest evolution of the standard that defines HTML. It is a new version of the language HTML, with new elements, attributes, and behaviors, along with a larger set of technologies that allows more diverse and powerful Web sites and applications.",
      repository: "https://www.w3.org/WebPlatform/WG/",
      imgURL: "media/html.png"
    },
    {
      name: "Jasmine",
      short_description: "Jasmine is a behavior-driven development framework for testing JavaScript code. It does not depend on any other JavaScript frameworks. It does not require a DOM. And it has a clean, obvious syntax so that you can easily write tests.",
      repository: "http://jasmine.github.io/",
      imgURL: "media/jasmine.png"
    },
    {
      name: "JQuery",
      short_description: "jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.",
      repository: "https://jquery.com/",
      imgURL: "media/jquery.png"
    },
    {
      name: "JavaScript",
      short_description: "JavaScript is the programming language of HTML and the Web. Programming makes computers do what you want them to do. JavaScript is easy to learn.",
      repository: "https://www.javascript.com/",
      imgURL: "media/js.png"
    },
    {
      name: "MongoDB",
      short_description: "MongoDB is the next-generation database that lets you create applications never before possible.",
      repository: "https://www.mongodb.org/",
      imgURL: "media/mongo.png"
    },
    {
      name: "npm",
      short_description: "npm is the package manager for JavaScript. Find, share, and reuse packages of code from hundreds of thousands of developers — and assemble them in powerful new ways.",
      repository: "https://www.npmjs.com/",
      imgURL: "media/npm.png"
    },
    {
      name: "PostgreSQL",
      short_description: "PostgreSQL, often simply Postgres, is an object-relational database management system (ORDBMS) with an emphasis on extensibility and standards-compliance.",
      repository: "http://www.postgresql.org/",
      imgURL: "media/postgres.png"
    },
    {
      name: "Socket.io",
      short_description: "Aims to make realtime apps possible in every browser and mobile device, blurring the differences between the different transport mechanisms.",
      repository: "http://socket.io/",
      imgURL: "media/socket.png"
    }
  ]

}]);
