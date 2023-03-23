Few tests to gain highlighting functionality.
goals/ must have: - syntax highlight - Dark/Light mode support - linebreaks - button to copy, ofc without linebreaks - support own subsection highlights, to reveal full code but immediately gain users focus to these extra highlighted sections. - collapsible/ expandable - multiple files

Potom som este chcel skusit toto https://css-tricks.com/syntax-highlighting-prism-on-a-next-js-site/ ale neskor som si precital toto a uz som vedel, ze skusim PrismJS pretoze je maly, featury ktore chcem su podporovane cez pluginy. Len kvoli tomu nastaveniu musis nainstalovat babel plugin pre prismj a pomocou neho si tam das napriklad Linenumber alebo LineHighlight pluginy

    1s component: CodeBlock.
    used lib:   react-syntax-highlighter
    used guide: // https://www.makeuseof.com/react-syntax-highlighting-code-block/

    Conclusion:
        - [y] syntax highlight
        - [] Dark/Light mode support
        - [y] linebreaks
        - [] button to copy, ofc without linebreaks
        - [it is possible but it seems complicated https://stackoverflow.com/questions/64392199/highlight-line-in-react-syntax-highlighter] support own subsection highlights, to reveal full code but immediately gain users focus to these extra highlighted sections. I tried to do also other example suggested by Chat GPT but i was just getting errors when trying to read lineNumber
        - [] collapsible/ expandable
        - [] multiple files




    2nd component: code.js a .babelrc. v tom babelrc len specifikujes pluginy ktore ma ten prismj pouzivat
    https://hackernoon.com/using-prismjs-as-a-syntax-highlighter-in-react


    Conclusion:
        - [] syntax highlight
        - [] Dark/Light mode support
        - [] linebreaks
        - [] button to copy, ofc without linebreaks
        - [] support own subsection highlights, to reveal full code but immediately gain users focus to these extra highlighted sections.
        - [] collapsible/ expandable
        - [] multiple files
