const a =4;

module.exports =  function HTMLconfig  ()  {
    const title = 'Custom template';
    const template= './public/template.html';
    const canonicalVar=  'https://www.ikea.com/gb/en/customer-service/support';
    if (a > 5)
      return {
        title,
        template,
        myVar: 'myVar',
        myHeader: 'My Header Tag',
        canonicalVar,
      };
    else
      return {
        title,
        template,
        myVar: 'myVar minor than 5',
        myHeader: 'My Header Tag minor than 5',
        canonicalVar,
      };
  }
  