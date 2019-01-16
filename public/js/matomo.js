var _paq = _paq || [];
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
    var u="//sip.safetelecom.net/piwik/";
    _paq.push(['setTrackerUrl', u+'piwik.php']);
    _paq.push(['setSiteId', '1']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
    })();
    var currentUrl = location.href;
    window.addEventListener('hashchange', function() {
    _paq.push(['setReferrerUrl', currentUrl]);
    currentUrl = '' + window.location.hash.substr(1);
    _paq.push(['setCustomUrl', currentUrl]);
    _paq.push(['setDocumentTitle', document.title]);

    // remove all previously assigned custom variables, requires Matomo (formerly Piwik) 3.0.2
    _paq.push(['deleteCustomVariables', 'page']); 
    _paq.push(['setGenerationTimeMs', 0]);
    _paq.push(['trackPageView']);

    // make Matomo aware of newly added content
    var content = document;
    _paq.push(['MediaAnalytics::scanForMedia', content]);
    _paq.push(['FormAnalytics::scanForForms', content]);
    _paq.push(['trackContentImpressionsWithinNode', content]);
    _paq.push(['enableLinkTracking'])
});