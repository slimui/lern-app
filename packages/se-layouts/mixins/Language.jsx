import i18n from 'meteor/universe:i18n';

const Language = {

  // lifecycle

  getInitialState() {
    i18n.setLocale(this.getLanguage());
    return { locale: this.getLanguage() };
  },

  onLocale(locale) {
    this.setState({ locale });
  },

  componentWillMount() {
    i18n.onChangeLocale(this.onLocale);
  },

  componentWillUnmount() {
    i18n.offChangeLocale(this.onLocale);
  },

  // set language

  getLanguage() {
    return (
        navigator.languages && navigator.languages[0] ||
        navigator.language ||
        navigator.browserLanguage ||
        navigator.userLanguage ||
        'en-US'
    );
  },

};

export default Language;