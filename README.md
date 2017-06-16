## Description

This repo contains a port of some of the examples from [_ScalaCheck: The Definitive Guide_](http://www.artima.com/shop/scalacheck) to JavaScript / [JSVerify](http://jsverify.github.io/).

## Progress

Below is a list of examples that I have ported so far:

* Chapter 4
    * [Constructing optimal output - run length encoding](src/chapter4) (pages 45-46)
        * (_original example code_ can be found within [here](http://booksites.artima.com/scalacheck/examples/html/ch04.html#sec6))
* Chapter 5
    * [Labelling properties - interleaving](src/chapter5/Interleaving) (pages 51-52)
        * (_original example code_ can be found within [here](http://booksites.artima.com/scalacheck/examples/html/ch05.html#sec1))
    * [Prop.throws](src/chapter5/throwsTests.js) (page 59)
        * (_original example code_ can be found within [here](http://booksites.artima.com/scalacheck/examples/html/ch05.html#sec2))
     
## Missing Features

JSVerify doesn't appear to have any of the following features (opportunities for pull requests!):

* `sized`
* equality operator: `=?`, `?=`
* labelling operator: `:|`, `|:`
* and operator: `&&`
* or operator: `||`
* collection of statistics: `collect`, `classify`
* constant properties: `undecided`, `falsified`, `proved`, `passed`, `exception`
* implication operator: `==>`

## Links

* http://booksites.artima.com/scalacheck
* http://booksites.artima.com/scalacheck/ScalaCheckExamples.zip
* http://jsverify.github.io/
* https://github.com/jsverify/jsverify#documentation
