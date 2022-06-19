const getValue = document.getElementById("blog");

getValue.innerHTML

// => This element is <strong>strong</strong> and     has some super fun <code>code</code>!



/* 
What returns? 

The string inside our <div> and the HTML (or XML) markup contained within our string, including any spacing, line breaks, etc.


When should I use?
    When you want to see the HTML markup and what exactly is in our element — including any spacing, line break, and formatting irregulars.

*/ 

getValue.innerText

// => This element is strong and has some super fun code!

/* 
What returns?
    The string inside our <div> and the HTML (or XML) markup contained within our string, including any spacing, line breaks, etc.
    Think of it this way: if a user highlighted the contents of an element on their screen and copied it to their clipboard, what you get with innerText is exactly what it would return.

When should I use?
    The string inside our <div>. It approximates the “rendered” text content of a node — it’s aware of styling and CSS.

*/

getValue.textContent

// => This element is strong and has     some super fun code!

/* 
What returns?
   The content of all elements in the node, including script and style elements. It’s aware of formatting like spacing and line breaks and will return those.

When should I use?
    When you want to see what’s in the element, plus any styling on it.

*/

// => Study font: https://betterprogramming.pub/whats-best-innertext-vs-innerhtml-vs-textcontent-903ebc43a3fc#:~:text=innerText%20retrieves%20and%20sets%20the,same%20content%20in%20HTML%20format.