# Mobile Test: Henri Potier's Library

### Subject

> Once upon a time, there was a collection of five books telling the stories of a great hero named Henri Potier.
All the children in the world found the stories of this teenager fantastic.
The publisher of this collection, in a huge surge of generosity (but also to boost his sales :wink:),
decided to set up commercial offers as random as the outcome of Ron Weasley's spells.

The editor asks you to develop an Android or iOS mobile application with two interfaces:

1. The first one allows you to display the books you want to buy;
1. The second one summarizes the basket on which __the best commercial offer__ will be applied.

You should know that the editor will pay special attention to __the quality of the developments__.
&nbsp;

### Resources

The list of Henri Potier books is accessible at `https://henri-potier.techx.fr/books` in `GET`.

The associated commercial offers are available in `GET` at the following address: `https://henri-potier.techx.fr/books/{ISBN1, ISBN2, ...}/commercialOffers`

### Example

For two books (at 35€ and 30€ respectively), the query will look like : `https://henri-potier.techx.fr/books/c8fabf68-8374-48fe-a7ea-a00ccd07afff,a460afed-e5e7-4e39-a39d-c885c05db861/commercialOffers`

The service will return the offers applicable to this basket in `JSON` :
```json
{
  "offers": [
    { "type": "percentage", "value": 5 },
    { "type": "minus", "value": 15 },
    { "type": "slice", "sliceValue": 100, "value": 12 }
  ]
}
```

In this example, the most interesting promotion for the customer is the `minus` promotion, so the expected basket price is `65€ - 15€`, or `50€`.

#### Explanations

* The first offer identified by a `percentage` type is a discount applied on the price of all the books.
the price of all the books.
The amount of the discount is in `value` ;

* The second offer identified by a `minus` type is a directly applicable deduction of a `value` amount
deduction of a `value` amount;

* The third offer identified by an `slice` type is a refund per purchase.
In this example, we refund 12€ for every 100€ of purchase.

*Beyond the "imposed exercise", any additional original idea will be appreciated.*
