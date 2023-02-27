import { map } from 'rxjs';
import { Component } from '@angular/core';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { injectActivatedRoute } from '@analogjs/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  template: `
    <h2>Product Details</h2>

    ID: {{ productId$ | async }}
  `,
})
export default class ProductDetailsPageComponent {
  private readonly route = injectActivatedRoute();

  readonly productId$ = this.route.paramMap.pipe(
    map((params) => params.get('productId'))
  );
}
