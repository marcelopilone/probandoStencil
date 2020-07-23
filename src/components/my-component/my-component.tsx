import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  @Prop() name: string = 'hola';

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  retornarNombre(): string {

    return this.name;
  }

  render() {
    return(
        <div>
          <p class="rojo">{this.retornarNombre()}</p>
          <p class="azul">{this.retornarNombre()}</p>
        </div>
    );
  }
}
