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
* Chapter 6
    * [Higher-order generators](src/chapter6/higherOrderGeneratorsTests.js) (pages 68-70)
        * (_original example code_ can be found within [here](http://booksites.artima.com/scalacheck/examples/html/ch06.html#sec1))
    * [Recursive generators](src/chapter6/RecursiveGenerators) (pages 78-82)
        * (_original example code_ can be found within [here](http://booksites.artima.com/scalacheck/examples/html/ch06.html#sec1))
    * [Custom test case simplification](src/chapter6/CustomTestCaseSimplification) (pages 82-87)
        * (_original example code_ can be found within [here](http://booksites.artima.com/scalacheck/examples/html/ch06.html#sec2))

## Missing Features

JSVerify doesn't appear to have any of the following features (opportunities for pull requests!):

* [`sized`](https://www.scalacheck.org/files/scalacheck_2.11-1.13.4-api/index.html#org.scalacheck.Gen$@sized[T](f:Int=>org.scalacheck.Gen[T]):org.scalacheck.Gen[T])
* [`resize`](https://www.scalacheck.org/files/scalacheck_2.11-1.13.4-api/index.html#org.scalacheck.Gen$@resize[T](s:Int,g:org.scalacheck.Gen[T]):org.scalacheck.Gen[T])
* equality operator: [`=?`](https://www.scalacheck.org/files/scalacheck_2.11-1.13.4-api/index.html#org.scalacheck.Prop$@=?[T](x:T,y:T)(implicitpp:T=>org.scalacheck.util.Pretty):org.scalacheck.Prop), [`?=`](https://www.scalacheck.org/files/scalacheck_2.11-1.13.4-api/index.html#org.scalacheck.Prop$@?=[T](x:T,y:T)(implicitpp:T=>org.scalacheck.util.Pretty):org.scalacheck.Prop)
* labelling operator: [`:|`](https://www.scalacheck.org/files/scalacheck_2.11-1.13.4-api/index.html#org.scalacheck.Prop@:|(l:String):org.scalacheck.Prop), [`|:`](https://www.scalacheck.org/files/scalacheck_2.11-1.13.4-api/index.html#org.scalacheck.Prop@|:(l:String):org.scalacheck.Prop)
* and operator: [`&&`](https://www.scalacheck.org/files/scalacheck_2.11-1.13.4-api/index.html#org.scalacheck.Prop@&&(p:=>org.scalacheck.Prop):org.scalacheck.Prop)
* or operator: [`||`](https://www.scalacheck.org/files/scalacheck_2.11-1.13.4-api/index.html#org.scalacheck.Prop@||(p:=>org.scalacheck.Prop):org.scalacheck.Prop)
* collection of statistics: [`collect`](https://www.scalacheck.org/files/scalacheck_2.11-1.13.4-api/index.html#org.scalacheck.Prop$@collect[T](t:T)(prop:org.scalacheck.Prop):org.scalacheck.Prop), [`classify`](https://www.scalacheck.org/files/scalacheck_2.11-1.13.4-api/index.html#org.scalacheck.Prop$@classify(c:=>Boolean,ifTrue:Any)(prop:org.scalacheck.Prop):org.scalacheck.Prop)
* constant properties: [`undecided`](https://www.scalacheck.org/files/scalacheck_2.11-1.13.4-api/index.html#org.scalacheck.Prop$@undecided:org.scalacheck.Prop), [`falsified`](https://www.scalacheck.org/files/scalacheck_2.11-1.13.4-api/index.html#org.scalacheck.Prop$@falsified:org.scalacheck.Prop), [`proved`](https://www.scalacheck.org/files/scalacheck_2.11-1.13.4-api/index.html#org.scalacheck.Prop$@proved:org.scalacheck.Prop), [`passed`](https://www.scalacheck.org/files/scalacheck_2.11-1.13.4-api/index.html#org.scalacheck.Prop$@passed:org.scalacheck.Prop), [`exception`](https://www.scalacheck.org/files/scalacheck_2.11-1.13.4-api/index.html#org.scalacheck.Prop$@exception:org.scalacheck.Prop)
* implication operator: [`==>`](https://www.scalacheck.org/files/scalacheck_2.11-1.13.4-api/index.html#org.scalacheck.Prop@==>(p:=>org.scalacheck.Prop):org.scalacheck.Prop)
* [`listOfN`](https://www.scalacheck.org/files/scalacheck_2.11-1.13.4-api/index.html#org.scalacheck.Gen$@listOfN[T](n:Int,g:org.scalacheck.Gen[T]):org.scalacheck.Gen[List[T]])
* [`frequency`](https://www.scalacheck.org/files/scalacheck_2.11-1.13.4-api/index.html#org.scalacheck.Gen$@frequency[T](gs:(Int,org.scalacheck.Gen[T])*):org.scalacheck.Gen[T])

## Links

* http://booksites.artima.com/scalacheck
* http://booksites.artima.com/scalacheck/ScalaCheckExamples.zip
* http://jsverify.github.io/
* https://github.com/jsverify/jsverify#documentation
