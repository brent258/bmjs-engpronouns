module.exports = {
  active: function(pronoun) {
    if (!pronoun || typeof pronoun !== 'string') {
      return;
    }
    switch (pronoun.toLowerCase()) {
      case 'he':
      case 'him':
      case 'himself':
      case 'his':
        return 'he'; break;
      case 'she':
      case 'her':
      case 'herself':
      case 'hers':
        return 'she'; break;
      case 'i':
      case 'me':
      case 'myself':
      case 'my':
      case 'mine':
        return 'I'; break;
      case 'you':
      case 'yourself':
      case 'yourselves':
      case 'your':
      case 'yours':
        return 'you'; break;
      case 'it':
      case 'itself':
      case 'its':
        return 'it'; break;
      case 'they':
      case 'them':
      case 'themselves':
      case 'their':
      case 'theirs':
        return 'they'; break;
      case 'we':
      case 'us':
      case 'ourselves':
      case 'our':
      case 'ours':
        return 'we'; break;
      case 'one':
      case 'one':
      case 'oneself':
      case 'one\'s':
        return 'one'; break;
      default: return 'it'; break;
    }
  },
  passive: function(pronoun) {
    if (!pronoun || typeof pronoun !== 'string') {
      return;
    }
    switch (pronoun.toLowerCase()) {
      case 'he':
      case 'him':
      case 'himself':
      case 'his':
        return 'him'; break;
      case 'she':
      case 'her':
      case 'herself':
      case 'hers':
        return 'her'; break;
      case 'i':
      case 'me':
      case 'myself':
      case 'my':
      case 'mine':
        return 'me'; break;
      case 'you':
      case 'yourself':
      case 'yourselves':
      case 'your':
      case 'yours':
        return 'you'; break;
      case 'it':
      case 'itself':
      case 'its':
        return 'it'; break;
      case 'they':
      case 'them':
      case 'themselves':
      case 'their':
      case 'theirs':
        return 'them'; break;
      case 'we':
      case 'us':
      case 'ourselves':
      case 'our':
      case 'ours':
        return 'us'; break;
      case 'one':
      case 'one':
      case 'oneself':
      case 'one\'s':
        return 'one'; break;
      default: return 'it'; break;
    }
  },
  reflex: function(pronoun,plural) {
    if (!pronoun || typeof pronoun !== 'string') {
      return;
    }
    switch (pronoun.toLowerCase()) {
      case 'he':
      case 'him':
      case 'himself':
      case 'his':
        return 'himself'; break;
      case 'she':
      case 'her':
      case 'herself':
      case 'hers':
        return 'herself'; break;
      case 'i':
      case 'me':
      case 'myself':
      case 'my':
      case 'mine':
        return 'myself'; break;
      case 'you':
      case 'yourself':
      case 'yourselves':
      case 'your':
      case 'yours':
        if (plural) {
          return 'yourselves'; break;
        }
        return 'yourself'; break;
      case 'it':
      case 'itself':
      case 'its':
        return 'itself'; break;
      case 'they':
      case 'them':
      case 'themselves':
      case 'their':
      case 'theirs':
        return 'themselves'; break;
      case 'we':
      case 'us':
      case 'ourselves':
      case 'our':
      case 'ours':
        return 'ourselves'; break;
      case 'one':
      case 'one':
      case 'oneself':
      case 'one\'s':
        return 'oneself'; break;
      default: return 'itself'; break;
    }
  },
  possessive: function(pronoun) {
    if (!pronoun || typeof pronoun !== 'string') {
      return;
    }
    switch (pronoun.toLowerCase()) {
      case 'he':
      case 'him':
      case 'himself':
      case 'his':
        return 'his'; break;
      case 'she':
      case 'her':
      case 'herself':
      case 'hers':
        return 'hers'; break;
      case 'i':
      case 'me':
      case 'myself':
      case 'my':
      case 'mine':
        return 'mine'; break;
      case 'you':
      case 'yourself':
      case 'yourselves':
      case 'your':
      case 'yours':
        return 'yours'; break;
      case 'it':
      case 'itself':
      case 'its':
        return 'its'; break;
      case 'they':
      case 'them':
      case 'themselves':
      case 'their':
      case 'theirs':
        return 'theirs'; break;
      case 'we':
      case 'us':
      case 'ourselves':
      case 'our':
      case 'ours':
        return 'ours'; break;
      case 'one':
      case 'one':
      case 'oneself':
      case 'one\'s':
        return 'one\'s'; break;
      default: return 'its'; break;
    }
  },
  article: function(pronoun) {
    if (!pronoun || typeof pronoun !== 'string') {
      return;
    }
    switch (pronoun.toLowerCase()) {
      case 'he':
      case 'him':
      case 'himself':
      case 'his':
        return 'his'; break;
      case 'she':
      case 'her':
      case 'herself':
      case 'hers':
        return 'her'; break;
      case 'i':
      case 'me':
      case 'myself':
      case 'my':
      case 'mine':
        return 'my'; break;
      case 'you':
      case 'yourself':
      case 'yourselves':
      case 'your':
      case 'yours':
        return 'your'; break;
      case 'it':
      case 'itself':
      case 'its':
        return 'its'; break;
      case 'they':
      case 'them':
      case 'themselves':
      case 'their':
      case 'theirs':
        return 'their'; break;
      case 'we':
      case 'us':
      case 'ourselves':
      case 'our':
      case 'ours':
        return 'our'; break;
      case 'one':
      case 'one':
      case 'oneself':
      case 'one\'s':
        return 'one\'s'; break;
      default: return 'its'; break;
    }
  }
};
