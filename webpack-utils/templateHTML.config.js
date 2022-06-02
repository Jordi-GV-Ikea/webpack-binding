const environment = 'prod';

module.exports =  function HTMLconfig  ()  {
    const title = 'Customer service – how can we help you?';
    const template= './public/template.html';
    const googleAnalyticsId= "'UA-101279823-34'";
    const metaContent = JSON.stringify("Want to contact IKEA? No problem. Contact us today via phone, email or chat. Select the topic and we will help you on the right channel.");
        
    if (environment === 'prod')
      return {
        title,
        template,
        googleAnalyticsId,
        metaContent,
        myHeader: 'My Header Tag',
        canonicalLink: 'https://www.ikea.com/gb/en/customer-service/support',
      };
    else
      return {
        title,
        template,
        googleAnalyticsId,
        metaContent,
        myHeader: 'My Header Tag minor than 5',
        canonicalLink: 'https://cte.ikeadt.com/gb/en/customer-service/support',
      };
  }
  