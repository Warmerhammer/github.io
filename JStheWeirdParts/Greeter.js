(function (global, $) {

  // 'new' an object
  var Greetr = function (firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  };

  // comment example
  var supportedLanguages = ['en', 'es'];

  greetings = {
    en: 'Hello',
    es: 'Hola',
  };

  formalGreetings = {
    en: 'Greetings',
    es: 'Saludos',
  };

  var logMessages = {
    en: 'Logged in',
    es: 'Inicio sesion',
  };

  Greetr.prototype = {
    fullname: function () {
      return this.firstName + ' ' + this.lastName;
    },

    validate: function () {
      if (supportedLanguages.indexOf(this.language) === -1) {
        throw 'Invalid language';
      }
    },

    greeting: function () {
      return greetings[this.language] + ' ' + this.firstName + '!';
    },

    formalGreeting: function () {
      return formalGreetings[this.language] + ', ' + this.fullname() + '!';
    },

    greet: function (formal) {
      var msg;

      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }
      if (console) {
        console.log(msg);
      }
      return this;
    },

    log: function () {
      if (console) {
        console.log(logMessages[this.language] + ': ' + this.fullname());
      }
      return this;
    },

    setLang: function (lang) {
      this.language = lang;

      this.validate();

      return this;
    },

    HTMLGreeting: function (selector, formal) {
      if (!$) {
        throw 'jQuery not loaded';
      }
      if (!selector) {
        throw 'Missing jQuery selector';
      } 
      if (formal) {
        msg = this.formalGreeting();
      }
      else {
        msg = this.greeting();
      }
      $(selector).html(msg);

      return this;
    },
  };

  Greetr.init = function (firstName, lastName, language) {
    var self = this;

    self.firstName = firstName || '';
    self.lastName = lastName || '';
    self.language = language || 'en';

    self.validate();
  };

  Greetr.init.prototype = Greetr.prototype;
  global.Greetr = global.G$ = Greetr;

})(window, jQuery);

// return function() {
//   Greetr.init = function() {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.language = language;
//   }
// }
