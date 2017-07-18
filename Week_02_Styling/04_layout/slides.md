![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

## FEWD | Layout

### Barry Ross

Freelance Web Developer


### Learning Objectives

- Draw the DOM Tree for web pages containing ```<div>``` & ```<section>```

- Apply `<header>`, `<footer>`, `<sidebar>`, and multi-column layouts to develop a web page.

- Experiment and predict effects of Flexbox
- Demonstrate an understanding of `reset.css` and `normalize.css`
- Demonstrate an understanding of pseudo classes


### Agenda

- Exit tickets
- HTML 5 semantic elements (Revisit Relaxr Landing Page)
- Review IDs and Classes (error message) challenge
- CSS Flexbox
- CSS Positioning (static, relative, absolute, fixed)
- Layout lab (wireframing the Relaxr Blog)


### Exit tickets
<span class="question">I am having trouble understanding what Divs and Containers are.  Please explain. </span>
- `<div>` is an element
- '"container" is a concept'
- a `<div>` is a generic container
  
  
  
### Exit tickets
<span class="question">How do you make an image span the full width of the page? Will we learn how to apply the parallax scrolling effect? Can you explain more how/when we'll use flex box?</span>
- we will look at background images today and cover Flexbox
- Parallax isn't part of the curriculum, but we could tackle this during one of the wildcard classes near the end of you guys vote on that


### Exit tickets
<span class="question">Could you go over automatically calculating box size?</span>
- yes!


### Exit tickets
<span class="question">When would you use a section tag vs div tag??</span>
We will cover this today!


### Exit tickets
<span class="question">Sometimes by text lines are indented in my code even if I didn't apply any CSS to the HTML. </span>



### IDs and Classes

How do we select particular elements?

- to select one particular item, we use an `#id` <!-- .element: class="fragment" data-fragment-index="1" -->
- to select one or more items, we use a `.class` <!-- .element: class="fragment" data-fragment-index="2" -->

>example: 
- when I refer to you by your name, this is like using an ID:  `#studentName`<!-- .element: class="fragment" data-fragment-index="4" -->
- when I refer to all of you at once, this is like using a Class:  `.everybody`<!-- .element: class="fragment" data-fragment-index="5" -->


### IDs

- The same **id** cannot be assigned to more than one element on the same page

**Best practice:**
- use names that are descriptive of the content/feature, not the style

 e.g. `(#left-column instead of #blue-column)`

- separate multiple words with a "-" (like above)


### IDs

In our HTML, we assign an ID to an element like this:

```
<div id="student-name"></div>
```

In our CSS, we select this element by its id like this:

```
#student-name {
	background:blue;
}
```


### Classes

- The same class **<u>can</u>** and **<u>usually is</u>** assigned to multiple elements on the same page

**Best practice:**

- use names that are descriptive of the content/feature, not the style 

  e.g. `.icons instead of .orange-circles`

- separate multiple words with a "-" (like above)


### Classes

In our HTML, we assign a class to an element like this:

```
  <div class="student"></div>
```

In our CSS, we select this element by its id like this:

```
.student {
	background:blue;
}
```



## Error message activity
*IDs and Classes review*

------

Starter code is in your workspace folder!


### As a class, let's...

- Assign the appropriate `id` and `class` names to the appropriate `<div>s`
- Create the appropriate CSS rules using those #id and .class names as selectors


### CSS Layouts

What do we mean when we talk about layouts? 


### CSS Layouts

Web designers used to use "tables" to create layouts
![](../../img/extra/tablelayout.png)

Note:
http://www.ironspider.ca/webdesign102/tables4layout2.htm#two_col


### CSS Layouts | Tables - DO NOT USE!

![table layout](../../img/extra/html4table.png)


### CSS Layouts | Tables - DO NOT USE!

- complex & messy to maintain
- not as flexible across various devices
- less separation of structue/design
- not using tables as they were intended

![out of bounds](../../img/extra/outofbounds.jpg)


### Floats

Float is a CSS positioning property, often used to layout a web page.

![float image](../../img/extra/floatimage.png)


### Why is this important?

Developers have leveraged the `float` property to achieve layouts like this

While it appears to work, the methods to accomplish this require somerather "hacky" tricks, and using `float` for layouts, introduces other complexities

![](http://css-tricks.com/wp-content/csstricks-uploads/web-layout.png)


 
## **What is the alternative?**

- **Flexbox**  **Layout** - *aims at providing a more efficient way to **lay out**, **align** and **distribute space** among items in a container, even when their size is unknown and/or dynamic*

 - most appropriate to the components of an application, and small-scale layoutsFlexbox for (e.g. *like a navigation menu or a row of boxes on a page*)
	
- **Grid Layout** - *a two-dimensional grid-based layout system that aims to do nothing less than completely change the way we design **grid-based** user interfaces*

 - most appropriate for larger scale layouts *(the bigger building blocks of the site itself*)

Note:
https://css-tricks.com/snippets/css/complete-guide-grid/

https://philipwalton.github.io/solved-by-flexbox/demos/media-object/

https://philipwalton.github.io/solved-by-flexbox/demos/vertical-centering/


### CSS Layouts | Display: property (block vs inline)

**What is the "flow"?**
- The way elements "naturally" display
- They **flow down the page** with the first element in the document, down to the last, block and inline elements act as expected

![](../../img/extra/example-blockinline.png)


<u>**Block Elements**</u>

- Start on a new line
- By default, they take up all available width

<u>**Inline Elements**</u>

- Do not start on a new line
- Their width is determined by its content

![](../../img/extra/example-blockinline2.jpg)'



## Flexbox

The Flexbox Layout aims at providing a more efficient way to **lay** out, **align** and **distribute** space among items in a container, even when their size is unkown and/or **dynamic**. 

The main idea behind the flex layout is to give the **container the ability** to alter its items' width/height (and order) to best fill the available **space**

- A flex container expands items to fill available free space, or <!-- .element: class="fragment" data-fragment-index="1" -->
- shrinks them to prevent overflow.<!-- .element: class="fragment" data-fragment-index="2" -->
- The flexbox layout (flex) is direction-agnostic as opposed to the regular layouts<!-- .element: class="fragment" data-fragment-index="3" -->
- Flex is most appropriate to the components of an application, and small-scale layouts, while the<!-- .element: class="fragment" data-fragment-index="4" --> [Grid](http://css-tricks.com/snippets/css/complete-guide-grid/) layout is intended for larger scale layouts.<!-- .element: class="fragment" data-fragment-index="4" -->


### **Basics & Terminology**

Flexbox is a **module**, which includes a whole set of CSS properties

Some properties are meant to be **set on the parent container**, and others set on the **child elements**

If regular layout is based on both **block** and **inline** flow directions, the flex layout is based on "**flex-flow directions**"

![](../../img/extra/flexbox.png)


### display:flex;

![](../../img/extra/flex/01.png)

This defines a flex container; inline or block depending on the given value. It enables a flex context for all its direct children.

```
.container {
  display: flex; /* or inline-flex */
}
```


### flex-direction

![](../../img/extra/flex/02.png)

This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Flexbox is (aside from optional wrapping) a single-direction layout concept. Think of flex items as primarily laying out either in horizontal rows or vertical columns.

```
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```


### flex-wrap

![](../../img/extra/flex/03.png)
By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.

```
.container{
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```


### justify-content

![](../../img/extra/flex/04.png)

This defines the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line.

```
.container {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```


### align-items

![](../../img/extra/flex/05.png)

This defines the default behaviour for how flex items are laid out along the cross axis on the current line. Think of it as the justify-content version for the cross-axis (perpendicular to the main-axis).

```
.container {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```


### align-content

![](../../img/extra/flex/06.png)

This aligns a flex container's lines within when there is extra space in the cross-axis, similar to how justify-content aligns individual items within the main-axis.

```
.container {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```


![](../../img/extra/flex/07.png)


### order:

![](../../img/extra/flex/08.png)

By default, flex items are laid out in the source order. However, the order property controls the order in which they appear in the flex container.

```
.item {
  order: <integer>;
}
```


### flex-grow:

![](../../img/extra/flex/09.png)

This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.

If all items have flex-grow set to 1, the remaining space in the container will be distributed equally to all children. If one of the children has a value of 2, the remaining space would take up twice as much space as the others (or it will try to, at least).

```
.item {
  flex-grow: <number>; /* default 0 */
}
```


### flex-shrink:

This defines the ability for a flex item to shrink if necessary.

```
.item {
  flex-shrink: <number>; /* default 1 */
}
```


### flex-basis:

This defines the default size of an element before the remaining space is distributed. 

- It can be a length (e.g. 20%, 5rem, etc.) or a keyword
- The auto keyword means "look at my width or height property
- The content keyword means "size it based on the item's content"

```
.item {
  flex-basis: <length> | auto; /* default auto */
}
```


### flex:

This is the shorthand for flex-grow, flex-shrink and flex-basis combined. 

- The second and third parameters (flex-shrink and flex-basis) are optional. 
- Default is 0 1 auto.

```
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```


### align-self:

![](../../img/extra/flex/10.png)

This allows the default alignment (or the one specified by align-items) to be overridden for individual flex items.

Please see the align-items explanation to understand the available values.

```
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```





### HTML5?

- Released October 2014

- Latest version of the markup language, with new elements, attributes and behaviors

- A larger set of technologies that allows more diverse and powerful Web sites and applications

Note:
https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5 on 5/1/16?


### HTML5 - what's new?

**<u>Semantics</u>:** *ability to describe our content more precisely*<!-- .element: class="fragment" data-fragment-index="1" -->

**<u>Connectivity</u>**: *ability to communicate with the server in new and innovative ways.*<!-- .element: class="fragment" data-fragment-index="2" -->

**<u>Offline and storage</u>:** *webpages can store data on the client-side locally and operate offline more efficiently.*<!-- .element: class="fragment" data-fragment-index="3" -->

**<u>Multimedia</u>:** *video and audio are first-class citizens in the Open Web.*<!-- .element: class="fragment" data-fragment-index="4" -->


### HTML5 - what's new?

**<u>2D/3D graphics  and effects:</u>** *a much more diverse range of presentation options*<!-- .element: class="fragment" data-fragment-index="5" -->

**<u>Performance and integration</u>:** *greater speed optimization and better usage of computer hardware*<!-- .element: class="fragment" data-fragment-index="6" -->

**<u>Device access</u>:** *greater usage of various i/o devices*<!-- .element: class="fragment" data-fragment-index="7" -->

**<u>Styling</u>:** *ability for authors to write more sophisticated themes*<!-- .element: class="fragment" data-fragment-index="8" -->

Note: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5 on 5/1/16

https://www.smashingmagazine.com/2013/01/the-importance-of-sections


### Pedestrian Created Pathways
![semantic elements](../../img/extra/04/grass.jpg)
Note:
taken from http://cache4.asset-cache.net/gc/83267661-young-girl-walking-leaving-trail-of-gettyimages.jpg?v=1&c=IWSAsset&k=2&d=OyqC%2F0rHkmFmrCv7zEiU%2BPssMDYc9FHVSCwSVAI8AzNwrA7dvTYx7KP5b40u%2Bxg6 on 8/8/16


### Pedestrian Created Pathways
![semantic elements](../../img/extra/04/university.jpg)

Note: taken from http://math.univ-lille1.fr/~kallel/photos/MSU.jpg on 8/8/16


### HTML 5 Semantic Elements

The W3C mined billions of existing webpages to discover the IDs and class names that developers were already using.<!-- .element: class="fragment" data-fragment-index="1" -->

They found names like: **<u>header</u>, <u>nav</u>, <u>section</u>, <u>article</u>, <u>aside</u>, <u>footer</u>**<!-- .element: class="fragment" data-fragment-index="2" -->

Note:
http://www.htmlgoodies.com/html5/client/learn-html5-in-5-minutes-.html#fbid=JIcEclLqTpR?hashlink=pave-the-cowpaths


### HTML 5 Semantic Elements

A semantic element clearly describes its meaning to both the browser and the developer.

Note:
http://www.w3schools.com/html/html5_semantic_elements.asp


### What does it look like?

![semantic elements](../../img/extra/html5semanticelements.jpg)


### HTML5 `<header>` Element

- The `<header>` element specifies a header for a **document** or **section**  and should be used as a **container** for **introductory** content.

- You can have several `<header>` elements in one document.

*Example (in an article)*

```
<article>
  <header>
    <h1>What Does WWF Do?</h1>
    <p>WWF's mission:</p>
  </header>
  <p>WWF's mission is to stop the degradation of our planet's natural environment,
  and build a future in which humans live in harmony with nature.</p>
</article>
```

Note:
taken from  http://www.w3schools.com/html/html5_semantic_elements.asp on 5/1/16


### HTML5 `<nav>` Element

- The `<nav>` element defines a set of navigation links.

- The `<nav>` element is intended for large blocks of navigation links.
- Not all links in a document should be inside a `<nav>` element!

------

*example: Primary navigation menu*
```
<nav>
  <a href="/html/">HTML</a> |
  <a href="/css/">CSS</a> |
  <a href="/js/">JavaScript</a> |
  <a href="/jquery/">jQuery</a>
</nav>
```


### HTML5 `<section>` Element

- The `<section>` element defines a section in a document.
- *A section is a thematic grouping of content, typically with a heading*

------

*example: Web site's home page could be split into sections for introduction, content, and contact information.*

```
<section>
  <h1>Introduction</h1>
  <p>The World Wide Fund for Nature (WWF) is....</p>
</section>

<section>
  <h1>Content</h1>
  <p>The World Wide Fund for Nature (WWF) is....</p>
</section>

<section>
  <h1>Contact</h1>
  <p>The World Wide Fund for Nature (WWF) is....</p>
</section>
```

Note:
taken from  http://www.w3schools.com/html/html5_semantic_elements.asp on 5/1/16


### HTML5 `<article>` Element

- The `<article>` element specifies **independent**, **self-contained** content.

- An article should make sense on its own, and it should be possible to read it independently from the rest of the web site.

------
Example uses:

- *Forum post*
- *Blog post*
- *Newspaper article*

```
<article>
  <h1>What Does WWF Do?</h1>
  <p>WWF's mission is to stop the degradation of our planet's natural environment,
  and build a future in which humans live in harmony with nature.</p>
</article>
```


### HTML5 `<aside>` Element

- The `<aside>` element defines some content aside from the content it is placed

- The aside content should be related to the surrounding content.
- Not limited to use `<aside>` for sidebars, but it is often a good choice
---
*example: supplementary, but not crucial, info*
```
<p>My family and I visited The Epcot center this summer.</p>
<aside>
  <h4>Epcot Center</h4>
  <p>The Epcot Center is a theme park in Disney World, Florida.</p>
</aside>

```
Note:
What concept related to "semantic elements", does what I said just reinforce? Looking for "describes content, not display"

taken from  http://www.w3schools.com/html/html5_semantic_elements.asp on 5/1/16


### HTML5 `<footer>` Element

- The `<footer>` element specifies a footer for a document or section.

- A `<footer>` element should contain information about its containing element.
- You can have several `<footer>` elements in one document.
------
*example: A footer typically contains the author of the document, copyright information, links to terms of use, contact information, etc.*
```
<footer>
  <p>Posted by: Hege Refsnes</p>
  <p>Contact information: <a href="mailto:someone@example.com">
  someone@example.com</a>.</p>
</footer>
```

Note:
taken from  http://www.w3schools.com/html/html5_semantic_elements.asp on 5/1/16


### Sample Html 5 structure

![sample html5 structure](../../img/extra/samplehtml.jpg)


### Activity

![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)



### Why is this important?

A powerful  tool which we can use to do this:

![float layout](../../img/extra/floatlayout.png)



##### 

![GeneralAssemb.ly](../../img/icons/code_along.png)

Let's have a look


## Layout challenge

![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)


## Positioning basics
---
**static:** the default position (*what we've been working with*)

**absolute**: explicitly positioned relative to the element's closest positioned (*not static*) ancestor

**relative**: explicitly positioned relative to where it would normally be.  Other elements act like it is in its initial position.

**fixed**: like absolute, but relative to the top-left corner of the window

Note:
- Put layout on board
- Draw DOM as class for first layout
- Code-along to build the first layout together
- Independent practice for rest of layout challenges



Exit Ticket
- Resources for next unit have been posted
- Expect feedback on assignment #1 by Wed class
