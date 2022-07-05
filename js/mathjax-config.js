document.addEventListener('DOMContentLoaded', function () {
    MathJax.Hub.Config({
        showProcessingMessages: false,
        messageStyle: "none",
        'HTML-CSS': {
            matchFontHeight: false,
            linebreaks: { automatic: true },
        },
        SVG: {
            matchFontHeight: false,
            linebreaks: { automatic: true },
        },
        CommonHTML: {
            matchFontHeight: false,
            linebreaks: { automatic: true },
        },
        tex2jax: {
            inlineMath: [
                ['$','$'],
                ['\\(','\\)']
            ],
            displayMath: [ 
                ['$$','$$'], 
                ["\\[","\\]"] 
            ]
        }
    });
});
